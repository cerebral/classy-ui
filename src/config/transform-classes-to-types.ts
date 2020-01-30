import { IClasses, IEvaluatedConfig } from '../types';
import { allowedPseudoDecorators } from '../utils';

export const transform = (transformedConfig: IClasses, config: IEvaluatedConfig) => {
  return `
  export type TClassyUiString = string & 'CLASSY_UI_STRING';
  export type TArgs = TClasses | { [key in TClasses]?: boolean } | TClassyUiString;
  export type TClassyUi = (...args: TArgs[]) => TClassyUiString;
  export type TThemes = ${Object.keys(config.themes || {})
    .map(theme => `"${theme}"`)
    .join(' | ')}
  export const classnames: TClassyUi;
  export const group: TClassyUi;
  export const groupHover: TClassyUi;
  export const theme: (theme: TThemes | { [key in TThemes]?: boolean }) => TClassyUiString;
  ${allowedPseudoDecorators.map(decorator => `export const ${decorator}: TClassyUi;\n`)}
  ${Object.keys(config.defaults.screens)
    .map(screen => `export const ${screen}: TClassyUi;`)
    .join('\n')};
  export type TClasses = ${Object.keys(transformedConfig)
    .map(className => `"${className}"`)
    .join(' | ')};
`;
};
