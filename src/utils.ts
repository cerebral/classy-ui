import { join } from 'path';

import {
  CSSProperty,
  IClasses,
  IClassesByType,
  IConfig,
  IExtractedClasses,
  TClassesConfig,
  TCssClasses,
} from './types';

export const getClassesFromConfig = (category: keyof TCssClasses, config: IConfig, cssProperties: CSSProperty[]) => {
  const values = typeof config[category] === 'function' ? (config[category] as any)(config) : config[category];

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

export const getThemesFromConfig = (category: keyof TClassesConfig, label: string, config: IConfig) => {
  const themes = config.themes || {};

  return Object.keys(themes).reduce((aggr, themeKey) => {
    const values =
      typeof themes[themeKey][category] === 'function'
        ? (themes[themeKey][category] as any)(config)
        : themes[themeKey][category];

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

export const mergeConfigs = (configA: IConfig, configB: Partial<IConfig>): IConfig => {
  const configKeys = Object.keys(configA) as Array<keyof IConfig>;

  return configKeys.reduce(
    (aggr, key) => {
      return {
        ...aggr,
        [key]: {
          ...configA[key],
          ...configB[key],
        },
      };
    },
    {
      themes: configB.themes,
    } as IConfig,
  );
};

export const getUserConfig = () => {
  try {
    return require(join(process.cwd(), 'classy-ui.config.js'));
  } catch (error) {
    return {};
  }
};

export const createProductionCss = (productionClassesByType: IClassesByType, config: IConfig) => {
  let css = Object.keys(productionClassesByType.common).reduce(
    (aggr, name) => aggr + productionClassesByType.common[name],
    '',
  );

  const breakpointKeys = Object.keys(productionClassesByType.breakpoints) as Array<keyof IClassesByType['breakpoints']>;
  breakpointKeys.forEach(breakpoint => {
    if (productionClassesByType.breakpoints[breakpoint].length) {
      css += `@media(max-width: ${config.breakpoints[breakpoint]}){`;
      productionClassesByType.breakpoints[breakpoint].forEach(classCss => {
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

export const getConfigValue = (category: keyof TClassesConfig, label: string, config: Partial<TClassesConfig>) => {
  const values = typeof config[category] === 'function' ? (config[category] as any)(config) : config[category];

  return values[label];
};

export const flat = (array: any[]) => array.reduce((aggr, item) => aggr.concat(item), []);

export const injectProduction = (classCollection: IExtractedClasses, classes: IClasses, config: IConfig) => {
  const productionClassesByType: IClassesByType = {
    breakpoints: {
      sm: [],
      md: [],
      lg: [],
      xl: [],
    },
    common: {},
    themes: {},
    variables: {},
  };

  Object.keys(classCollection).forEach(uid => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id];
    const classEntry = createClassEntry(extractedClass.name, extractedClass.pseudos, configClass.css);

    if (extractedClass.breakpoints.length) {
      extractedClass.breakpoints.forEach(breakpoint => {
        productionClassesByType.breakpoints[breakpoint] = productionClassesByType.breakpoints[breakpoint] || [];
        productionClassesByType.breakpoints[breakpoint].push(classEntry);
      });
    } else {
      productionClassesByType.common[configClass.id] = classEntry;
    }

    configClass.themes.forEach(theme => {
      productionClassesByType.themes[theme] = productionClassesByType.themes[theme] || {};
      productionClassesByType.themes[theme][configClass.id] = `--${configClass.id}:${getConfigValue(
        configClass.category,
        configClass.label,
        config.themes![theme],
      )};`;
      productionClassesByType.variables[configClass.id] = getConfigValue(
        configClass.category,
        configClass.label,
        config,
      );
    });
  });

  return createProductionCss(productionClassesByType, config);
};

export const injectDevelopment = (classCollection: IExtractedClasses, classes: IClasses, config: IConfig) => {
  return Object.keys(classCollection).reduce((aggr, uid) => {
    const extractedClass = classCollection[uid];
    const configClass = classes[extractedClass.id];
    const classEntry = createClassEntry(extractedClass.name, extractedClass.pseudos, configClass.css);
    let css = '';

    if (extractedClass.breakpoints.length) {
      extractedClass.breakpoints.forEach(breakpoint => {
        css += `@media(max-width:${config.breakpoints[breakpoint]}){${classEntry}}\n`;
      });
    } else {
      css = classEntry;
    }

    configClass.themes.forEach(theme => {
      css += `:root{--${configClass.id}:${getConfigValue(
        configClass.category,
        configClass.label,
        config,
      )};}\n.themes-${theme}{--${configClass.id}:${getConfigValue(
        configClass.category,
        configClass.label,
        config.themes![theme],
      )};}`;
    });

    return aggr.concat([extractedClass.name, `${css}\n`]);
  }, [] as any[]);
};
