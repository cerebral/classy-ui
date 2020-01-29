import { join } from 'path';

import reduceCalc from 'reduce-css-calc';

import {
  CSSProperty,
  IClasses,
  IClassesByType,
  IConfig,
  IConfigDefaults,
  IEvaluatedConfig,
  IExtractedClasses,
  TCssClasses,
} from './types';

export const getClassesFromConfig = (
  category: keyof TCssClasses,
  config: IEvaluatedConfig,
  cssProperties: CSSProperty[],
) => {
  const values = config.defaults[category];

  return cssProperties.reduce((cssPropertiesAggr, cssProperty) => {
    return {
      ...cssPropertiesAggr,
      ...Object.keys(values).reduce((valuesAggr, label) => {
        const id = `${cssProperty}-${label}`;
        const themes = getThemesFromConfig(category, label, config);

        valuesAggr[id] = {
          id,
          category,
          label,
          themes,
          css: `{${cssProperty}:${themes.length ? `var(--${id})` : values[label]};}`,
        };

        return valuesAggr;
      }, {} as IClasses),
    };
  }, {} as IClasses);
};

export const getThemesFromConfig = (category: keyof IConfigDefaults, label: string, config: IEvaluatedConfig) => {
  const themes = config.themes || {};

  return Object.keys(themes).reduce((aggr, themeKey) => {
    const values = themes[themeKey][category];

    if (values && values[label]) {
      return aggr.concat(themeKey);
    }

    return aggr;
  }, [] as string[]);
};

export const isBreakpoint = (() => {
  const breakpoints = ['sm', 'md', 'lg', 'xl'];
  return (name: string) => {
    return breakpoints.includes(name);
  };
})();

export const mergeConfigs = (
  configA: IConfig,
  configB: { themes?: IConfig['themes']; defaults?: Partial<IConfig['defaults']> },
): IEvaluatedConfig => {
  const defaultKeys = Object.keys(configA.defaults) as Array<keyof IConfigDefaults>;

  const defaults = (path: string) => {
    const value = path.split('.').reduce((aggr: any, key) => aggr[key], configA.defaults);

    return typeof value === 'function' ? value(defaults, utils) : value;
  };
  const utils = {
    negative,
    screens,
  };

  return {
    defaults: defaultKeys.reduce((aggr, key) => {
      if (configB.defaults && configB.defaults[key]) {
        return {
          ...aggr,
          [key]:
            typeof configB.defaults[key] === 'function'
              ? (configB.defaults[key] as any)(defaults, utils)
              : configB.defaults[key],
        };
      }

      return {
        ...aggr,
        [key]:
          typeof configA.defaults[key] === 'function'
            ? (configA.defaults[key] as any)(defaults, utils)
            : configA.defaults[key],
      };
    }, {} as IConfigDefaults),
    themes: configB.themes,
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
      css += `@media(max-width: ${config.defaults.screens[screen]}){`;
      productionClassesByType.screens[screen].forEach(classCss => {
        css += classCss;
      });
      css += '}';
    }
  });

  const variableKeys = Object.keys(productionClassesByType.variables);

  if (variableKeys.length) {
    css += ':root{';
    variableKeys.forEach(key => {
      css += `--${key}:${productionClassesByType.variables[key]};`;
    });
    css += '}';
  }

  Object.keys(productionClassesByType.themes).forEach(theme => {
    const variables = Object.keys(productionClassesByType.themes[theme]).reduce(
      (aggr, variableKey) => `${aggr}${productionClassesByType.themes[theme][variableKey]}`,
      '',
    );
    css += `.themes-${theme}{${variables}}`;
  });

  return css;
};

export const createClassEntry = (name: string, pseudos: string[], css: string) => {
  return `.${name.replace(/\:/g, '\\:')}${pseudos.length ? `:${pseudos.join(':')}` : ''}${css}`;
};

export const flat = (array: any[]) => array.reduce((aggr, item) => aggr.concat(item), []);

export const injectProduction = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  const productionClassesByType: IClassesByType = {
    screens: {},
    common: {},
    themes: {},
    variables: {},
  };

  Object.keys(classCollection).forEach(uid => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.defaults.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.defaults.screens));
    const classEntry = createClassEntry(extractedClass.name, otherDecorators, configClass.css);

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        productionClassesByType.screens[screen] = productionClassesByType.screens[screen] || [];
        productionClassesByType.screens[screen].push(classEntry);
      });
    } else {
      productionClassesByType.common[configClass.id] = classEntry;
    }

    configClass.themes.forEach(theme => {
      productionClassesByType.themes[theme] = productionClassesByType.themes[theme] || {};
      productionClassesByType.themes[theme][configClass.id] = `--${configClass.id}:${
        config.themes![theme]![configClass.category]![configClass.label]
      };`;
      productionClassesByType.variables[configClass.id] = config.defaults![configClass.category]![configClass.label];
    });
  });

  return createProductionCss(productionClassesByType, config);
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  return Object.keys(classCollection).reduce((aggr, uid) => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.defaults.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.defaults.screens));
    const classEntry = createClassEntry(extractedClass.name, otherDecorators, configClass.css);

    let css = '';

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        css += `@media(max-width:${config.defaults.screens[screen]}){${classEntry}}\n`;
      });
    } else {
      css = classEntry;
    }

    configClass.themes.forEach(theme => {
      css += `:root{--${configClass.id}:${
        config.defaults[configClass.category][configClass.label]
      };}\n.themes-${theme}{--${configClass.id}:${config.themes![theme]![configClass.category]![configClass.label]};}`;
    });

    return aggr.concat([extractedClass.name, `${css}\n`]);
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
export const screens = (value: { [key: string]: any }) => {
  return Object.keys(value)
    .filter(key => typeof value[key] === 'string')
    .reduce(
      (breakpoints, key) => ({
        ...breakpoints,
        [`screen-${key}`]: value[key],
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
