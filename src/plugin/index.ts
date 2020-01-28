// @ts-nocheck

export default babel => {
  return {
    name: 'classy-ui/plugin',
    visitor: {
      Program(programmPath, state) {
        programmPath.traverse({
          ImportDeclaration(path) {
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

// TODO: FIX ME
function isIdAvaiable(id) {
  return true;
}
// TODO: FIX ME
function isBreakpoint(name) {
  return ['md', 'lg'].indexOf(name) > -1;
}

function camleToDash(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
}

function generateShortName(number) {
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
function computeName(id, isProduction) {
  if (isProduction) {
    if (nameCache.has(id)) {
      return nameCache.get(id);
    } else {
      const name = generateShortName(nameCounter++);
      nameCache.set(id, name);
      return name;
    }
  } else {
    return id;
  }
}

export function processReferences(babel, state, classnamesRefs) {
  const { types: t } = babel;

  const isProduction = babel.getEnv() === 'production';

  function convertToExpression(arr) {
    if (arr.length == 1) {
      return arr[0];
    } else {
      // TODO: This could be better
      // using a binaryExpression + some logic to join stringLiterals etc.
      // curerntly just doing a ['', ''].join(' ')
      return t.expressionStatement(
        t.callExpression(t.memberExpression(t.arrayExpression(arr), t.identifier('join')), [t.stringLiteral(' ')]),
      );
    }
  }

  function getImportName(name, scope) {
    const binding = scope.getBinding(name);
    if (binding && t.isImportSpecifier(binding.path.node) && binding.path.parent.source.value.startsWith('classy-ui')) {
      return binding.path.node.imported.name;
    }
    return null;
  }

  function createClassObject(id, { pseudos, breakpoints }) {
    const name = computeName(id, isProduction);
    return { id, name, pseudos: pseudos.slice(), breakpoints: breakpoints.slice() };
  }

  function updateContext({ pseudos, breakpoints }, value) {
    const context = { pseudos: pseudos.slice(), breakpoints: breakpoints.slice() };
    value = camleToDash(value);
    if (isBreakpoint(value)) {
      context.breakpoints.push(value);
    } else {
      context.pseudos.push(value);
    }
    return context;
  }

  function throwCodeFragmentIfIdNotFound(path, id) {
    if (!isIdAvaiable(id)) {
      throw path.buildCodeFrameError(`Could not find class ${id}`);
    }
  }

  function getIdOrThrow(path) {
    if (t.isStringLiteral(path.node)) {
      return path.node.value;
    } else if (t.isIdentifier(path.node)) {
      return path.node.name;
    } else {
      throw path.buildCodeFrameError(`This property is not supported`);
    }
  }

  function rewriteAndCollectArguments(context, argumentPaths, collect) {
    return argumentPaths.reduce((aggr, argPath) => {
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
        return argPath.get('properties').map(propPath => {
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
    .map(ref => ref.findParent(p => t.isCallExpression(p)))
    .forEach(call => {
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
