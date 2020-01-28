import { CSSProperty, IClasses, IConfig, TClassesConfig, TCssClasses } from './types';

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
