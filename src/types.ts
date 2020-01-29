import * as CSS from 'csstype';

import { ThemeValue } from './config/ThemeValue';

export interface IConfigDefaults<T = IEvaluatedConfigValue> {
  screens: T;
  colors: T;
  spacing: T;
  backgroundColor: T;
  backgroundPosition: T;
  backgroundSize: T;
  borderColor: T;
  borderRadius: T;
  borderWidth: T;
  boxShadow: T;
  container: T;
  cursor: T;
  fill: T;
  flex: T;
  flexGrow: T;
  flexShrink: T;
  fontFamily: T;
  fontSize: T;
  fontWeight: T;
  height: T;
  inset: T;
  letterSpacing: T;
  lineHeight: T;
  listStyleType: T;
  margin: T;
  maxHeight: T;
  maxWidth: T;
  minHeight: T;
  minWidth: T;
  objectPosition: T;
  opacity: T;
  order: T;
  padding: T;
  placeholderColor: T;
  stroke: T;
  strokeWidth: T;
  color: T;
  width: T;
  zIndex: T;
  gap: T;
  rowGap: T;
  columnGap: T;
  gridTemplateColumns: T;
  gridColumn: T;
  gridColumnStart: T;
  gridColumnEnd: T;
  gridTemplateRows: T;
  gridRow: T;
  gridRowStart: T;
  gridRowEnd: T;
  transformOrigin: T;
  scale: T;
  rotate: T;
  translate: T;
  skew: T;
  transitionProperty: T;
  transitionTimingFunction: T;
  transitionDuration: T;
}

export interface IClass {
  id: string;
  category: keyof IConfigDefaults;
  label: string;
  themeValue: ThemeValue;
  css: string;
}

export interface IClasses {
  [name: string]: IClass;
}

export type CSSProperty =
  | keyof CSS.StandardShorthandProperties
  | keyof CSS.StandardPropertiesHyphen
  | 'fill'
  | 'stroke'
  | 'stroke-width'
  | 'skew';

export type TConfigDefaults = (path: string, fallback?: string) => any;

export interface IGetConfigUtils {
  negative: (scale: any) => any;
  screens: (screens: any) => any;
}

export type TConfigValue =
  | ((defaults: TConfigDefaults, utils: IGetConfigUtils) => ThemeValue)
  | { [key: string]: string };

export interface IEvaluatedConfigValue {
  [key: string]: ThemeValue;
}

export type TCssClasses = {
  [key in keyof Omit<IConfigDefaults, 'screens' | 'spacing' | 'colors'>]: CSSProperty[];
};

export interface IConfig {
  defaults: IConfigDefaults<TConfigValue>;
  themes?: IThemes;
}

export interface IThemes {
  [theme: string]: Partial<IConfigDefaults<{ [label: string]: string }>>;
}

export interface IEvaluatedConfig {
  defaults: IConfigDefaults;
  themes?: IThemes;
}

export interface IClassesByType {
  screens: {
    [type: string]: string[];
  };
  common: {
    [id: string]: string;
  };
  themes: {
    [theme: string]: {
      [id: string]: string;
    };
  };
  variables: {
    [id: string]: string;
  };
}

export interface IExtractedClass {
  id?: string;
  uid: string;
  name: string;
  decorators: string[];
}

export interface IExtractedClasses {
  [uid: string]: IExtractedClass;
}
