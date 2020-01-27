import { IConfig, TClasses } from '../types';

export const classes = (
  config: IConfig,
): {
  [key in keyof IConfig['theme']]?: (value: string) => string;
} => ({
  bg: color => `{ background-color: ${color}}`,
});
