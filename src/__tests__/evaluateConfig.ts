import { evaluateConfig } from '../utils';

const json = (val: any) => JSON.parse(JSON.stringify(val));

describe('EVALUATE CONFIGS', () => {
  test('should evaluate a config', () => {
    const config = json(
      evaluateConfig({
        variables: {
          colors: {
            red: 'red',
          },
        },
      }),
    );
    expect(config.variables.colors.red).toBe('red');
    expect(config.classnames.color.variants.red).toBe('red');
    expect(config.classnames.color.variantsWithoutVariables.red).toBe('red');
  });
  test('should evaluate a config with themes', () => {
    const config = json(
      evaluateConfig({
        variables: {
          colors: {
            red: 'red',
          },
        },
        themes: {
          dark: {
            colors: {
              red: 'blue',
            },
          },
        },
      }),
    );
    expect(config.classnames.color.variants.red).toBe('var(--colors-red)');
    expect(config.classnames.color.variantsWithoutVariables.red).toBe('red');
    expect(config.themeNames).toEqual(['dark']);
  });
});
