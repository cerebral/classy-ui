import { IConfig } from './types';

export const testConfig: IConfig<'colors'> = {
  variables: {
    colors: {
      red: 'red',
      blue: 'blue',
      green: 'green',
      purple: 'purple',
    },
  },
  screens: {},
  classnames: {
    block: () => '{display:block;}',
    color: {
      variants: ({ colors }) => colors,
      css: (value: string) => `{color:${value};}`,
    },
  },
};
