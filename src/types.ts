export interface IClass {
  id: string;
  classname: string;
  token: string;
  shortName: string;
  derived: string[] | null;
  variable: {
    value: string;
    originalValue: string;
  } | null;
}

export type IClasses = Record<string, IClass>;

export type ITokens = Record<string, string>;

export type IClassnames = Record<
  string,
  {
    tokens?:
      | { [name: string]: string }
      | ((
          tokens: IGlobalTokens,
          utils: {
            negative: (value: { [key: string]: string }) => { [key: string]: string };
          },
        ) => ITokens);
    css: ((name: string, value: string) => string) | string[];
    description?: string;
  }
>;

export interface IEvaluatedClassnames {
  [name: string]: {
    tokens: { [name: string]: string };
    tokensWithoutVariables: { [name: string]: string };
    css: ((name: string, value: string) => string) | string[];
    description?: string;
  };
}

export interface IGlobalTokens {
  spacing: { [token: string]: string };
  colors: { [token: string]: string };
  lineWidths: { [token: string]: string };
  letterSpacing: { [token: string]: string };
  lineHeight: { [token: string]: string };
  borderRadius: { [token: string]: string };
  fontFamily: { [token: string]: string };
  boxShadows: { [token: string]: string };
  opacity: { [token: string]: string };
  durations: { [token: string]: string };
  timingFunctions: { [token: string]: string };
  fontSizes: { [token: string]: string };
  fontStyles: { [token: string]: string };
  gridTemplateColumns: { [token: string]: string };
  gridSpacing: { [token: string]: string };
}

export interface IScreens {
  [key: string]: (css: string) => string;
}

export interface IConfig {
  tokens?: Partial<IGlobalTokens>;
  screens?: {
    [name: string]: (css: string) => string;
  };
  themes?: {
    [name: string]: {
      [key in keyof IGlobalTokens]?: Partial<IGlobalTokens[key]>;
    };
  };
}

export interface IEvaluatedThemes {
  [tokens: string]: {
    [token: string]: {
      [theme: string]: string;
    };
  };
}

export interface IEvaluatedConfig {
  tokens: IGlobalTokens;
  screens: {
    [name: string]: (css: string) => string;
  };
  classnames: IEvaluatedClassnames;
  themeNames: string[];
  themes: IEvaluatedThemes;
}

export interface IClassesByType {
  screens: {
    [type: string]: string[];
  };
  common: {
    [id: string]: string;
  };
  themeTokens: {
    [theme: string]: {
      [token: string]: string;
    };
  };
  rootTokens: {
    [token: string]: string;
  };
}

export interface IExtractedClass {
  id?: string;
  uid?: string;
  name: string;
  decorators: string[];
}

export interface IExtractedClasses {
  [uid: string]: IExtractedClass;
}
