// @ts-nocheck
import '../classy-ui';

import { writeFileSync, unlinkSync, appendFileSync } from 'fs';
import { join } from 'path';

import { config } from '../config/base.config';
import { transform as transformCss } from '../config/transform-css';
import { transform as transformTypes } from '../config/transform-types';

const isProduction = process.env.NODE_ENV === 'production';
const prodSylePath = join(process.cwd(), 'src', 'style.css');

if (isProduction) {
  unlinkSync(prodSylePath);
}

export default classyUiMacro;

classyUiMacro.isBabelMacro = true;
classyUiMacro.options = {};

let userConfig = {};

try {
  userConfig = require(join(process.cwd(), 'classy-ui.config.js'));
} catch (error) {
  setTimeout(() => {
    console.log('No user config...', error);
  }, 1000);
}

function mergeConfigs(configA, configB) {
  return {
    ...configA,
    ...configB,
  };
}

const classes = transformCss(mergeConfigs(config, userConfig));

writeFileSync(join(process.cwd(), 'node_modules', 'classy-ui', 'lib', 'classy-ui.d.ts'), transformTypes(classes));

function camleToDash(string) {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
}

function generateShortName(number) {
  var baseChar = 'A'.charCodeAt(0),
    letters = '';

  do {
    number -= 1;
    letters = String.fromCharCode(baseChar + (number % 26)) + letters;
    number = (number / 26) >> 0;
  } while (number > 0);

  return letters;
}

let globalCounter = 1;
const classNameMap = new Map();

function getClassname(realName) {
  if (isProduction) {
    if (classNameMap.has(realName)) {
      return classNameMap.get(realName);
    } else {
      const shortName = generateShortName(globalCounter++);
      classNameMap.set(realName, shortName);
      return shortName;
    }
  } else {
    return realName;
  }
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
        return aggr.concat([t.stringLiteral(getClassname(className))]);
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
          return aggr.concat(
            t.conditionalExpression(prop.value, t.stringLiteral(getClassname(className)), t.stringLiteral('')),
          );
        });
      }
      return aggr.concat(node);
    }, []);
  }

  function createClassnameCss(aggr, name) {
    const parts = name.split(':');

    // This is the mapped classname
    // that is used in production it is a short string
    // in dev it is the same as the name

    // : needs to be repleaced in the css declaration
    const mappedClassName = getClassname(name).replace(/:/g, '\\:');

    let css;
    if (parts.length == 1) {
      css = `.${mappedClassName}${classes[parts[0]]}`;
    } else if (parts.length > 1) {
      const maybeSizeClass = config.breakpoints[parts[0]];
      let className = parts.pop();
      if (maybeSizeClass) {
        parts.shift(); // This is the sizeclass
        let pseudo = parts.join(':');
        if (pseudo.length > 0) {
          pseudo = ':' + pseudo;
        }
        css = `@media(max-width: ${maybeSizeClass}){.${mappedClassName + pseudo}${classes[className]}}`;
      } else {
        let pseudo = parts.join(':');
        if (pseudo.length > 0) {
          pseudo = ':' + pseudo;
        }
        css = `.${mappedClassName + pseudo}${classes[className]}`;
      }
    }

    return aggr.concat([t.stringLiteral(getClassname(name)), t.stringLiteral(css)]);
  }

  const classCollection = new Set();
  const classnames = references.classnames || [];

  if (classnames.length > 0) {
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

    if (isProduction) {
      appendFileSync(
        prodSylePath,
        [...classCollection]
          .reduce(createClassnameCss, [])
          .filter((_, i) => i % 2 !== 0)
          .flatMap(v => v)
          .map(v => v.value)
          .join('\n'),
      );

      const relativePath = path.relative(state.file.filename, prodSylePath);
      state.file.ast.program.body.unshift(t.importDeclaration([], t.stringLiteral(relativePath)));
    } else {
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
  }
}
