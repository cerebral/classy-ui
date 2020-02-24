import { evaluateConfig } from '../utils';

const json = (val: any) => JSON.parse(JSON.stringify(val));

describe('EVALUATE CONFIGS', () => {
  test('should evaluate a config', () => {
    const config = json(
      evaluateConfig({
        tokens: {
          colors: {
            RED: 'red',
          },
        },
      }),
    );
    expect(config.tokens.colors.RED).toBe('red');
    expect(config.classnames.color.tokens.RED).toBe('red');
    expect(config.classnames.color.tokensWithoutVariables.RED).toBe('red');
  });
  test('should evaluate a config with themes', () => {
    const config = json(
      evaluateConfig({
        tokens: {
          colors: {
            RED: 'red',
          },
        },
        themes: {
          dark: {
            colors: {
              RED: 'blue',
            },
          },
        },
      }),
    );
    expect(config.classnames.color.tokens.RED).toBe('var(--colors-RED)');
    expect(config.classnames.color.tokensWithoutVariables.RED).toBe('red');
    expect(config.themeNames).toEqual(['dark']);
  });
});
