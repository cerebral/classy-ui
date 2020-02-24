import { join } from 'path';

// @ts-ignore
import reduceCalc from 'reduce-css-calc';

import { config as baseConfig } from './config/base.config';
import {
  IClasses,
  IClassesByType,
  IClassnames,
  IConfig,
  IEvaluatedClassnames,
  IEvaluatedConfig,
  IEvaluatedThemes,
  IExtractedClass,
  IExtractedClasses,
  IGlobalTokens,
} from './types';

export const allowedPseudoDecorators = [
  'hover',
  'focus',
  'active',
  'disabled',
  'visited',
  'firstChild',
  'lastChild',
  'oddChild',
  'evenChild',
  'focusWithin',
];

export const getClassesFromConfig = (
  classnameKey: string,
  config: IEvaluatedConfig,
  getShortName: (labelIndex: number) => string,
) => {
  const classname = config.classnames[classnameKey];

  return Object.keys(classname.tokens).reduce((aggr, tokenKey, tokenIndex) => {
    const id = `${camelToDash(classnameKey)}-${tokenKey}`;
    const cssDeriver = config.classnames[classnameKey].css;
    return {
      ...aggr,
      [id]: {
        id,
        classname: classnameKey,
        token: tokenKey,
        derived: Array.isArray(cssDeriver) ? cssDeriver : null,
        variable:
          classname.tokens[tokenKey] !== classname.tokensWithoutVariables[tokenKey]
            ? {
                value: classname.tokens[tokenKey],
                originalValue: classname.tokensWithoutVariables[tokenKey],
              }
            : null,
        shortName: getShortName(tokenIndex),
      },
    };
  }, {} as IClasses);
};

export const deepAssign = (
  a: { [key: string]: { [key: string]: string } },
  b: { [key: string]: { [key: string]: string } },
) => {
  Object.keys(b).forEach(key => {
    if (!a[key]) {
      a[key] = {};
    }
    Object.keys(b[key]).forEach(subKey => {
      a[key][subKey] = b[key][subKey];
    });
  });

  return a;
};

export const evaluateConfig = (config: IConfig<any>): IEvaluatedConfig => {
  const configTokens = config.tokens || {};
  const originalTokens: IGlobalTokens<any> = {
    ...baseConfig.tokens,
    ...(Object.keys(configTokens).reduce<IGlobalTokens<any>>((aggr, key) => {
      if (typeof configTokens[key] === 'function') {
        aggr[key] = (configTokens[key] as any)(baseConfig.tokens);
      } else {
        aggr[key] = configTokens[key] as any;
      }
      return aggr;
    }, {}) as any),
  };

  // Reverse themes lookup to tokens instead
  const configThemes = config.themes || {};
  const themesByTokens = Object.keys(configThemes).reduce((aggr, themeKey) => {
    Object.keys(configThemes[themeKey]).forEach(tokenKey => {
      if (!aggr[tokenKey]) {
        aggr[tokenKey] = {};
      }
      Object.keys(configThemes[themeKey][tokenKey]).forEach(valueKey => {
        if (!aggr[tokenKey][valueKey]) {
          aggr[tokenKey][valueKey] = {};
        }
        aggr[tokenKey][valueKey][themeKey] = configThemes[themeKey][tokenKey][valueKey];
      });
    });

    return aggr;
  }, {} as IEvaluatedThemes);

  // Evaluated variables where values are replaced by CSS variable
  const tokens = Object.keys(originalTokens).reduce<IGlobalTokens<any>>((aggr, key) => {
    aggr[key] = Object.keys(originalTokens[key]).reduce<{ [token: string]: string }>((subAggr, subKey) => {
      subAggr[subKey] =
        themesByTokens[key] && themesByTokens[key][subKey] ? `var(--${key}-${subKey})` : originalTokens[key][subKey];

      return subAggr;
    }, {});

    return aggr;
  }, {});

  // Call any dynamic classname tokens with both the original variables and
  // the ones who have been evaluated with CSS variables
  const allClassnames: IClassnames<any> = { ...baseConfig.classnames, ...config.classnames };
  const classnames = Object.keys(allClassnames).reduce((aggr, key) => {
    if (typeof allClassnames[key] === 'function') {
      aggr[key] = allClassnames[key] as any;
    } else {
      aggr[key] = {
        ...allClassnames[key],
        tokensWithoutVariables:
          typeof (allClassnames[key] as any).tokens === 'function'
            ? (allClassnames[key] as any).tokens(originalTokens, { negative })
            : (allClassnames[key] as any).tokens,
        tokens:
          typeof (allClassnames[key] as any).tokens === 'function'
            ? (allClassnames[key] as any).tokens(tokens, { negative })
            : (allClassnames[key] as any).tokens,
        description: (allClassnames[key] as any).description,
      } as any;
    }

    return aggr;
  }, {} as IEvaluatedClassnames);

  return {
    tokens,
    screens: config.screens || baseConfig.screens,
    classnames,
    themes: themesByTokens,
    themeNames: Object.keys(config.themes || {}),
  };
};

export const getUserConfig = () => {
  try {
    return require(join(process.cwd(), 'classy-ui.config.js'));
  } catch (error) {
    return {};
  }
};

export const createProductionCss = (productionClassesByType: IClassesByType, config: IEvaluatedConfig) => {
  let css = Object.keys(productionClassesByType.common).reduce(
    (aggr, name) => aggr + productionClassesByType.common[name],
    '',
  );

  const screenKeys = Object.keys(productionClassesByType.screens);
  screenKeys.forEach(screen => {
    if (productionClassesByType.screens[screen].length) {
      const screenCss = productionClassesByType.screens[screen].reduce((aggr, classCss) => {
        return aggr + classCss;
      }, '');
      css += config.screens[screen](screenCss, config.tokens);
    }
  });

  const variableKeys = Object.keys(productionClassesByType.rootTokens);

  if (variableKeys.length) {
    css += ':root{';
    variableKeys.forEach(key => {
      css += `${key}:${productionClassesByType.rootTokens[key]};`;
    });
    css += '}';
  }

  Object.keys(productionClassesByType.themeTokens).forEach(theme => {
    const variables = Object.keys(productionClassesByType.themeTokens[theme]).reduce(
      (aggr, variableKey) => `${aggr}${productionClassesByType.themeTokens[theme][variableKey]}`,
      '',
    );
    css += `.themes-${theme}{${variables}}`;
  });

  return css;
};

export const camelToDash = (string: string) => {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
};

export const createClassEntry = (name: string, decorators: string[], css: (name: string) => string) => {
  const groupDecorators = decorators
    .filter(decorator => decorator.startsWith('group') && decorator !== 'group')
    .map(decorator => camelToDash(decorator.substr(5)));
  const pseudoDecorators = decorators
    .filter(decorator => allowedPseudoDecorators.includes(decorator))
    .map(decorator => camelToDash(decorator));
  const evaluatedName = `.${name.replace(/\:/g, '\\:')}${
    pseudoDecorators.length ? `:${pseudoDecorators.join(':')}` : ''
  }`;

  return `${groupDecorators.length ? `.group:${groupDecorators.join(':')} ` : ''}${css(evaluatedName)}`;
};

export const flat = (array: any[]) => array.reduce((aggr, item) => aggr.concat(item), []);

export const injectProduction = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  const productionClassesByType: IClassesByType = {
    screens: {},
    common: {},
    themeTokens: {},
    rootTokens: {},
  };

  Object.keys(classCollection).forEach(uid => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id as string];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.screens));
    let classEntry: any;
    try {
      const prefix = extractedClass.name.substr(0, extractedClass.name.lastIndexOf(':') + 1);
      const cssProcessor = config.classnames[configClass.classname].css;
      // The classname definition might references other CSS processors, we extract the base classname for lookups
      const classnameKeys = Array.isArray(cssProcessor) ? cssProcessor : [configClass.classname];

      classnameKeys.forEach(classnameKey => {
        const classConfig = config.classnames[classnameKey];
        const id = `${camelToDash(classnameKey)}-${configClass.token}`;
        const name = classes[id].shortName;
        const classname = prefix + name.replace('@', '\\@');

        classEntry = createClassEntry(classname, otherDecorators, evaluatedName =>
          (classConfig.css as any)(evaluatedName, classConfig.tokens[configClass.token]),
        );

        if (screenDecorators.length) {
          screenDecorators.forEach(screen => {
            productionClassesByType.screens[screen] = productionClassesByType.screens[screen] || [];
            productionClassesByType.screens[screen].push(classEntry);
          });
        } else {
          productionClassesByType.common[classname] = classEntry;
        }

        if (configClass.variable) {
          const themes = config.themes || {};
          const variableValue = configClass.variable.value;
          const originalValue = configClass.variable.originalValue;
          const variables = (variableValue.match(/var\(.*\)/) || []).map(varString =>
            varString.replace(/var\(|\)/g, ''),
          );

          config.themeNames.forEach(theme => {
            productionClassesByType.themeTokens[theme] = productionClassesByType.themeTokens[theme] || {};
            variables.forEach(variable => {
              const variableParts = variable.substr(2).split('-');
              const variableKey = variableParts.shift() as string;
              const variableValueKey = variableParts.join('-');

              productionClassesByType.themeTokens[theme][
                variable
              ] = `${variable}:${themes[variableKey][variableValueKey][theme]};`;
              productionClassesByType.rootTokens[variable] = originalValue;
            });
          });
        }
      });
    } catch (error) {
      throw new Error(uid + JSON.stringify(extractedClass, null, 2));
    }
  });

  return createProductionCss(productionClassesByType, config);
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  return Object.keys(classCollection).reduce((aggr, uid) => {
    const extractedClass = classCollection[uid];
    const mainId = extractedClass.id as string;
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.screens));
    const prefix = extractedClass.name.substr(0, extractedClass.name.lastIndexOf(':') + 1);
    const configClass = classes[mainId];
    const cssProcessor = config.classnames[configClass.classname].css;
    // The classname definition might references other CSS processors, we extract the base classname for lookups
    const classnameKeys = Array.isArray(cssProcessor) ? cssProcessor : [configClass.classname];

    return aggr.concat(
      classnameKeys.reduce((injections, classnameKey) => {
        const classConfig = config.classnames[classnameKey];
        const name = `${camelToDash(classnameKey)}@${configClass.token}`;
        const classname = prefix + name;
        const classEntry = createClassEntry(classname.replace('@', '\\@'), otherDecorators, evaluatedName =>
          (classConfig.css as any)(evaluatedName, classConfig.tokens[configClass.token]),
        );

        let css = '';

        if (screenDecorators.length) {
          screenDecorators.forEach(screen => {
            css += config.screens[screen](classEntry, config.tokens);
          });
        } else {
          css = classEntry;
        }

        if (configClass.variable) {
          const themes = config.themes || {};
          const variableValue = configClass.variable.value;
          const originalValue = configClass.variable.originalValue;
          const variables = (variableValue.match(/var\(.*\)/) || []).map(varString =>
            varString.replace(/var\(|\)/g, ''),
          );

          variables.forEach(variable => {
            const variableParts = variable.substr(2).split('-');
            const variableKey = variableParts.shift() as string;
            const variableValueKey = variableParts.join('-');

            config.themeNames.forEach(theme => {
              css += `:root{${variable}:${originalValue};}\n.themes-${theme}{${variable}:${themes[variableKey][variableValueKey][theme]};}`;
            });
          });
        }

        return injections.concat([classname, css]);
      }, [] as string[]),
    );
  }, [] as string[]);
};

export const negative = (scale: { [key: string]: string }) => {
  return Object.keys(scale)
    .filter(key => scale[key] !== '0')
    .reduce(
      (negativeScale, key) => ({
        ...negativeScale,
        [`NEG_${key}`]: negateValue(scale[key]),
      }),
      {},
    );
};

export const negateValue = (value: string) => {
  try {
    return reduceCalc(`calc(${value} * -1)`);
  } catch (e) {
    return value;
  }
};

export const createClassObject = (
  {
    baseClass,
    token,
    decorators,
  }: {
    baseClass: string;
    token: string;
    decorators: string[];
  },
  classes: IClasses,
  isProduction: boolean,
): IExtractedClass => {
  const id = `${camelToDash(baseClass)}-${token}`;
  const uid = [decorators.sort().join(':'), `${camelToDash(baseClass)}@${token}`]
    .filter(Boolean)
    .filter(i => i!.length > 0)
    .join(':');

  const returnedDecorators = decorators.slice() as IExtractedClass['decorators'];

  let name: string;
  if (id && isProduction && classes[id].derived) {
    name = classes[id]
      .derived!.reduce((aggr, key) => {
        return aggr.concat(classes[`${camelToDash(key)}-${token}`].shortName);
      }, [] as string[])
      .join(' ');
  } else if (id && isProduction) {
    name = classes[id].shortName;
  } else if (id && classes[id].derived) {
    name = classes[id]
      .derived!.reduce((aggr, key) => {
        return aggr.concat(`${camelToDash(key)}@${token}`);
      }, [] as string[])
      .join(' ');
  } else {
    name = uid;
  }

  return {
    id,
    uid,
    name,
    decorators: returnedDecorators,
  };
};

export const generateShortName = (num: number) => {
  const baseChar = 'A'.charCodeAt(0);
  let letters = '';

  do {
    num -= 1;
    letters = String.fromCharCode(baseChar + (num % 26)) + letters;
    num = (num / 26) >> 0;
  } while (num > 0);

  return letters;
};

export const hyphenToCamelCase = (str: string) =>
  str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
