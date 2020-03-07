export interface IClass {
  id: string;
  classname: string;
  token: string;
  derived: string[] | null;
  variable: {
    value: string;
    originalValue: string;
  } | null;
}

export type IClasses = Record<string, IClass>;

export type ITokens = Record<string, IToken>;

export type IClassnames = Record<
  string,
  {
    tokens?:
      | ITokens
      | ((
          tokens: IGlobalTokens<IToken>,
          utils: {
            negative: (value: { [key: string]: IToken }) => { [key: string]: IToken };
          },
        ) => ITokens);
    css: ((name: string, value: string) => string) | string[];
    description?: string;
  }
>;

export interface IEvaluatedClassnames {
  [name: string]: {
    tokens: { [name: string]: IToken };
    tokensWithoutVariables: { [name: string]: IToken };
    css: ((name: string, value: string) => string) | string[];
    description?: string;
  };
}

export interface IToken {
  value: string;
  [key: string]: any;
}

export interface IGlobalTokens<T> {
  space: { [token: string]: T };
  fontSizes: { [token: string]: T };
  colors: { [token: string]: T };
  fonts: { [token: string]: T };
  fontWeights: { [token: string]: T };
  fontStyles: { [token: string]: T };
  lineHeights: { [token: string]: T };
  letterSpacings: { [token: string]: T };
  borderWidths: { [token: string]: T };
  radii: { [token: string]: T };
  size: { [token: string]: T };
  shadows: { [token: string]: T };
  zIndices: { [token: string]: T };

  durations: { [token: string]: T };
  timingFunctions: { [token: string]: T };
  opacity: { [token: string]: T };
  gridColumns: { [token: string]: T };
  gridTemplateColumns: { [token: string]: T };

  flexBases: { [token: string]: T };
  flexGrows: { [token: string]: T };
  flexShrinks: { [token: string]: T };
}

export interface IScreens {
  [key: string]: (css: string) => string;
}

export interface IConfig {
  tokens?: Partial<IGlobalTokens<string | IToken>>;
  screens?: {
    [name: string]: (css: string) => string;
  };
  themes?: {
    [name: string]: {
      [key in keyof IGlobalTokens<any>]?: Partial<IGlobalTokens<any>[key]>;
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
  tokens: IGlobalTokens<IToken>;
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
  id: string;
  name: string;
  decorators: string[];
  composition: string;
}

export interface IExtractedClasses {
  [composition: string]: {
    [id: string]: IExtractedClass;
  };
}
