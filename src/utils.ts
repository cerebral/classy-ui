import { join } from 'path';
// @ts-ignore
import reduceCalc from 'reduce-css-calc';

import classnames from './config/classnames';
import defaultScreens from './config/screens';
import defaultTokens from './config/tokens';
import {
  IClasses,
  IClassesByType,
  IConfig,
  IEvaluatedClassnames,
  IEvaluatedConfig,
  IEvaluatedThemes,
  IExtractedClass,
  IExtractedClasses,
  IGlobalTokens,
  IToken,
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

export const allowedPseudoElementDecorators = ['before', 'after'];

export const getClassesFromConfig = (classnameKey: string, config: IEvaluatedConfig) => {
  const classname = config.classnames[classnameKey];

  return Object.keys(classname.tokens).reduce((aggr, tokenKey) => {
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
                value: classname.tokens[tokenKey].value,
                originalValue: classname.tokensWithoutVariables[tokenKey].value,
              }
            : null,
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
const getCategoryTokens = (config: IConfig, category: string): { [token: string]: IToken } => {
  const rawTokens =
    config.tokens && (config.tokens as any)[category]
      ? (config.tokens as any)[category]
      : config.tokens
      ? {}
      : (defaultTokens as any)[category];

  return Object.keys(rawTokens).reduce<{ [token: string]: IToken }>((categoryTokens, tokenKey) => {
    categoryTokens[tokenKey] =
      typeof rawTokens[tokenKey] === 'string'
        ? {
            value: rawTokens[tokenKey],
          }
        : rawTokens[tokenKey];

    return categoryTokens;
  }, {});
};

export const evaluateConfig = (config: IConfig): IEvaluatedConfig => {
  const originalTokens = Object.keys(defaultTokens).reduce<IGlobalTokens<IToken>>((currentTokens, category) => {
    (currentTokens as any)[category] = getCategoryTokens(config, category);
    return currentTokens;
  }, {} as IGlobalTokens<IToken>);

  // Reverse themes lookup to tokens instead
  const configThemes = config.themes || {};
  const themesByTokens = Object.keys(configThemes).reduce((aggr, themeKey) => {
    Object.keys(configThemes[themeKey]).forEach(tokenKey => {
      if (!aggr[tokenKey]) {
        aggr[tokenKey] = {};
      }
      Object.keys((configThemes[themeKey] as any)[tokenKey]).forEach(valueKey => {
        if (!aggr[tokenKey][valueKey]) {
          aggr[tokenKey][valueKey] = {};
        }
        aggr[tokenKey][valueKey][themeKey] = (configThemes[themeKey] as any)[tokenKey][valueKey];
      });
    });

    return aggr;
  }, {} as IEvaluatedThemes);

  // Evaluated variables where values are replaced by CSS variable
  const tokens = Object.keys(originalTokens).reduce<IGlobalTokens<IToken>>((currentTokens, categoryKey) => {
    (currentTokens as any)[categoryKey] = Object.keys((originalTokens as any)[categoryKey]).reduce<{
      [token: string]: IToken;
    }>((categoryTokens, tokenKey) => {
      categoryTokens[tokenKey] = {
        ...(originalTokens as any)[categoryKey][tokenKey],
        value:
          themesByTokens[categoryKey] && themesByTokens[categoryKey][tokenKey]
            ? `var(--${categoryKey}-${tokenKey})`
            : (originalTokens as any)[categoryKey][tokenKey].value,
      };

      return categoryTokens;
    }, {});

    return currentTokens;
  }, {} as IGlobalTokens<IToken>);

  // Call any dynamic classname tokens with both the original variables and
  // the ones who have been evaluated with CSS variables
  const evaluatedClassnames = Object.keys(classnames).reduce((aggr, key) => {
    aggr[key] = {
      ...classnames[key],
      tokensWithoutVariables:
        typeof (classnames[key] as any).tokens === 'function'
          ? (classnames[key] as any).tokens(originalTokens, { negative })
          : (classnames[key] as any).tokens,
      tokens:
        typeof (classnames[key] as any).tokens === 'function'
          ? (classnames[key] as any).tokens(tokens, { negative })
          : (classnames[key] as any).tokens,
      description: (classnames[key] as any).description,
    } as any;

    return aggr;
  }, {} as IEvaluatedClassnames);

  return {
    tokens,
    screens: config.screens || defaultScreens,
    classnames: evaluatedClassnames,
    themes: themesByTokens,
    themeNames: Object.keys(config.themes || {}),
  };
};

export const getUserConfig = () => {
  try {
    const config = require(join(process.cwd(), 'classy-ui.config.js'));
    if (typeof config === 'function') {
      return config({ tokens: defaultTokens, screens: defaultScreens });
    } else {
      return config;
    }
  } catch (error) {
    if (!error.toString().includes('Cannot find module')) {
      // tslint:disable-next-line
      throw error;
    }

    return {};
  }
};

export const getScreens = (config: IEvaluatedConfig) => {
  return Object.keys(config.tokens.breakpoints).reduce((breakAggr, key) => {
    breakAggr[key] = config.tokens.breakpoints[key].value;

    return breakAggr;
  }, {} as any);
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
      css += config.screens[screen](screenCss, getScreens(config));
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

export const camelToDash = (str: string) => {
  return str
    .replace(/[\w]([A-Z])/g, m => {
      return `${m[0]}-${m[1]}`;
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
  const pseudoElementDecorators = decorators.filter(decorator => allowedPseudoElementDecorators.includes(decorator));
  const evaluatedName = `.${name.replace(/\:/g, '\\:')}${
    pseudoDecorators.length ? `:${pseudoDecorators.join(':')}` : ''
  }${pseudoElementDecorators.length ? `::${pseudoElementDecorators.join('::')}` : ''}`;

  return `${groupDecorators.length ? `.group:${groupDecorators.join(':')} ` : ''}${css(evaluatedName)}`;
};

export const flat = (array: any[]) => array.reduce((aggr, item) => aggr.concat(item), []);

export const injectProduction = (
  productionClassesByType: IClassesByType,
  classCollection: IExtractedClasses,
  classes: IClasses,
  config: IEvaluatedConfig,
) => {
  Object.keys(classCollection).forEach(composition => {
    Object.keys(classCollection[composition]).forEach(id => {
      const extractedClass = classCollection[composition][id];
      const evaluatedClass = classes[extractedClass.id as string];
      const configClass = config.classnames[evaluatedClass.classname];
      const classEntry = createClassEntry(extractedClass.name, extractedClass.decorators, evaluatedName =>
        (configClass.css as any)(evaluatedName, configClass.tokens[evaluatedClass.token].value),
      );

      if (composition in config.screens) {
        productionClassesByType.screens[extractedClass.composition] =
          productionClassesByType.screens[extractedClass.composition] || [];
        productionClassesByType.screens[extractedClass.composition].push(classEntry);
      } else {
        productionClassesByType.common[extractedClass.name] = classEntry;
      }

      if (evaluatedClass.variable) {
        const themes = config.themes || {};
        const variableValue = evaluatedClass.variable.value;
        const originalValue = evaluatedClass.variable.originalValue;
        const variables = (variableValue.match(/var\(.*\)/) || []).map(varString => varString.replace(/var\(|\)/g, ''));

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
  });

  return productionClassesByType;
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  return Object.keys(classCollection).reduce((aggr, composition) => {
    return aggr.concat(
      Object.keys(classCollection[composition]).reduce((subAggr, id) => {
        const extractedClass = classCollection[composition][id];
        const evaluatedClass = classes[extractedClass.id];
        const configClass = config.classnames[evaluatedClass.classname];
        const classEntry = createClassEntry(extractedClass.name, extractedClass.decorators, evaluatedName =>
          (configClass.css as any)(evaluatedName, configClass.tokens[evaluatedClass.token].value),
        );

        let css = '';

        if (composition in config.screens) {
          css += config.screens[extractedClass.composition](classEntry, getScreens(config));
        } else {
          css = classEntry;
        }

        if (evaluatedClass.variable) {
          const themes = config.themes || {};
          const variableValue = evaluatedClass.variable.value;
          const originalValue = evaluatedClass.variable.originalValue;
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

        return subAggr.concat([extractedClass.name, css]);
      }, [] as string[]),
    );
  }, [] as string[]);
};

export const negative = (scale: { [key: string]: IToken }) => {
  return Object.keys(scale)
    .filter(key => scale[key].value !== '0')
    .reduce(
      (negativeScale, key) => ({
        ...negativeScale,
        [`NEGATIVE_${key}`]: {
          ...scale[key],
          value: negateValue(scale[key].value),
        },
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

export const createName = (decorators: string[], name: string) => {
  return [decorators.sort().join(':'), name]
    .filter(Boolean)
    .filter(i => i!.length > 0)
    .join(':');
};

export const createExtractedClasses = (extractedClasses: IExtractedClass[]) => {
  return extractedClasses.reduce<IExtractedClasses>((aggr, extractedClass) => {
    if (!aggr[extractedClass.composition]) {
      aggr[extractedClass.composition] = {};
    }
    aggr[extractedClass.composition][extractedClass.id] = extractedClass;

    return aggr;
  }, {});
};

export const createProductionClassObjects = (
  {
    composition,
    baseClass,
    token,
    decorators,
  }: {
    composition: string;
    baseClass: string;
    token: string;
    decorators: string[];
  },
  classes: IClasses,
  evaluatedProductionShortnames: {
    classnames: string[];
    tokens: string[];
    decorators: string[];
  },
) => {
  const id = `${camelToDash(baseClass)}-${token}`;

  if (id && !(id in classes)) {
    throw new Error(`The token "${token}" does not exist on property "${baseClass}"`);
  }

  if (classes[id].derived) {
    return classes[id].derived!.reduce((aggr, key) => {
      const derivedShortClassname = generateCharsFromNumber(
        evaluatedProductionShortnames.classnames.indexOf(key) === -1
          ? evaluatedProductionShortnames.classnames.push(key)
          : evaluatedProductionShortnames.classnames.indexOf(key) + 1,
      );
      const derivedShortToken = generateCharsFromNumber(
        evaluatedProductionShortnames.tokens.indexOf(token) === -1
          ? evaluatedProductionShortnames.tokens.push(token)
          : evaluatedProductionShortnames.tokens.indexOf(token) + 1,
      );
      const derivedShortDecorators = decorators
        .concat(composition === 'compose' ? [] : composition)
        .sort()
        .map(decorator =>
          generateCharsFromNumber(
            evaluatedProductionShortnames.decorators.indexOf(decorator) === -1
              ? evaluatedProductionShortnames.decorators.push(decorator)
              : evaluatedProductionShortnames.decorators.indexOf(decorator) + 1,
          ),
        )
        .join('');
      return aggr.concat({
        id: `${camelToDash(key)}-${token}`,
        name: `${
          derivedShortDecorators.length ? `${derivedShortDecorators}-` : ''
        }${derivedShortClassname}_${derivedShortToken}`,
        decorators,
        composition,
      });
    }, [] as IExtractedClass[]);
  }

  const shortClassname = generateCharsFromNumber(
    evaluatedProductionShortnames.classnames.indexOf(baseClass) === -1
      ? evaluatedProductionShortnames.classnames.push(baseClass)
      : evaluatedProductionShortnames.classnames.indexOf(baseClass) + 1,
  );
  const shortToken = generateCharsFromNumber(
    evaluatedProductionShortnames.tokens.indexOf(token) === -1
      ? evaluatedProductionShortnames.tokens.push(token)
      : evaluatedProductionShortnames.tokens.indexOf(token) + 1,
  );
  const shortDecorators = decorators
    .concat(composition === 'compose' ? [] : composition)
    .sort()
    .map(decorator =>
      generateCharsFromNumber(
        evaluatedProductionShortnames.decorators.indexOf(decorator) === -1
          ? evaluatedProductionShortnames.decorators.push(decorator)
          : evaluatedProductionShortnames.decorators.indexOf(decorator) + 1,
      ),
    )
    .join('');
  return [
    {
      id,
      name: `${shortDecorators.length ? `${shortDecorators}-` : ''}${shortClassname}_${shortToken}`,
      decorators,
      composition,
    },
  ];
};

export const createClassObjects = (
  {
    composition,
    baseClass,
    token,
    decorators,
  }: { composition: string; baseClass: string; token: string; decorators: string[] },
  classes: IClasses,
): IExtractedClass[] => {
  const id = `${camelToDash(baseClass)}-${token}`;

  if (id && !(id in classes)) {
    throw new Error(`The token ${token} does not exist on property ${baseClass}`);
  }

  if (classes[id].derived) {
    return classes[id].derived!.reduce((aggr, key) => {
      return aggr.concat({
        id: `${camelToDash(key)}-${token}`,
        name: createName(
          decorators.concat(composition === 'compose' ? [] : composition),
          `${camelToDash(key)}__${token}`,
        ),
        decorators,
        composition,
      });
    }, [] as IExtractedClass[]);
  }

  return [
    {
      id,
      name: createName(
        decorators.concat(composition === 'compose' ? [] : composition),
        `${camelToDash(baseClass)}__${token}`,
      ),
      decorators,
      composition,
    },
  ];
};

export const generateCharsFromNumber = (num: number) => {
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
  str.replace(/-([a-z])/g, g => {
    return g[1].toUpperCase();
  });
