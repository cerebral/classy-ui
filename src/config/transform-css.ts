import { IConfig } from '../types';

const classes = {
  space: [
    'margin',
    'margin-top',
    'margin-right',
    'margin-bottom',
    'margin-left',
    'padding',
    'padding-top',
    'padding-right',
    'padding-bottom',
    'padding-left',
    'grid-gap',
    'grid-column-gap',
    'grid-row-gap',
  ],
};

export interface ICssClasses {
  [name: string]: string;
}

function buildClassesFromArray(cssProperty: string, value: string[]) {
  return value.reduce((aggr, item, index) => {
    aggr[`${cssProperty}-${index}`] = `{${cssProperty}:${item};}`;

    return aggr;
  }, {} as ICssClasses);
}

function buildClassesFromObject(cssProperty: string, value: { [key: string]: string }) {
  return Object.keys(value).reduce((aggr, key) => {
    aggr[`${cssProperty}-${key}`] = `{${cssProperty}:${value[key]};}`;

    return aggr;
  }, {} as ICssClasses);
}

function getSpaceClasses(config: IConfig) {
  return classes.space.reduce((allAggr, cssProperty) => {
    const value = typeof config.space === 'function' ? config.space(config) : config.space;

    if (Array.isArray(value)) {
      return {
        ...allAggr,
        ...buildClassesFromArray(cssProperty, value),
      };
    }

    return {
      ...allAggr,
      ...buildClassesFromObject(cssProperty, value),
    };
  }, {} as ICssClasses);
}

export const transform = (config: IConfig) => {
  const cssClasses: ICssClasses = {};

  Object.assign(cssClasses, getSpaceClasses(config));

  return cssClasses;
};
