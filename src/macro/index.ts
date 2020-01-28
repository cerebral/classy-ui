// @ts-nocheck
import '../classy-ui';

import { writeFileSync } from 'fs';
import { join } from 'path';

import { config } from '../config/base.config';
import { transform as transformCss } from '../config/transform-css';
import { transform as transformTypes } from '../config/transform-types';

export default classyUiMacro;

classyUiMacro.isBabelMacro = true;
classyUiMacro.options = {};

const typesPath = join(process.cwd(), 'node_modules', 'classy-ui', 'lib', 'classy-ui.d.ts');
const cssPath = join(process.cwd(), 'node_modules', 'classy-ui', 'styles.css');
let userConfig = null;

try {
  userConfig = require(join(process.cwd(), 'classy-ui.config.js'));
} catch (error) {}

function mergeConfigs(configA, configB) {
  return Object.keys(configA).reduce(
    (aggr, key) => {
      aggr[key] = {
        ...configA[key],
        ...configB[key],
      };

      return aggr;
    },
    {
      themes: configB.themes,
    },
  );
}

setTimeout(() => {
  console.log(userConfig ? 'Found user config' : 'No user config...');
}, 1000);

const classes = transformCss(mergeConfigs(config, userConfig || {}));

writeFileSync(typesPath, transformTypes(classes));

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
const prodCss = {
  breakpoints: {},
  common: {},
  themes: {},
};

function getClassname(realName, isProduction) {
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
  const isProduction = false; //babel.getEnv() === 'production';

  setTimeout(() => console.log('Running:', isProduction), 1000);

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
        return aggr.concat([t.stringLiteral(getClassname(className, isProduction))]);
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
            t.conditionalExpression(
              prop.value,
              t.stringLiteral(getClassname(className, isProduction)),
              t.stringLiteral(''),
            ),
          );
        });
      }
      return aggr.concat(node);
    }, []);
  }

  function createClassnameCss(name) {
    const parts = name.split(':');
    const className = parts.pop();

    // This is the mapped classname
    // that is used in production it is a short string
    // in dev it is the same as the name

    // : needs to be repleaced in the css declaration
    const mappedClassName = getClassname(name, isProduction).replace(/:/g, '\\:');

    const breakpoints = parts.filter(pseudo => config.breakpoints[pseudo]);
    const pseudos = parts.filter(pseudo => !config.breakpoints[pseudo]).join(':');
    const classCss = `.${mappedClassName}${pseudos.length ? `:${pseudos}` : ''}${classes[className].css}`;
    let css = '';

    if (breakpoints.length) {
      breakpoints.forEach(breakpoint => {
        css += `@media(max-width: ${breakpoint})${classCss}\n`;
      });
    } else {
      css = classCss;
    }

    if (classes[className].theme) {
      css = `.themes-${classes[className].theme?.name}{--${classes[className].theme?.variable}:${classes[className].theme?.value};}${css}`;
    }

    return [getClassname(name, isProduction), css];
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
      classCollection.forEach(name => {
        const [className, css] = createClassnameCss(name);

        // Have to manage media queries here
        prodCss.common[className] = css;
      });

      writeFileSync(
        cssPath,
        Object.keys(prodCss.common).reduce((aggr, name) => aggr + prodCss.common[name], ''),
      );

      state.file.ast.program.body.unshift(t.importDeclaration([], t.stringLiteral('classy-ui/styles.css')));
    } else {
      const localAddClassUid = state.file.scope.generateUidIdentifier('addClasses');

      const runtimeCall = t.callExpression(localAddClassUid, [
        t.arrayExpression(
          [...classCollection].reduce(
            (aggr, name) => aggr.concat(createClassnameCss(name).map(value => t.stringLiteral(value))),
            [],
          ),
        ),
      ]);

      state.file.ast.program.body.push(runtimeCall);
      state.file.ast.program.body.push(
        t.importDeclaration(
          [t.importSpecifier(localAddClassUid, t.identifier('addClasses'))],
          t.stringLiteral('classy-ui/runtime'),
        ),
      );
    }
  }
}
