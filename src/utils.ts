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

export const evaluateConfig = (config: IConfig): IEvaluatedConfig => {
  const originalTokens = Object.keys(defaultTokens).reduce<IGlobalTokens<IToken>>((aggr, key) => {
    const toExtract =
      config.tokens && (config.tokens as any)[key]
        ? (config.tokens as any)[key]
        : config.tokens
        ? {}
        : (defaultTokens as any)[key];

    (aggr as any)[key] = Object.keys(toExtract).reduce<{ [token: string]: IToken }>((subAggr, subKey) => {
      subAggr[subKey] =
        typeof toExtract[subKey] === 'string'
          ? {
              value: toExtract[subKey],
            }
          : toExtract[subKey];

      return subAggr;
    }, {});

    return aggr;
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
  const tokens = Object.keys(originalTokens).reduce<IGlobalTokens<IToken>>((aggr, key) => {
    (aggr as any)[key] = Object.keys((originalTokens as any)[key]).reduce<{ [token: string]: IToken }>(
      (subAggr, subKey) => {
        subAggr[subKey] = {
          ...(originalTokens as any)[key][subKey],
          value:
            themesByTokens[key] && themesByTokens[key][subKey]
              ? `var(--${key}-${subKey})`
              : (originalTokens as any)[key][subKey].value,
        };

        return subAggr;
      },
      {},
    );

    return aggr;
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
      css += config.screens[screen](screenCss);
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

export const injectProduction = (
  productionClassesByType: IClassesByType,
  classCollection: IExtractedClasses,
  classes: IClasses,
  config: IEvaluatedConfig,
) => {
  Object.keys(classCollection).forEach(uid => {
    const extractedClass = classCollection[uid];
    const evaluatedClass = classes[extractedClass.id as string];
    const configClass = config.classnames[evaluatedClass.classname];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.screens));
    const classEntry = createClassEntry(extractedClass.name, otherDecorators, evaluatedName =>
      (configClass.css as any)(evaluatedName, configClass.tokens[evaluatedClass.token].value),
    );

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        productionClassesByType.screens[screen] = productionClassesByType.screens[screen] || [];
        productionClassesByType.screens[screen].push(classEntry);
      });
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
    try {
    } catch (error) {
      throw new Error(uid + JSON.stringify(extractedClass, null, 2));
    }
  });

  return productionClassesByType;
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  return Object.keys(classCollection).reduce((aggr, uid) => {
    const extractedClass = classCollection[uid];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.screens));
    const evaluatedClass = classes[extractedClass.id];
    const configClass = config.classnames[evaluatedClass.classname];
    const classEntry = createClassEntry(extractedClass.name, otherDecorators, evaluatedName =>
      (configClass.css as any)(evaluatedName, configClass.tokens[evaluatedClass.token].value),
    );

    let css = '';

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        css += config.screens[screen](classEntry);
      });
    } else {
      css = classEntry;
    }

    if (evaluatedClass.variable) {
      const themes = config.themes || {};
      const variableValue = evaluatedClass.variable.value;
      const originalValue = evaluatedClass.variable.originalValue;
      const variables = (variableValue.match(/var\(.*\)/) || []).map(varString => varString.replace(/var\(|\)/g, ''));

      variables.forEach(variable => {
        const variableParts = variable.substr(2).split('-');
        const variableKey = variableParts.shift() as string;
        const variableValueKey = variableParts.join('-');

        config.themeNames.forEach(theme => {
          css += `:root{${variable}:${originalValue};}\n.themes-${theme}{${variable}:${themes[variableKey][variableValueKey][theme]};}`;
        });
      });
    }

    return aggr.concat([extractedClass.name, css]);
  }, [] as string[]);
};

export const negative = (scale: { [key: string]: IToken }) => {
  return Object.keys(scale)
    .filter(key => scale[key].value !== '0')
    .reduce(
      (negativeScale, key) => ({
        ...negativeScale,
        [`NEG_${key}`]: {
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
    aggr[extractedClass.id] = extractedClass;

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
      const shortClassname = generateCharsFromNumber(
        evaluatedProductionShortnames.classnames.indexOf(key) === -1
          ? evaluatedProductionShortnames.classnames.push(key)
          : evaluatedProductionShortnames.classnames.indexOf(key) + 1,
      );
      const shortToken = generateCharsFromNumber(
        evaluatedProductionShortnames.tokens.indexOf(token) === -1
          ? evaluatedProductionShortnames.tokens.push(token)
          : evaluatedProductionShortnames.tokens.indexOf(token) + 1,
      );
      const shortDecorators = decorators
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
        name: `${decorators.length ? `${shortDecorators}:` : ''}${shortClassname}__${shortToken}`,
        decorators,
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
      name: `${decorators.length ? `${shortDecorators}:` : ''}${shortClassname}__${shortToken}`,
      decorators,
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
        name: createName(decorators, `${camelToDash(key)}__${token}`),
        decorators,
      });
    }, [] as IExtractedClass[]);
  }

  return [
    {
      id,
      name: createName(decorators, `${camelToDash(baseClass)}__${token}`),
      decorators,
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
  str.replace(/-([a-z])/g, function(g) {
    return g[1].toUpperCase();
  });
