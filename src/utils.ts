import { join } from 'path';

import reduceCalc from 'reduce-css-calc';

import { ThemeValue } from './config/ThemeValue';
import {
  CSSProperty,
  IClasses,
  IClassesByType,
  IConfig,
  IConfigDefaults,
  IEvaluatedConfig,
  IEvaluatedConfigValue,
  IExtractedClass,
  IExtractedClasses,
  IThemes,
  TCssClasses,
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
  category: keyof TCssClasses,
  config: IEvaluatedConfig,
  cssProperties: CSSProperty[],
) => {
  const values = config.defaults[category];

  return cssProperties.reduce((cssPropertiesAggr, cssProperty) => {
    return {
      ...cssPropertiesAggr,
      ...Object.keys(values).reduce((valuesAggr, label) => {
        const themeValue = values[label];
        const id = `${cssProperty}-${label}`;

        valuesAggr[id] = {
          id,
          category,
          label,
          themeValue,
          css: `{${cssProperty}:${themeValue.themes.length ? `var(--${id})` : values[label].value};}`,
        };

        return valuesAggr;
      }, {} as IClasses),
    };
  }, {} as IClasses);
};

export const getThemesFromConfig = (category: keyof IConfigDefaults, label: string, themes: IThemes) => {
  return Object.keys(themes).reduce((aggr, themeKey) => {
    const values = themes[themeKey][category];

    if (values && values[label]) {
      return aggr.concat(themeKey);
    }

    return aggr;
  }, [] as string[]);
};

export const createThemeValues = (
  category: keyof IConfigDefaults,
  value: { [key: string]: string | ThemeValue },
  themes: IThemes = {},
): IEvaluatedConfigValue => {
  return Object.keys(value).reduce((aggr, key) => {
    if (value[key] instanceof ThemeValue) {
      aggr[key] = value[key] as ThemeValue;
    } else {
      aggr[key] = new ThemeValue(category, key, value[key] as string, getThemesFromConfig(category, key, themes));
    }

    return aggr;
  }, {} as IEvaluatedConfigValue);
};

export const mergeConfigs = (
  configA: IConfig,
  configB: { themes?: IConfig['themes']; defaults?: Partial<IConfig['defaults']> },
): IEvaluatedConfig => {
  const defaultKeys = Object.keys(configA.defaults) as Array<keyof IConfigDefaults>;
  const utils = {
    negative,
    screens,
  };

  return {
    defaults: defaultKeys.reduce((aggr, key) => {
      const defaults = (path: string) => {
        const value = path.split('.').reduce((current: any, item) => current[item], aggr);

        return typeof value === 'function' ? value(defaults, utils) : value;
      };

      const configAValues = createThemeValues(
        key,
        typeof configA.defaults[key] === 'function'
          ? (configA.defaults[key] as any)(defaults, utils)
          : configA.defaults[key],
        configB.themes,
      );

      if (configB.defaults && configB.defaults[key]) {
        const configBValues =
          typeof configB.defaults[key] === 'function'
            ? (configB.defaults[key] as any)(configAValues)
            : configB.defaults[key];
        return {
          ...aggr,
          [key]: createThemeValues(
            key,
            typeof configBValues === 'function' ? (configBValues as any)(defaults, utils) : configBValues,
            configB.themes,
          ),
        };
      }

      return {
        ...aggr,
        [key]: configAValues,
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
      css += `@media(max-width: ${config.defaults.screens[screen].value}){`;
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

export const camelToDash = (string: string) => {
  return string
    .replace(/[\w]([A-Z])/g, function(m) {
      return m[0] + '-' + m[1];
    })
    .toLowerCase();
};

export const createClassEntry = (name: string, decorators: string[], css: string) => {
  const groupDecorators = decorators
    .filter(decorator => decorator.startsWith('group') && decorator !== 'group')
    .map(decorator => camelToDash(decorator.substr(5)));
  const pseudoDecorators = decorators
    .filter(decorator => allowedPseudoDecorators.includes(decorator))
    .map(decorator => camelToDash(decorator));

  return `${groupDecorators.length ? `.group:${groupDecorators.join(':')} ` : ''}.${name.replace(/\:/g, '\\:')}${
    pseudoDecorators.length ? `:${pseudoDecorators.join(':')}` : ''
  }${css}`;
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
    const configClass = classes[extractedClass.id as string];
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

    configClass.themeValue.themes.forEach(theme => {
      productionClassesByType.themes[theme] = productionClassesByType.themes[theme] || {};
      productionClassesByType.themes[theme][configClass.id] = `--${configClass.id}:${
        config.themes![theme]![configClass.themeValue.category]![configClass.themeValue.label]
      };`;
      productionClassesByType.variables[configClass.id] = config.defaults![configClass.themeValue.category]![
        configClass.themeValue.label
      ].value;
    });
  });

  return createProductionCss(productionClassesByType, config);
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IEvaluatedConfig) => {
  return Object.keys(classCollection).reduce((aggr, uid) => {
    const extractedClass = classCollection[uid];

    const configClass = classes[extractedClass.id as string];
    const screenDecorators = extractedClass.decorators.filter(decorator => decorator in config.defaults.screens);
    const otherDecorators = extractedClass.decorators.filter(decorator => !(decorator in config.defaults.screens));
    const classEntry = createClassEntry(extractedClass.name, otherDecorators, configClass.css);

    let css = '';

    if (screenDecorators.length) {
      screenDecorators.forEach(screen => {
        css += `@media(max-width:${config.defaults.screens[screen].value}){${classEntry}}\n`;
      });
    } else {
      css = classEntry;
    }

    configClass.themeValue.themes.forEach(theme => {
      css += `:root{--${configClass.id}:${
        config.defaults[configClass.category][configClass.label].value
      };}\n.themes-${theme}{--${configClass.id}:${
        config.themes![theme]![configClass.themeValue.category]![configClass.themeValue.label]
      };}`;
    });

    return aggr.concat([extractedClass.name, `${css}\n`]);
  }, [] as any[]);
};

export const negative = (scale: { [key: string]: ThemeValue }) => {
  return Object.keys(scale)
    .filter(key => scale[key].value !== '0')
    .reduce(
      (negativeScale, key) => ({
        ...negativeScale,
        [`-${key}`]: scale[key].copy(negateValue(scale[key].value)),
      }),
      {},
    );
};
export const screens = (value: { [key: string]: ThemeValue }) => {
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
