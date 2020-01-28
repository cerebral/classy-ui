import { writeFileSync } from 'fs';
import { join } from 'path';

import { config as baseConfig } from '../config/base.config';
import { transform as transformClassesToTypes } from '../config/transform-classes-to-types';
import { transform as transformConfigToClasses } from '../config/transform-config-to-classes';
import { IClassesByType } from '../types';
import { getUserConfig, isBreakpoint, mergeConfigs } from '../utils';

const typesPath = join(process.cwd(), 'node_modules', 'classy-ui', 'lib', 'classy-ui.d.ts');
const cssPath = join(process.cwd(), 'node_modules', 'classy-ui', 'styles.css');
const config = mergeConfigs(baseConfig, getUserConfig());
const classes = transformConfigToClasses(config);
const productionClassesByType: IClassesByType = {
  breakpoints: {
    sm: [],
    md: [],
    lg: [],
    xl: [],
  },
  common: {},
  themes: {},
  variables: {},
};

writeFileSync(typesPath, transformClassesToTypes(classes));

export default (babel: any) => {
  return {
    name: 'classy-ui/plugin',
    visitor: {
      Program(programmPath: any, state: any) {
        programmPath.traverse({
          ImportDeclaration(path: any) {
            if (path?.node?.source?.value === 'classy-ui') {
              const binding = path.scope.getBinding('classnames');

              if (binding && Boolean(binding.referencePaths.length)) {
                processReferences(babel, state, binding.referencePaths);
              }
            }
          },
        });
      },
    },
  };
};

function camleToDash(string: string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
}

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

let nameCounter = 1;
const nameCache = new Map();

function computeProductionName(id: string) {
  if (nameCache.has(id)) {
    return nameCache.get(id);
  } else {
    const name = generateShortName(nameCounter++);
    nameCache.set(id, name);
    return name;
  }
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

  function createClassObject(id: string, { pseudos, breakpoints }: { pseudos: string[]; breakpoints: string[] }) {
    const uid = breakpoints.sort().join(':') + ':' + id + ':' + pseudos.sort().join(':');
    return {
      uid,
      id,
      name: isProduction ? computeProductionName(id) : uid,
      pseudos: pseudos.slice(),
      breakpoints: breakpoints.slice(),
    };
  }

  function updateContext({ pseudos, breakpoints }: { pseudos: string[]; breakpoints: string[] }, value: string) {
    const context = { pseudos: pseudos.slice(), breakpoints: breakpoints.slice() };
    value = camleToDash(value);
    if (isBreakpoint(value)) {
      context.breakpoints.push(value);
    } else {
      context.pseudos.push(value);
    }
    return context;
  }

  function throwCodeFragmentIfIdNotFound(path: any, id: string) {
    if (!classes[id]) {
      throw path.buildCodeFrameError(`Could not find class ${id}`);
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

  function rewriteAndCollectArguments(context: any, argumentPaths: any, collect: any) {
    return argumentPaths.reduce((aggr: any[], argPath: any) => {
      const node = argPath.node;

      if (t.isStringLiteral(node)) {
        const classObj = createClassObject(node.value, context);
        throwCodeFragmentIfIdNotFound(argPath, classObj.id);
        collect.add(classObj);
        return aggr.concat([t.stringLiteral(classObj.name)]);
      } else if (t.isIdentifier(node)) {
        return aggr.concat([node]);
      } else if (t.isCallExpression(node) && t.isIdentifier(node.callee)) {
        // To support import { hover as ho }...
        const name = getImportName(node.callee.name, argPath.scope);
        // When not found it is not part of classy ui
        if (name != null) {
          const newContext = updateContext(context, name);
          return aggr.concat(rewriteAndCollectArguments(newContext, argPath.get('arguments'), collect));
        }
      } else if (t.isObjectExpression(node)) {
        return argPath.get('properties').map((propPath: any) => {
          const id = getIdOrThrow(propPath.get('key'));
          const classObj = createClassObject(id, context);
          throwCodeFragmentIfIdNotFound(propPath, classObj.id);
          collect.add(classObj);
          return aggr.concat(
            t.conditionalExpression(propPath.node.value, t.stringLiteral(classObj.name), t.stringLiteral('')),
          );
        });
      }

      return aggr.concat(node);
    }, []);
  }

  const classCollection = new Set();
  classnamesRefs
    .map((ref: any) => ref.findParent((p: any) => t.isCallExpression(p)))
    .forEach((call: any) => {
      const rewrite = rewriteAndCollectArguments(
        { pseudos: [], breakpoints: [] },
        call.get('arguments'),
        classCollection,
      );
      const newExpression = convertToExpression(rewrite.flat());
      if (newExpression) {
        call.replaceWith(newExpression);
      } else {
        call.remove();
      }
    });

  // TODO: Implement generating instead of throwing.
  throw new Error(JSON.stringify([...classCollection], null, 2));
}
