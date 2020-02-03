export interface IClass {
  id: string;
  classname: string;
  variant: string | null;
  shortName: string;
  css: string;
  variable: {
    value: string;
    originalValue: string;
  } | null;
}

export interface IClasses {
  [name: string]: IClass;
}

export interface IClassnames<T extends string> {
  [name: string]:
    | (() => string)
    | {
        variants?:
          | { [name: string]: string }
          | ((
              variables: IVariables<T>,
              utils: { negative: (value: { [key: string]: string }) => { [key: string]: string } },
            ) => { [name: string]: string });
        css: (value: string) => string;
      };
}

export interface IEvaluatedClassnames {
  [name: string]:
    | (() => string)
    | {
        variants: { [name: string]: string };
        variantsWithoutVariables: { [name: string]: string };
        css: (value: string) => string;
      };
}

export type IVariables<T extends string> = {
  [key in T]: { [variant: string]: string };
};

export interface IConfig<T extends string, U = IVariables<T>> {
  variables: IVariables<T>;
  screens: {
    [name: string]: (css: string, variables: IVariables<T>) => string;
  };
  classnames: IClassnames<T>;
  themes?: {
    [name: string]: {
      [key in keyof U]: U[key];
    };
  };
  extends?: IConfig<any>;
}

export interface IEvaluatedThemes {
  [variable: string]: {
    [key: string]: {
      [theme: string]: string;
    };
  };
}

export interface IEvaluatedConfig {
  variables: IVariables<any>;
  screens: {
    [name: string]: (css: string, variables: IVariables<any>) => string;
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
  themeVariables: {
    [theme: string]: {
      [variable: string]: string;
    };
  };
  rootVariables: {
    [variable: string]: string;
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
