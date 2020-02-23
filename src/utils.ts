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
  ITokens,
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

  return Object.keys(classname.variants).reduce((aggr, variantKey, variantIndex) => {
    const id = `${camelToDash(classnameKey)}-${variantKey}`;
    const cssDeriver = config.classnames[classnameKey].css;
    return {
      ...aggr,
      [id]: {
        id,
        classname: classnameKey,
        variant: variantKey,
        derived: Array.isArray(cssDeriver) ? cssDeriver : null,
        variable:
          classname.variants[variantKey] !== classname.variantsWithoutVariables[variantKey]
            ? {
                value: classname.variants[variantKey],
                originalValue: classname.variantsWithoutVariables[variantKey],
              }
            : null,
        shortName: getShortName(variantIndex),
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
  const originalTokens: ITokens<any> = {
    ...baseConfig.tokens,
    ...(Object.keys(configTokens).reduce<ITokens<any>>((aggr, key) => {
      if (typeof configTokens[key] === 'function') {
        aggr[key] = (configTokens[key] as any)(baseConfig.tokens);
      } else {
        aggr[key] = typeof configTokens[key] === 'string' ? configTokens[key] : (configTokens[key] as any).value;
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
  const tokens = Object.keys(originalTokens).reduce<ITokens<any>>((aggr, key) => {
    aggr[key] = Object.keys(originalTokens[key]).reduce<{ [variant: string]: string }>((subAggr, subKey) => {
      subAggr[subKey] =
        themesByTokens[key] && themesByTokens[key][subKey] ? `var(--${key}-${subKey})` : originalTokens[key][subKey];

      return subAggr;
    }, {});

    return aggr;
  }, {});

  // Call any dynamic classname variants with both the original variables and
  // the ones who have been evaluated with CSS variables
  const allClassnames: IClassnames<any> = { ...baseConfig.classnames, ...config.classnames };
  const classnames = Object.keys(allClassnames).reduce((aggr, key) => {
    if (typeof allClassnames[key] === 'function') {
      aggr[key] = allClassnames[key] as any;
    } else {
      aggr[key] = {
        ...allClassnames[key],
        variantsWithoutVariables:
          typeof (allClassnames[key] as any).variants === 'function'
            ? (allClassnames[key] as any).variants(originalTokens, { negative })
            : (allClassnames[key] as any).variants,
        variants:
          typeof (allClassnames[key] as any).variants === 'function'
            ? (allClassnames[key] as any).variants(tokens, { negative })
            : (allClassnames[key] as any).variants,
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
        const id = `${camelToDash(classnameKey)}-${configClass.variant}`;
        const name = classes[id].shortName;
        const classname = prefix + name;

        classEntry = createClassEntry(classname, otherDecorators, evaluatedName =>
          (classConfig.css as any)(evaluatedName, classConfig.variants[configClass.variant]),
        );

        if (screenDecorators.length) {
          screenDecorators.forEach(screen => {
            productionClassesByType.screens[screen] = productionClassesByType.screens[screen] || [];
            productionClassesByType.screens[screen].push(classEntry);
          });
        } else {
          productionClassesByType.common[id] = classEntry;
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
        const name = `${camelToDash(classnameKey)}_${configClass.variant}`;
        const classname = prefix + name;
        const classEntry = createClassEntry(classname, otherDecorators, evaluatedName =>
          (classConfig.css as any)(evaluatedName, classConfig.variants[configClass.variant]),
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

        return injections.concat([name, css]);
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
        [`-${key}`]: negateValue(scale[key]),
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
  id: string | undefined,
  decorators: IExtractedClass['decorators'],
  classes: IClasses,
  isProduction: boolean,
): IExtractedClass => {
  if (id && id.startsWith('themes-')) {
    return {
      id,
      name: id,
      decorators: [],
    };
  }

  const withoutWrappingDecorators = decorators.filter(i => !['c', 'group'].includes(i!));
  const baseName = id ? classes[id].classname : '';
  const variantName = id && classes[id].variant ? classes[id].variant : '';
  const className = baseName + (variantName ? `_${variantName}` : '');

  const uid = [withoutWrappingDecorators.sort().join(':'), camelToDash(className)]
    .filter(Boolean)
    .filter(i => i!.length > 0)
    .join(':');

  const returnedDecorators = withoutWrappingDecorators.slice() as IExtractedClass['decorators'];

  if (decorators[decorators.length - 1] === 'group') {
    return {
      id,
      name: `group ${(id && isProduction ? classes[id].shortName : id) || ''}`,
      decorators: returnedDecorators,
    };
  }

  let name: string;
  if (id && isProduction && classes[id].derived) {
    name = classes[id]
      .derived!.reduce((aggr, key) => {
        return aggr.concat(classes[`${camelToDash(key)}-${variantName}`].shortName);
      }, [] as string[])
      .join(' ');
  } else if (id && isProduction) {
    name = classes[id].shortName;
  } else if (id && classes[id].derived) {
    name = classes[id]
      .derived!.reduce((aggr, key) => {
        return aggr.concat(`${camelToDash(key)}_${variantName}`);
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
