import { IClasses, IConfig, TCssClasses } from '../types';
import { getClassesFromConfig } from '../utils';

const cssClasses: TCssClasses = {
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
  ],
  colors: ['color', 'background-color'],
  sizes: ['width', 'height', 'min-width', 'max-width', 'min-height', 'max-height'],
  borderStyles: ['border-style', 'border-bottom-style', 'border-top-style', 'border-left-style', 'border-right-style'],
  borderWidths: ['border-width', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
  borderColors: ['border-color', 'border-bottom-color', 'border-top-color', 'border-left-color', 'border-right-color'],
  radii: [
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
  ],
  fontSizes: ['font-size'],
  fontWeights: ['font-weight'],
  fonts: ['font-family'],
  letterSpacings: ['letter-spacing'],
  lineHeights: ['line-height'],
  shadows: ['box-shadow', 'text-shadow'],
  transitions: ['transition'],
  zIndices: ['z-index'],
};

export const transform = (config: IConfig): IClasses => {
  const keys = Object.keys(cssClasses) as Array<keyof TCssClasses>;

  return keys.reduce((aggr, key) => {
    return {
      ...aggr,
      ...getClassesFromConfig(key, config, cssClasses[key]),
    };
  }, {});
};
