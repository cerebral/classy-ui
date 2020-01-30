import { IClasses, IEvaluatedConfig } from '../types';
import { allowedPseudoDecorators } from '../utils';

export const transform = (transformedConfig: IClasses, config: IEvaluatedConfig) => {
  return `
  export type TClassnamesString = string & 'CLASSNAMES_STRING';
  export type TDecoratorsString = string & 'DECORATORS_STRING';
  export type TDecoratorsArg = TClasses | TDecoratorsString
  export type TClassnamesArg = TClasses | { [key in TClasses | TClassnamesString]?: boolean } | TClassnamesString | TDecoratorsString;
  export type TClassnames = (...args: TClassnamesArg[]) => TClassnamesString;
  export type TDecorator = (...args: TDecoratorsArg[]) => TDecoratorsString;
  export type TThemes = ${Object.keys(config.themes || {})
    .map(theme => `"${theme}"`)
    .join(' | ')}
  export const classnames: TClassnames;
  export const group: TDecorator;
  export const groupHover: TDecorator;
  export const theme: (theme: TThemes) => TDecoratorsString;
  ${allowedPseudoDecorators.map(decorator => `export const ${decorator}: TDecorator;\n`)}
  ${Object.keys(config.defaults.screens)
    .map(screen => `export const ${screen}: TDecorator;`)
    .join('\n')};
  export type TClasses = ${Object.keys(transformedConfig)
    .map(className => `"${className}"`)
    .join(' | ')};
`;
};
