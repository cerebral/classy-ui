import { IClasses, IEvaluatedConfig } from '../types';
import { allowedPseudoDecorators } from '../utils';

export const transform = (transformedConfig: IClasses, config: IEvaluatedConfig) => {
  return `
  export type TClassnamesString = string & 'CLASSNAMES_STRING';
  export type TDecoratorsString = string & 'DECORATORS_STRING';
  export type TDecoratorsArg = TClasses | TDecoratorsString;
  export type TClassnamesArg = TClasses | { [key in TClasses | TClassnamesString]?: boolean } | TClassnamesString | TDecoratorsString;
  export type TClassnames = (...args: TClassnamesArg[]) => TClassnamesString;
  export type TDecorator = (...args: TDecoratorsArg[]) => TDecoratorsString;
  export const c: TClassnames;
  export const group: TDecorator;
  export const groupHover: TDecorator;
  export const groupFocus: TDecorator;
  export const groupActive: TDecorator;
  export const groupFirstChild: TDecorator;
  export const groupLastChild: TDecorator;
  export const groupOddChild: TDecorator;
  export const groupEvenChild: TDecorator;
  export const groupFocusWithin: TDecorator;
  ${allowedPseudoDecorators.map(decorator => `export const ${decorator}: TDecorator;`).join('\n')}
  ${Object.keys(config.screens)
    .map(screen => `export const ${screen}: TDecorator;`)
    .join('\n')}
  export type TClasses = ${Object.keys(transformedConfig)
    .map(className => `"${className}"`)
    .join(' | ')}${config.themeNames.length ? '|' : ''}${config.themeNames
    .map(theme => `"themes-${theme}"`)
    .join(' | ')};
`;
};
