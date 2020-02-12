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
  IVariables,
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

  if (typeof classname === 'function') {
    const id = `${camelToDash(classnameKey)}`;

    return {
      [id]: {
        id,
        classname: classnameKey,
        variant: null,
        css: classname,
        variable: null,
        shortName: getShortName(0),
      },
    };
  }

  return Object.keys(classname.variants).reduce((aggr, variantKey, variantIndex) => {
    const id = `${camelToDash(classnameKey)}${variantKey ? `-${variantKey}` : ''}`;
    return {
      ...aggr,
      [id]: {
        id,
        classname: classnameKey,
        variant: variantKey,
        css: (name: string) => classname.css(name, classname.variants[variantKey]),
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
  const configVariables = config.variables || {};
  const originalVariables: IVariables<any> = {
    ...baseConfig.variables,
    ...Object.keys(configVariables).reduce<IVariables<any>>((aggr, key) => {
      if (typeof configVariables[key] === 'function') {
        aggr[key] = (configVariables[key] as any)(baseConfig.variables);
      } else {
        aggr[key] = configVariables[key] as { [key: string]: string };
      }
      return aggr;
    }, {}),
  };

  // Reverse themes lookup to variable instead
  const configThemes = config.themes || {};
  const themesByVariable = Object.keys(configThemes).reduce((aggr, themeKey) => {
    Object.keys(configThemes[themeKey]).forEach(variableKey => {
      if (!aggr[variableKey]) {
        aggr[variableKey] = {};
      }
      Object.keys(configThemes[themeKey][variableKey]).forEach(valueKey => {
        if (!aggr[variableKey][valueKey]) {
          aggr[variableKey][valueKey] = {};
        }
        aggr[variableKey][valueKey][themeKey] = configThemes[themeKey][variableKey][valueKey];
      });
    });

    return aggr;
  }, {} as IEvaluatedThemes);

  // Evaluated variables where values are replaced by CSS variable
  const variables = Object.keys(originalVariables).reduce<IVariables<any>>((aggr, key) => {
    aggr[key] = Object.keys(originalVariables[key]).reduce<{ [variant: string]: string }>((subAggr, subKey) => {
      subAggr[subKey] =
        themesByVariable[key] && themesByVariable[key][subKey]
          ? `var(--${key}-${subKey})`
          : originalVariables[key][subKey];

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
            ? (allClassnames[key] as any).variants(originalVariables, { negative })
            : (allClassnames[key] as any).variants,
        variants:
          typeof (allClassnames[key] as any).variants === 'function'
            ? (allClassnames[key] as any).variants(variables, { negative })
            : (allClassnames[key] as any).variants,
      } as any;
    }

    return aggr;
  }, {} as IEvaluatedClassnames);

  return {
    variables,
    screens: config.screens || baseConfig.screens,
    classnames,
    themes: themesByVariable,
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
      css += config.screens[screen](screenCss, config.variables);
    }
  });

  const variableKeys = Object.keys(productionClassesByType.rootVariables);

  if (variableKeys.length) {
    css += ':root{';
    variableKeys.forEach(key => {
      css += `${key}:${productionClassesByType.rootVariables[key]};`;
    });
    css += '}';
  }

  Object.keys(productionClassesByType.themeVariables).forEach(theme => {
    const variables = Object.keys(productionClassesByType.themeVariables[theme]).reduce(
      (aggr, variableKey) => `${aggr}${productionClassesByType.themeVariables[theme][variableKey]}`,
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
    themeVariables: {},
    rootVariables: {},
  };

  Object.keys(classCollection).forEach(uid => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id as string];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.screens));
    let classEntry: any;
    try {
      classEntry = createClassEntry(extractedClass.name, otherDecorators, configClass.css);
    } catch (error) {
      throw new Error(uid + JSON.stringify(extractedClass, null, 2));
    }

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        productionClassesByType.screens[screen] = productionClassesByType.screens[screen] || [];
        productionClassesByType.screens[screen].push(classEntry);
      });
    } else {
      productionClassesByType.common[configClass.id] = classEntry;
    }

    if (configClass.variable) {
      const themes = config.themes || {};
      const variableValue = configClass.variable.value;
      const originalValue = configClass.variable.originalValue;
      const variables = (variableValue.match(/var\(.*\)/) || []).map(varString => varString.replace(/var\(|\)/g, ''));

      config.themeNames.forEach(theme => {
        productionClassesByType.themeVariables[theme] = productionClassesByType.themeVariables[theme] || {};
        variables.forEach(variable => {
          const variableParts = variable.substr(2).split('-');
          const variableKey = variableParts.shift() as string;
          const variableValueKey = variableParts.join('-');

          productionClassesByType.themeVariables[theme][
            variable
          ] = `${variable}:${themes[variableKey][variableValueKey][theme]};`;
          productionClassesByType.rootVariables[variable] = originalValue;
        });
      });
    }
  });

  return createProductionCss(productionClassesByType, config);
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  return Object.keys(classCollection).reduce((aggr, uid) => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id as string];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.screens));
    const classEntry = createClassEntry(extractedClass.name, otherDecorators, configClass.css);

    let css = '';

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        css += config.screens[screen](classEntry, config.variables);
      });
    } else {
      css = classEntry;
    }

    if (configClass.variable) {
      const themes = config.themes || {};
      const variableValue = configClass.variable.value;
      const originalValue = configClass.variable.originalValue;
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

    return aggr.concat([extractedClass.name, `${css}`]);
  }, [] as any[]);
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
  const withoutWrappingDecorators = decorators.filter(i => !['c', 'group'].includes(i!));
  const baseName = id ? classes[id].classname : '';
  const variantName = id && classes[id].variant ? classes[id].variant : '';
  const className = baseName + (variantName ? `_${variantName}` : '');

  const uid = [withoutWrappingDecorators.sort().join(':'), className]
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
  } else if (uid.startsWith('themes-')) {
    return {
      id,
      name: uid,
      decorators: returnedDecorators,
    };
  }

  return {
    id,
    uid,
    name: id && isProduction ? classes[id].shortName : uid,
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
