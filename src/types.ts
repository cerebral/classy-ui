export interface IClass {
  id: string;
  classname: string;
  variant: string;
  shortName: string;
  derived: string[] | null;
  variable: {
    value: string;
    originalValue: string;
  } | null;
}

export type IClasses = Record<string, IClass>;

export type IVariants = Record<string, string>;

export type IClassnames<T extends string> = Record<
  string,
  {
    variants?:
      | { [name: string]: string }
      | ((
          tokens: ITokens<T>,
          utils: {
            negative: (value: { [key: string]: string }) => { [key: string]: string };
          },
        ) => IVariants);
    css: ((name: string, value: string) => string) | string[];
    description?: string;
  }
>;

export interface IEvaluatedClassnames {
  [name: string]: {
    variants: { [name: string]: string };
    variantsWithoutVariables: { [name: string]: string };
    css: ((name: string, value: string) => string) | string[];
    description?: string;
  };
}

export type ITokens<T extends string> = {
  [key in T]: { [variant: string]: string };
};

export interface IBaseConfig<T extends string, U = ITokens<T>> {
  tokens: {
    [key in T]: { [variant: string]: string | { value: string; description: string } };
  };
  screens: {
    [name: string]: (css: string, tokens: ITokens<T>) => string;
  };
  classnames: IClassnames<T>;
  themes?: {
    [name: string]: {
      [key in keyof U]: U[key];
    };
  };
}

export interface IConfig<T extends string, U = ITokens<T>> {
  tokens?: {
    [key in T]: ((tokens: ITokens<T>) => { [variant: string]: string }) | { [variant: string]: string };
  };
  screens?: {
    [name: string]: (css: string, tokens: ITokens<T>) => string;
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
  tokens: ITokens<any>;
  screens: {
    [name: string]: (css: string, tokens: ITokens<any>) => string;
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
