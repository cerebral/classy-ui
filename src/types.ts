export type TClasses = '';

export type TClassyUiString = string & 'CLASSY_UI_STRING';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TClassyUiString;

export type TClassyUi<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TClassyUiString;

export type TPseudoClass<T extends TClasses = TClasses> = (className: T) => TClassyUiString;

export type IConfigValue<T> = ((config: IConfig) => IConfigValue<T>) | T;

export interface IConfig {
  space: IConfigValue<string[] | { [key: string]: string }>;
  fontSizes: IConfigValue<string[]>;
  breakpoints: IConfigValue<{ [name: string]: string }>;
  colors: IConfigValue<{ [name: string]: string | string[] | { [name: string]: string } }>;
  fonts: IConfigValue<{ [name: string]: string }>;
  fontWeights: IConfigValue<string[] | { [name: string]: string }>;
  lineHeights: IConfigValue<string[] | { [name: string]: string }>;
  letterSpacings: IConfigValue<string[] | { [name: string]: string }>;
  sizes: IConfigValue<string[] | { [name: string]: string }>;
  borderColors: IConfigValue<{ [name: string]: string | string[] | { [name: string]: string } }>;
  borderWidths: IConfigValue<string[] | { [name: string]: string }>;
  borderStyles: IConfigValue<{ [name: string]: string }>;
  radii: IConfigValue<string[] | { [name: string]: string }>;
  shadows: IConfigValue<string[] | { [name: string]: string }>;
  zIndices: IConfigValue<number[] | { [name: string]: number }>;
  transitions: IConfigValue<{ [name: string]: string }>;
  aliases?: Partial<{
    fontSizes: IConfigValue<void>;
    space: IConfigValue<void>;
  }>;
}
