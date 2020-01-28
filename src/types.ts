export type IConfigValue<T = { [key: string]: string }> = ((config: IConfig) => IConfigValue<T>) | T;

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
    [theme: string]: IConfig;
  };
}
