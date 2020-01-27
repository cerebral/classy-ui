// @ts-nocheck
import { writeFileSync } from 'fs';
import { join } from 'path';

import { config } from '../config/base.config';
import { transform as transformCss } from '../config/transform-css';
import { transform as transformTypes } from '../config/transform-types';

export default classyUiMacro;

classyUiMacro.isBabelMacro = true;
classyUiMacro.options = {};

const classes = transformCss(config);

writeFileSync(join(process.cwd(), 'classy-ui.d.ts'), transformTypes(classes));

function camleToDash(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
}

function classyUiMacro({ references, state, babel }) {
  const { types: t } = babel;

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

  function getClassyName(name, scope) {
    const binding = scope.getBinding(name);
    if (binding && t.isImportSpecifier(binding.path.node) && binding.path.parent.source.value === 'classy-ui/macro') {
      return binding.path.node.imported.name;
    }
    return null;
  }

  function rewriteAndCollectArguments(prefix, argumentPaths, collect) {
    return argumentPaths.reduce((aggr, argPath) => {
      const node = argPath.node;
      if (t.isStringLiteral(node)) {
        const className = `${prefix}${node.value}`;
        collect.add(className);
        return aggr.concat([t.stringLiteral(className)]);
      } else if (t.isIdentifier(node)) {
        return aggr.concat([node]);
      } else if (t.isCallExpression(node) && t.isIdentifier(node.callee)) {
        // To support import { hover as ho }...
        const name = getClassyName(node.callee.name, argPath.scope);
        // When not found it is not part of classy ui
        if (name != null) {
          return aggr.concat(
            rewriteAndCollectArguments(`${prefix}${camleToDash(name)}:`, argPath.get('arguments'), collect),
          );
        }
      } else if (t.isObjectExpression(node)) {
        return node.properties.map(prop => {
          const className = `${prefix}${prop.key.value}`;
          collect.add(className);
          return aggr.concat(t.conditionalExpression(prop.value, t.stringLiteral(className), t.stringLiteral('')));
        });
      }
      return aggr.concat(node);
    }, []);
  }

  function createClassnameCss(aggr, name) {
    const [partA, partB] = name.split(':');
    const className = partB || partA;
    const pseudo = partB ? partA : 'NOOP';
    let css = classes[className];

    if (pseudo) {
      css = `:${pseudo}${classes[className]}`;
    }

    return aggr.concat([t.stringLiteral(className), t.stringLiteral(css)]);
  }

  const classCollection = new Set();
  const classnames = references.classnames || [];

  classnames
    .map(ref => ref.findParent(p => t.isCallExpression(p)))
    .forEach(call => {
      const rewrite = rewriteAndCollectArguments('', call.get('arguments'), classCollection);
      const newExpression = convertToExpression(rewrite);
      if (newExpression) {
        call.replaceWith(newExpression);
      } else {
        call.remove();
      }
    });

  const localAddClassUid = state.file.scope.generateUidIdentifier('addClasses');

  const runtimeCall = t.callExpression(localAddClassUid, [
    t.arrayExpression([...classCollection].reduce(createClassnameCss, [])),
  ]);

  state.file.ast.program.body.push(runtimeCall);
  state.file.ast.program.body.unshift(
    t.importDeclaration(
      [t.importSpecifier(localAddClassUid, t.identifier('addClasses'))],
      t.stringLiteral('classy-ui/runtime'),
    ),
  );
}
