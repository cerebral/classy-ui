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

export type IClassnames<T extends string> = Record<
  string,
  {
    tokens?:
      | { [name: string]: string }
      | ((
          tokens: IGlobalTokens<T>,
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

export type IGlobalTokens<T extends string> = {
  [key in T]: { [token: string]: string };
};

export interface IBaseConfig<T extends string, U = IGlobalTokens<T>> {
  tokens: {
    [key in T]: { [token: string]: string };
  };
  screens: {
    [name: string]: (css: string, tokens: IGlobalTokens<T>) => string;
  };
  classnames: IClassnames<T>;
  themes?: {
    [name: string]: {
      [key in keyof U]: U[key];
    };
  };
}

export interface IConfig<T extends string, U = IGlobalTokens<T>> {
  tokens?: {
    [key in T]: ((tokens: IGlobalTokens<T>) => { [token: string]: string }) | { [token: string]: string };
  };
  screens?: {
    [name: string]: (css: string, tokens: IGlobalTokens<T>) => string;
  };
  classnames?: IClassnames<T>;
  themes?: {
    [name: string]: {
      [key in keyof U]: U[key];
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
  tokens: IGlobalTokens<any>;
  screens: {
    [name: string]: (css: string, tokens: IGlobalTokens<any>) => string;
  };
  classnames: IEvaluatedClassnames;
  themeNames: string[];
  themes?: IEvaluatedThemes;
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
