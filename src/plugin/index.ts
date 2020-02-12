import { addNamed, addSideEffect } from '@babel/helper-module-imports';

import { writeFileSync } from 'fs';
import { join } from 'path';

import { transform as transformClassesToTypes } from '../config/transform-classes-to-types';
import { transform as transformConfigToClasses } from '../config/transform-config-to-classes';
import { IExtractedClass, IExtractedClasses } from '../types';
import { createClassObject, evaluateConfig, getUserConfig, injectDevelopment, injectProduction } from '../utils';

const cssPath = join(process.cwd(), 'node_modules', 'classy-ui', 'styles.css');
const config = evaluateConfig(getUserConfig());
const classes = transformConfigToClasses(config);

if (process.env.NODE_ENV !== 'test') {
  try {
    const esTypesPath = join(process.cwd(), 'node_modules', 'classy-ui', 'es', 'classy-ui.d.ts');
    const libTypesPath = join(process.cwd(), 'node_modules', 'classy-ui', 'lib', 'classy-ui.d.ts');
    const types = transformClassesToTypes(classes, config);

    writeFileSync(esTypesPath, types);
    writeFileSync(libTypesPath, types);
  } catch {
    // Codesandbox or some other unwritable environment
  }
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
                path.remove();
              }
            }
          },
        });
      },
    },
  };
};

export function processReferences(babel: any, state: any, classnamesRefs: any) {
  const { types: t } = babel;

  const isProduction = babel.getEnv() === 'production';

  const classCollection: IExtractedClasses = {};

  function collectGlobally(classObj: IExtractedClass): string[] {
    if (classObj.id && classObj.uid) {
      classCollection[classObj.uid] = classObj;
    }
    return classObj.name.trim().split(' ');
  }

  function convertToExpression(classAttribs: Set<any>) {
    if (classAttribs.size === 0) {
      return t.stringLiteral(' ');
    }

    let needsRuntime: boolean = false;
    const strings: string[] = [];
    const others: any[] = [];
    for (const item of classAttribs.values()) {
      if (typeof item === 'string') {
        strings.push(item);
      } else {
        if (t.isIdentifier(item)) {
          needsRuntime = true;
        }
        others.push(item);
      }
    }

    // if there are only string literals just return them. This is a _short path_
    if (strings.length > 0 && others.length === 0) {
      return t.stringLiteral(strings.join(' ') + ' ');
    }

    const max = others.length - 1;
    let start = others[max];
    for (let i = max - 1; i >= 0; i--) {
      start = t.binaryExpression('+', others[i], start);
    }

    if (strings.length === 0) {
      return start;
    }

    start = t.binaryExpression('+', start, t.stringLiteral(strings.join(' ') + ' '));

    if (needsRuntime) {
      return t.callExpression(addNamed(state.file.path, 'fixSpecificity', 'classy-ui/runtime'), [start]);
    }

    return start;
  }

  function getImportName(name: string, scope: any) {
    const binding = scope.getBinding(name);
    if (binding && t.isImportSpecifier(binding.path.node) && binding.path.parent.source.value.startsWith('classy-ui')) {
      return binding.path.node.imported.name;
    }
    return null;
  }

  function throwIfInvalidId(path: any, id: string) {
    if (!classes[id] && !id.startsWith('themes-')) {
      throw path.buildCodeFrameError(`CLASSY-UI: Could not find classname ${id}`);
    }
  }
  function throwIfForbiddenDecorator(path: any, decorators: string[], name: string) {
    if (decorators.includes(name)) {
      throw path.buildCodeFrameError(`Duplicating ${name} is not allowed.`);
    }
  }

  function throwIfNotStartedByC(path: any, decorators: string[]) {
    if (decorators[0] !== 'c') {
      throw path.buildCodeFrameError(`Composing variabels is only allowed with c()`);
    }
  }

  function getId(path: any) {
    if (t.isStringLiteral(path.node)) {
      return path.node.value;
    } else if (t.isIdentifier(path.node)) {
      return path.node.name;
    } else {
      throw path.buildCodeFrameError(`This property is not supported`);
    }
  }

  function collectClassnames(decorators: string[], argumentPaths: any[], classArgs: Set<any>) {
    // if root call has no arguments
    if (argumentPaths.length === 0) {
      collectGlobally(createClassObject(undefined, decorators, classes, isProduction)).forEach(
        classArgs.add,
        classArgs,
      );
    }

    // process arguments
    for (let argPath of argumentPaths) {
      const node = argPath.node;

      if (t.isStringLiteral(node)) {
        throwIfInvalidId(argPath, node.value);

        collectGlobally(createClassObject(node.value, decorators, classes, isProduction)).forEach(
          classArgs.add,
          classArgs,
        );
      } else if (t.isIdentifier(node)) {
        throwIfNotStartedByC(argPath, decorators);
        classArgs.add(node);
      } else if (t.isCallExpression(node) && t.isIdentifier(node.callee)) {
        // To support import { hover as ho }...
        const importedName = getImportName(node.callee.name, argPath.scope);

        if (importedName) {
          throwIfForbiddenDecorator(argPath, decorators, importedName);

          // Create new decorators including current one
          const newDecorators = decorators.slice();
          newDecorators.push(importedName);

          const childArguments = argPath.get('arguments');
          if (Boolean(childArguments.length)) {
            collectClassnames(newDecorators, childArguments, classArgs);
          } else {
            // if subsequent calls have no arguments
            collectGlobally(createClassObject(undefined, newDecorators, classes, isProduction)).forEach(
              classArgs.add,
              classArgs,
            );
          }
        } else {
          // This is an unknown call to some function
          classArgs.add(node);
        }
      } else if (t.isObjectExpression(node)) {
        for (let propPath of argPath.get('properties')) {
          const id = getId(propPath.get('key'));
          throwIfInvalidId(propPath, id);
          collectGlobally(createClassObject(id, decorators, classes, isProduction))
            .map(name => {
              return t.conditionalExpression(propPath.node.value, t.stringLiteral(name + ' '), t.stringLiteral(''));
            })
            .forEach(classArgs.add, classArgs);
        }
      } else {
        classArgs.add(node);
      }
    }
  }
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
      const extractedClasnames = new Set();

      collectClassnames(
        [getImportName(path.node.name, path.scope)],
        statementPath.get('arguments'),
        extractedClasnames,
      );

      statementPath.replaceWith(convertToExpression(extractedClasnames));
    });

  if (isProduction) {
    writeFileSync(cssPath, injectProduction(classCollection, classes, config));
    addSideEffect(state.file.path, 'classy-ui/styles.css');
  } else {
    const runtimeCall = t.expressionStatement(
      t.callExpression(addNamed(state.file.path, 'addClasses', 'classy-ui/runtime'), [
        t.arrayExpression(injectDevelopment(classCollection, classes, config).map(value => t.stringLiteral(value))),
      ]),
    );

    state.file.ast.program.body.push(runtimeCall);
  }

  addSideEffect(state.file.path, 'classy-ui/preflight.css');
}
