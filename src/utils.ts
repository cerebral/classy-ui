import { join } from 'path';

import { CSSProperty, IClasses, IClassesByType, IConfig, TClassesConfig, TCssClasses } from './types';

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

export const mergeConfigs = (configA: IConfig, configB: IConfig): IConfig => {
  const configKeys = Object.keys(configA) as Array<keyof IConfig>;

  return configKeys.reduce(
    (aggr, key) => {
      return {
        ...aggr,
        ...configA[key],
        ...configB[key],
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
    productionClassesByType.breakpoints[breakpoint].forEach(classCss => {
      css += `@media(max-width: ${config.breakpoints[breakpoint]}){${classCss}}`;
    });
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
