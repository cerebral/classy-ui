import { writeFileSync } from 'fs';
import { join } from 'path';

import { config as baseConfig } from '../config/base.config';
import { transform as transformClassesToTypes } from '../config/transform-classes-to-types';
import { transform as transformConfigToClasses } from '../config/transform-config-to-classes';
import { IExtractedClass, IExtractedClasses } from '../types';
import { flat, getUserConfig, injectDevelopment, injectProduction, mergeConfigs } from '../utils';

const typesPath = join(process.cwd(), 'node_modules', 'classy-ui', 'lib', 'classy-ui.d.ts');
const cssPath = join(process.cwd(), 'node_modules', 'classy-ui', 'styles.css');
const config = mergeConfigs(baseConfig, getUserConfig());
const classes = transformConfigToClasses(config);

if (process.env.NODE_ENV !== 'test') {
  writeFileSync(typesPath, transformClassesToTypes(classes, config));
}

export default (babel: any) => {
  return {
    name: 'classy-ui/plugin',
    visitor: {
      Program(programmPath: any, state: any) {
        programmPath.traverse({
          ImportDeclaration(path: any) {
            if (path?.node?.source?.value === 'classy-ui') {
              const imports = path.node.specifiers.map((s: any) => s.local.name);

              const referencePaths = imports.reduce((aggr: any[], localName: string) => {
                const binding = path.scope.getBinding(localName);
                if (binding && Boolean(binding.referencePaths.length)) {
                  aggr = aggr.concat(binding.referencePaths);
                }
                return aggr;
              }, []);

              if (Boolean(referencePaths.length)) {
                processReferences(babel, state, referencePaths);
              }
            }
          },
        });
      },
    },
  };
};

function generateShortName(number: number) {
  let baseChar = 'A'.charCodeAt(0);
  let letters = '';

  do {
    number -= 1;
    letters = String.fromCharCode(baseChar + (number % 26)) + letters;
    number = (number / 26) >> 0;
  } while (number > 0);

  return letters;
}

export function processReferences(babel: any, state: any, classnamesRefs: any) {
  const { types: t } = babel;

  const isProduction = babel.getEnv() === 'production';

  function convertToExpression(arr: any[]) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      const strings = [];
      const others = [];
      for (let item of arr) {
        if (t.isStringLiteral(item)) {
          strings.push(item.value);
        } else {
          others.push(item);
        }
      }
      if (strings.length > 0 && others.length > 0) {
        others.unshift(t.stringLiteral(strings.join(' ')));
      } else if (strings.length > 0) {
        return t.stringLiteral(strings.join(' '));
      }

      let max = others.length - 1;
      let start = others[max];
      for (let i = max - 1; i >= 0; i--) {
        start = t.binaryExpression('+', others[i], start);
      }

      return start;
    }
  }

  function getImportName(name: string, scope: any) {
    const binding = scope.getBinding(name);
    if (binding && t.isImportSpecifier(binding.path.node) && binding.path.parent.source.value.startsWith('classy-ui')) {
      return binding.path.node.imported.name;
    }
    return null;
  }

  function createClassObject(id: string | undefined, decorators: IExtractedClass['decorators']): IExtractedClass {
    const uid = [decorators.sort().join(':'), id]
      .filter(Boolean)
      .filter(i => i!.length > 0)
      .join(':');
    let name = '';

    if (decorators.length === 1 && decorators[0] === 'theme') {
      name = `themes-${id}`;
    } else if (id) {
      name = uid;
    } else if (decorators.length === 1 && decorators[0] === 'group') {
      name = 'group';
    }

    return {
      id,
      uid,
      name,
      decorators: decorators.slice() as IExtractedClass['decorators'],
    };
  }

  function updateContext(decorators: string[], value: string) {
    const newDecorators = decorators.slice();
    newDecorators.push(value);
    return newDecorators;
  }

  function throwCodeFragmentIfInvalidId(path: any, id: string, decorators: string[]) {
    if (decorators[0] === 'theme' && id in (config.themes || {})) {
      return;
    }

    if (!classes[id]) {
      throw path.buildCodeFrameError(`Could not find class ${id}`);
    }
  }
  function throwIfForbiddenName(path: any, decorators: string[], name: string) {
    if (decorators.includes(name)) {
      throw path.buildCodeFrameError(`Duplicating ${name} is not allowed.`);
    }
  }

  function getIdOrThrow(path: any) {
    if (t.isStringLiteral(path.node)) {
      return path.node.value;
    } else if (t.isIdentifier(path.node)) {
      return path.node.name;
    } else {
      throw path.buildCodeFrameError(`This property is not supported`);
    }
  }

  function rewriteAndCollectArguments(decorators: any, argumentPaths: any, collect: IExtractedClasses) {
    // if root call has no arguments
    if (argumentPaths.length === 0) {
      const classObj = createClassObject(undefined, decorators);
      return [t.stringLiteral(classObj.name)];
    }
    // process arguments
    return argumentPaths.reduce((aggr: any[], argPath: any) => {
      const node = argPath.node;

      if (t.isStringLiteral(node)) {
        const id = node.value;
        throwCodeFragmentIfInvalidId(argPath, id, decorators);
        const classObj = createClassObject(node.value, decorators);

        if (!classObj.name.startsWith('themes-')) {
          collect[classObj.uid] = classObj;
        }
        return aggr.concat([t.stringLiteral(classObj.name)]);
      } else if (t.isIdentifier(node)) {
        return aggr.concat([node]);
      } else if (t.isCallExpression(node) && t.isIdentifier(node.callee)) {
        // To support import { hover as ho }...
        const name = getImportName(node.callee.name, argPath.scope);
        // When not found it is not part of classy ui
        if (name != null) {
          throwIfForbiddenName(argPath, decorators, name);
          const newDecorators = updateContext(decorators, name);
          const childArguments = argPath.get('arguments');
          if (Boolean(childArguments.length)) {
            return aggr.concat(rewriteAndCollectArguments(newDecorators, childArguments, collect));
          } else {
            // if subsequent calls have no arguments
            const classObj = createClassObject(undefined, newDecorators);
            return aggr.concat([t.stringLiteral(classObj.name)]);
          }
        }
      } else if (t.isObjectExpression(node)) {
        return argPath.get('properties').map((propPath: any) => {
          const id = getIdOrThrow(propPath.get('key'));
          throwCodeFragmentIfInvalidId(propPath, id, decorators);
          const classObj = createClassObject(id, decorators);

          if (!classObj.name.startsWith('themes-')) {
            collect[classObj.uid] = classObj;
          }
          return aggr.concat(
            t.conditionalExpression(propPath.node.value, t.stringLiteral(classObj.name), t.stringLiteral('')),
          );
        });
      }

      return aggr.concat(node);
    }, []);
  }

  const classCollection: IExtractedClasses = {};

  classnamesRefs
    // Only use top-most class
    .filter((path: any) => {
      // path.node will always be an identifier
      // if path.parentPath.parent is a CallExpression
      // it's callee name must not be part of classy-ui to be allowed here

      if (t.isCallExpression(path.parentPath.parent)) {
        return getImportName(path.parentPath.parent.callee.name, path.scope) === null;
      }
      return true;
    })
    .forEach((path: any) => {
      const statementPath = path.parentPath;
      const rewrite = rewriteAndCollectArguments(
        [getImportName(path.node.name, path.scope)],
        statementPath.get('arguments'),
        classCollection,
      );
      const newExpression = convertToExpression(flat(rewrite));
      if (newExpression) {
        statementPath.replaceWith(newExpression);
      } else {
        // We can't safely remove the whole expression
        // becasue in JSX you need to have a actual argument
        statementPath.replaceWith(t.stringLiteral(''));
      }
    });

  if (isProduction) {
    writeFileSync(cssPath, injectProduction(classCollection, classes, config));
    state.file.ast.program.body.unshift(t.importDeclaration([], t.stringLiteral('classy-ui/styles.css')));
  } else {
    const localAddClassUid = state.file.scope.generateUidIdentifier('addClasses');

    const runtimeCall = t.expressionStatement(
      t.callExpression(localAddClassUid, [
        t.arrayExpression(injectDevelopment(classCollection, classes, config).map(value => t.stringLiteral(value))),
      ]),
    );

    state.file.ast.program.body.push(runtimeCall);
    state.file.ast.program.body.unshift(
      t.importDeclaration(
        [t.importSpecifier(localAddClassUid, t.identifier('addClasses'))],
        t.stringLiteral('classy-ui/runtime'),
      ),
    );
  }
}
