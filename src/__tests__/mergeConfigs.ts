import { mergeConfigs } from '../utils';

describe('MERGE CONFIGS', () => {
  test('should override with plain objects', () => {
    expect(
      mergeConfigs(
        {
          defaults: {
            foo: {
              bar: 'baz',
            },
          },
        } as any,
        {
          defaults: {
            foo: {
              mip: 'mop',
            },
          },
        } as any,
      ),
    ).toEqual({
      defaults: {
        foo: {
          mip: 'mop',
        },
      },
    });
  });
  test('should receive existing value when function', () => {
    expect(
      mergeConfigs(
        {
          defaults: {
            foo: {
              bar: 'baz',
            },
          },
        } as any,
        {
          defaults: {
            foo: (theme: any) => theme('foo'),
          },
        } as any,
      ),
    ).toEqual({
      defaults: {
        foo: {
          bar: 'baz',
        },
      },
    });
  });
  test('should handle existing category being function', () => {
    expect(
      mergeConfigs(
        {
          defaults: {
            foo: () => ({ foo: 'bar' }),
          },
        } as any,
        {
          defaults: {
            foo: (theme: any) => theme('foo'),
          },
        } as any,
      ),
    ).toEqual({
      defaults: {
        foo: {
          foo: 'bar',
        },
      },
    });
  });
});
