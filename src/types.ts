export type TClasses = '';

export type TClassyUiString = string & 'CLASSY_UI_STRING';

export type TArgs<T extends TClasses> = T | null | undefined | { [key in T]?: boolean } | TClassyUiString;

export type TClassyUi<T extends TClasses = TClasses> = (...args: Array<TArgs<T>>) => TClassyUiString;

export type TPseudoClass<T extends TClasses = TClasses> = (className: T) => TClassyUiString;

export type TThemeValue =
  | ((theme: (path: string, placeholder?: string) => any) => any)
  | { [key: string]: string | { [subKey: string]: string } | string[] };

export interface ITheme {
  screens: TThemeValue;
  colors: TThemeValue;
  spacing: TThemeValue;
  backgroundColor: TThemeValue;
  backgroundPosition: TThemeValue;
  backgroundSize: TThemeValue;
  borderColor: TThemeValue;
  borderRadius: TThemeValue;
  borderWidth: TThemeValue;
  boxShadow: TThemeValue;
  container: TThemeValue;
  cursor: TThemeValue;
  fill: TThemeValue;
  flex: TThemeValue;
  flexGrow: TThemeValue;
  flexShrink: TThemeValue;
  fontFamily: TThemeValue;
  fontSize: TThemeValue;
  fontWeight: TThemeValue;
  height: TThemeValue;
  inset: TThemeValue;
  letterSpacing: TThemeValue;
  lineHeight: TThemeValue;
  listStyleType: TThemeValue;
  margin: TThemeValue;
  maxHeight: TThemeValue;
  maxWidth: TThemeValue;
  minHeight: TThemeValue;
  minWidth: TThemeValue;
  objectPosition: TThemeValue;
  opacity: TThemeValue;
  order: TThemeValue;
  padding: TThemeValue;
  placeholderColor: TThemeValue;
  stroke: TThemeValue;
  strokeWidth: TThemeValue;
  textColor: TThemeValue;
  width: TThemeValue;
  zIndex: TThemeValue;
  gap: TThemeValue;
  rowGap: TThemeValue;
  columnGap: TThemeValue;
  gridTemplateColumns: TThemeValue;
  gridColumn: TThemeValue;
  gridColumnStart: TThemeValue;
  gridColumnEnd: TThemeValue;
  gridTemplateRows: TThemeValue;
  gridRow: TThemeValue;
  gridRowStart: TThemeValue;
  gridRowEnd: TThemeValue;
  transformOrigin: TThemeValue;
  scale: TThemeValue;
  rotate: TThemeValue;
  translate: TThemeValue;
  skew: TThemeValue;
  transitionProperty: TThemeValue;
  transitionTimingFunction: TThemeValue;
  transitionDuration: TThemeValue;
}

export interface IConfig {
  important: false;
  theme: ITheme;
}
