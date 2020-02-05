import { evaluateConfig } from '../utils';

const json = (val: any) => JSON.parse(JSON.stringify(val));

describe('EVALUATE CONFIGS', () => {
  test('should evaluate a config', () => {
    expect(
      json(
        evaluateConfig({
          variables: {
            colors: {
              red: 'red',
            },
          },
          classnames: {
            color: {
              css: value => `{color:${value};}`,
              variants: variables => variables.colors,
            },
          },
          screens: {
            sm: css => `@media (max-width: 400px) { ${css} }`,
          },
        }),
      ),
    ).toEqual({
      themes: {},
      variables: {
        colors: {
          red: 'red',
        },
      },
      themeNames: [],
      screens: {},
      classnames: {
        color: {
          variants: {
            red: 'red',
          },
          variantsWithoutVariables: {
            red: 'red',
          },
        },
      },
    });
  });
  test('should evaluate a config with themes', () => {
    expect(
      json(
        evaluateConfig({
          variables: {
            colors: {
              red: 'red',
            },
          },
          classnames: {
            color: {
              css: value => `{color:${value};}`,
              variants: variables => variables.colors,
            },
          },
          screens: {
            sm: css => `@media (max-width: 400px) { ${css} }`,
          },
          themes: {
            dark: {
              colors: {
                red: 'blue',
              },
            },
          },
        }),
      ),
    ).toEqual({
      themes: {
        colors: {
          red: {
            dark: 'blue',
          },
        },
      },
      variables: {
        colors: {
          red: '--colors-red',
        },
      },
      screens: {},
      themeNames: ['dark'],
      classnames: {
        color: {
          variants: {
            red: '--colors-red',
          },
          variantsWithoutVariables: {
            red: 'red',
          },
        },
      },
    });
  });
});
