import * as CSS from 'csstype';

export type TClassesConfig = Omit<IConfig, 'themes' | 'breakpoints'>;

export interface IClass {
  id: string;
  category: keyof TClassesConfig;
  label: string;
  themes: string[];
  css: string;
}

export interface IClasses {
  [name: string]: IClass;
}

export interface TConfigValue {
  [name: string]: string;
}

export type CSSProperty = keyof CSS.StandardShorthandProperties | keyof CSS.StandardPropertiesHyphen;

export type IConfigValue<T = { [key: string]: string }> = ((config: IConfig) => IConfigValue<T>) | T;

export type TCssClasses = {
  [key in keyof TClassesConfig]: CSSProperty[];
};

export interface IConfig {
  space: IConfigValue;
  fontSizes: IConfigValue;
  breakpoints: IConfigValue;
  colors: IConfigValue;
  fonts: IConfigValue;
  fontWeights: IConfigValue;
  lineHeights: IConfigValue;
  letterSpacings: IConfigValue;
  sizes: IConfigValue;
  borderColors: IConfigValue;
  borderWidths: IConfigValue;
  borderStyles: IConfigValue;
  radii: IConfigValue;
  shadows: IConfigValue;
  zIndices: IConfigValue;
  transitions: IConfigValue;
  themes?: {
    [theme: string]: TClassesConfig;
  };
}
