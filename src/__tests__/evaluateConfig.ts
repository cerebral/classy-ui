import { evaluateConfig } from '../utils';

const json = (val: any) => JSON.parse(JSON.stringify(val));

describe('EVALUATE CONFIGS', () => {
  test('should evaluate a config', () => {
    const config = json(
      evaluateConfig({
        tokens: {
          colors: {
            red: 'red',
          },
        },
      }),
    );
    expect(config.variables.colors.red).toBe('red');
    expect(config.classnames.color.tokens.red).toBe('red');
    expect(config.classnames.color.tokensWithoutVariables.red).toBe('red');
  });
  test('should evaluate a config with themes', () => {
    const config = json(
      evaluateConfig({
        tokens: {
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
    expect(config.classnames.color.tokens.red).toBe('var(--colors-red)');
    expect(config.classnames.color.tokensWithoutVariables.red).toBe('red');
    expect(config.themeNames).toEqual(['dark']);
  });
});
