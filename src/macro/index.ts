// @ts-nocheck
export default myMacro;

myMacro.isBabelMacro = true;
myMacro.options = {};

function camleToDash(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
}

function myMacro({ references, state, babel }) {
  const { types: t } = babel;

  console.log('HELLO!');
  console.log('FILE', state.file.opts.filename);

  function getResolvedName(name, scope) {
    const binding = scope.getBinding(name);
    if (binding) {
      if (t.isImportSpecifier(binding.path.node)) {
        return binding.path.node.imported.name;
      }
    }

    return name;
  }

  function extractStringArgs(args, usedClasses, scope) {
    args = args
      .map(arg => {
        if (t.isStringLiteral(arg)) {
          return arg.value;
        } else if (t.isCallExpression(arg)) {
          const name = getResolvedName(arg.callee.name, scope);
          return `${camleToDash(name)}:${arg.arguments[0].value}`;
        }
      })
      .filter(Boolean);
    if (args.length > 0) {
      // add tracking
      args.forEach(cn => usedClasses.add(cn));

      return t.stringLiteral(args.join(' '));
    }
  }

  function extractObjectAndIdentifiersArgs(args, usedClasses) {
    let idArgs = args.filter(t.isIdentifier);

    let objectArgs = args
      .reduce((aggr, arg) => {
        if (t.isObjectExpression(arg)) {
          return aggr.concat(arg.properties);
        }

        return aggr;
      }, [])
      .filter(Boolean);

    let newArgs = [];
    if (idArgs.length > 0) {
      newArgs = newArgs.concat(idArgs);
    }
    if (objectArgs.length > 0) {
      // add tracking
      objectArgs.forEach(prop => usedClasses.add(prop.key.value));

      newArgs.push(t.objectExpression(objectArgs));
    }
    if (newArgs.length > 0) {
      return t.callExpression(t.identifier('classnames'), newArgs);
    }
  }

  function rewriteClasssnames(refs, usedClasses) {
    refs
      .map(ref => ref.findParent(p => t.isCallExpression(p)))
      .forEach(parent => {
        let stringArgs = extractStringArgs(parent.node.arguments, usedClasses, parent.scope);
        let objectArgs = extractObjectAndIdentifiersArgs(parent.node.arguments, usedClasses, parent.scope);

        if (stringArgs && objectArgs) {
          parent.replaceWith(t.binaryExpression('+', objectArgs, stringArgs));
        } else if (stringArgs) {
          parent.replaceWith(stringArgs);
        } else if (objectArgs) {
          parent.replaceWith(objectArgs);
        }
      });
  }

  let usedClasses = new Set();
  rewriteClasssnames(references.classnames, usedClasses);

  const localAddClassUid = state.file.scope.generateUidIdentifier('addClasses');

  const runtimeCall = t.callExpression(localAddClassUid, [
    t.arrayExpression([...usedClasses].map(name => t.stringLiteral(name))),
  ]);

  state.file.ast.program.body.push(runtimeCall);
  state.file.ast.program.body.unshift(
    t.importDeclaration(
      [t.importSpecifier(t.identifier('addClasses'), localAddClassUid)],
      t.stringLiteral('classy-ui/runtime'),
    ),
  );
}
