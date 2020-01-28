import { ICssClasses } from './transform-css';

export const transform = (transformedConfig: ICssClasses) => {
  return `
  export type TClassyUiString = string & 'CLASSY_UI_STRING';
  export type TArgs = TClasses | null | undefined | { [key in TClasses]?: boolean } | TClassyUiString;
  export type TClassyUi = (...args: Array<TArgs<TClasses>>) => TClassyUiString;
  export type TPseudoClass = (...classNames: Array<TClasses | TClassyUiString>) => TClassyUiString;
  export const classnames: TClassyUi;
  export const hover: TPseudoClass;
  export const sm: TPseudoClass;
  export const md: TPseudoClass;
  export const lg: TPseudoClass;
  export const xl: TPseudoClass;
  export const focus: TPseudoClass;
  export const active: TPseudoClass;
  export const disabled: TPseudoClass;
  export const visited: TPseudoClass;
  export const firstChild: TPseudoClass;
  export const lastChild: TPseudoClass;
  export const oddChild: TPseudoClass;
  export const evenChild: TPseudoClass;
  export const groupHover: TPseudoClass;
  export const focusWithin: TPseudoClass;
  export type TClasses = ${Object.keys(transformedConfig)
    .map(className => `"${className}"`)
    .join(' | ')};
`;
};
