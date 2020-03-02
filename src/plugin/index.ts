import { writeFileSync } from 'fs';
import { join } from 'path';

import { addNamed } from '@babel/helper-module-imports';
import autoprefixer from 'autoprefixer';
import CleanCSS from 'clean-css';
import postcss from 'postcss';

import { transform as transformClassesToTypes } from '../config/transform-classes-to-types';
import { transform as transformConfigToClasses } from '../config/transform-config-to-classes';
import { IClassesByType, IExtractedClass, IExtractedClasses } from '../types';
import {
  createClassObjects,
  createProductionClassObjects,
  createProductionCss,
  evaluateConfig,
  getUserConfig,
  injectDevelopment,
  injectProduction,
} from '../utils';

const config = evaluateConfig(getUserConfig());
const classes = transformConfigToClasses(config);

if (process.env.NODE_ENV !== 'test') {
  try {
    const esTypesPath = join(__dirname, '..', '..', 'es', 'classy-ui.d.ts');
    const libTypesPath = join(__dirname, '..', '..', 'lib', 'classy-ui.d.ts');
    const types = transformClassesToTypes(config);

    writeFileSync(esTypesPath, types);
    writeFileSync(libTypesPath, types);
  } catch {
    // Codesandbox or some other unwritable environment
  }
}

export default (babel: any) => {
  const { types: t } = babel;
  return {
    name: 'classy-ui/plugin',
    visitor: {
      Program(programmPath: any, state: any) {
        programmPath.traverse({
          ImportDeclaration(path: any) {
            if (path?.node?.source?.value === 'classy-ui') {
              const imports = path
                .get('specifiers')
                .filter((s: any) => {
                  if (!t.isImportSpecifier(s.node)) {
                    throw s.buildCodeFrameError(`This style of importing isn't allowed.`);
                  }
                  return true;
                })
                .map((s: any) => ({ local: s.node.local.name, name: s.node.imported.name }));

              const referencePaths = imports.reduce((aggr: any, { local, name }: { local: string; name: string }) => {
                const binding = path.scope.getBinding(local);
                if (binding && Boolean(binding.referencePaths.length)) {
                  aggr[name] = binding.referencePaths;
                }
                return aggr;
              }, {});

              processReferences(babel, state, referencePaths);
              path.remove();
            }
          },
        });
      },
    },
  };
};

let hasRegisteredExitHook = false;
export const productionClassesByType: IClassesByType = {
  screens: {},
  common: {},
  themeTokens: {},
  rootTokens: {},
};
export const evaluatedProductionShortnames = {
  classnames: [] as string[],
  tokens: [] as string[],
  decorators: [] as string[],
};

export function processReferences(babel: any, state: any, refs: any) {
  const { types: t } = babel;
  const filePath = state.file.opts.parserOpts.sourceFileName;
  const isProduction = babel.getEnv() === 'production';
  const classCollection: IExtractedClasses = {};

  refs['tokens'] && processTokens(refs['tokens'], isProduction);
  refs['t'] && processTokens(refs['t'], isProduction);

  refs['group'] && processGroup(refs['group']);
  refs['themes'] && processThemes(refs['themes']);

  ['mobile', 'tablet', 'laptop', 'desktop'].forEach(screenCompose => {
    refs[screenCompose] && processCompose(refs[screenCompose]);
  });

  refs['compose'] && processCompose(refs['compose']);
  refs['c'] && processCompose(refs['c']);

  // We require access to the babel options, so have to do it here
  if (isProduction && !hasRegisteredExitHook) {
    hasRegisteredExitHook = true;
    process.on('exit', () => {
      writeFileSync(
        join(process.cwd(), state.opts.output || 'build', 'classy-ui.css'),
        new CleanCSS().minify(postcss([autoprefixer]).process(createProductionCss(productionClassesByType, config)).css)
          .styles,
      );
    });
  }

  if (isProduction && filePath) {
    injectProduction(productionClassesByType, classCollection, classes, config);
  } else {
    const runtimeCall = t.expressionStatement(
      t.callExpression(addNamed(state.file.path, 'addClasses', 'classy-ui/runtime'), [
        t.arrayExpression(injectDevelopment(classCollection, classes, config).map(value => t.stringLiteral(value))),
      ]),
    );

    state.file.ast.program.body.push(runtimeCall);
  }

  function processCompose(cRefs: any[]) {
    cRefs.forEach((path: any) => {
      if (t.isCallExpression(path.parentPath.parent)) {
        const b = path.scope.getBinding(path.parent.callee.name);
        if (t.isImportSpecifier(b.path.node) && b.path.parent.source.value.startsWith('classy-ui')) {
          throw path.buildCodeFrameError(`CLASSY-UI: don't nest c/compose calls`);
        }
      }

      const statementPath = path.parentPath;
      const args = statementPath.node.arguments;

      statementPath.replaceWith(convertToExpression(args));
    });
  }

  function processTokens(tRefs: any[], isProduction: boolean) {
    tRefs.forEach((tRef: any) => {
      if (!t.isMemberExpression(tRef.parent)) {
        throw tRef.buildCodeFrameError(`CLASSY-UI: t/tokens can't be used without a base class`);
      }
      const callExpr = tRef.findParent((p: any) => t.isCallExpression(p));
      if (!callExpr) {
        throw tRef.buildCodeFrameError(`CLASSY-UI: t/tokens must be used inside a compose/screen function`);
      }
      const composition = callExpr.node.callee.name as string;
      const memExpr = extractMemberExpression(tRef);
      if (memExpr.arr.length >= 2) {
        try {
          const [baseClass, token, ...decorators] = memExpr.arr;
          const classObjects = isProduction
            ? createProductionClassObjects(
                { composition, baseClass, token, decorators },
                classes,
                evaluatedProductionShortnames,
              )
            : createClassObjects({ composition, baseClass, token, decorators }, classes);
          classObjects.forEach(collectGlobally);
          memExpr.root.replaceWith(t.stringLiteral(`${classObjects.map(classObject => classObject.name).join(' ')} `));
        } catch (e) {
          throw memExpr.root.buildCodeFrameError(`CLASSY-UI: ${e.message}`);
        }
      } else {
        throw tRef.buildCodeFrameError(`CLASSY-UI: t/tokens must reference a base class and a token`);
      }
      return tRef;
    });
  }

  function processGroup(refs: any[]) {
    refs.forEach((ref: any) => {
      if (!t.isCallExpression(ref.parent)) {
        throw ref.buildCodeFrameError(`CLASSY-UI: group must be used inside c/compose`);
      }
      if (ref.parent.callee === ref.node) {
        throw ref.buildCodeFrameError(`CLASSY-UI: group should not be invoked`);
      }

      ref.replaceWith(t.stringLiteral(ref.node.name + ' '));
    });
  }

  function processThemes(refs: any[]) {
    refs.forEach((ref: any) => {
      if (t.isMemberExpression(ref.parent)) {
        const memberExpr = extractMemberExpression(ref);
        memberExpr.root.replaceWith(t.stringLiteral(ref.node.name + '-' + memberExpr.arr.join('-') + ' '));
      } else {
        throw ref.buildCodeFrameError(`CLASSY-UI: add the theme name here like themes.dark`);
      }
    });
  }

  function convertToExpression(classAttribs: any[]) {
    if (classAttribs.length === 0) {
      return t.stringLiteral(' ');
    }

    let needsRuntime: boolean = false;
    const strings: string[] = [];
    const others: any[] = [];
    for (const item of classAttribs) {
      if (t.isStringLiteral(item)) {
        strings.push(item.value);
      } else {
        needsRuntime = true;
        if (t.isLogicalExpression(item) && item.operator === '&&') {
          others.push(t.conditionalExpression(item.left, item.right, t.stringLiteral(' ')));
        } else {
          others.push(item);
        }
      }
    }

    // if there are only string literals just return them. This is a _short path_
    if (strings.length > 0 && others.length === 0) {
      return t.stringLiteral(strings.join(''));
    }

    const max = others.length - 1;
    let start = others[max];
    for (let i = max - 1; i >= 0; i--) {
      start = t.binaryExpression('+', others[i], start);
    }

    if (strings.length === 0) {
      if (needsRuntime) {
        return t.callExpression(addNamed(state.file.path, 'fixSpecificity', 'classy-ui/runtime'), [start]);
      } else {
        return start;
      }
    }

    start = t.binaryExpression('+', start, t.stringLiteral(strings.join('')));

    if (needsRuntime) {
      return t.callExpression(addNamed(state.file.path, 'fixSpecificity', 'classy-ui/runtime'), [start]);
    }

    return start;
  }

  function collectGlobally(classObj: IExtractedClass) {
    classCollection[classObj.id] = classObj;
  }

  function extractMemberExpression(tRefPath: any) {
    let prev = tRefPath;
    let path = prev.parentPath;
    let arr = [];
    while (path.node.type === 'MemberExpression') {
      path.node.property && arr.push(path.node.property.name);
      prev = path;
      path = path.parentPath;
    }
    return {
      root: prev,
      arr,
    };
  }
}
