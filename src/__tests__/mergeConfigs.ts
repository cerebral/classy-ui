import { mergeConfigs } from '../utils';

const json = (val: any) => JSON.parse(JSON.stringify(val));

describe('MERGE CONFIGS', () => {
  test('should override with plain objects', () => {
    expect(
      json(
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
      ),
    ).toEqual({
      defaults: {
        foo: {
          mip: {
            category: 'foo',
            label: 'mip',
            themes: [],
            value: 'mop',
          },
        },
      },
    });
  });
  test('should receive existing value when function', () => {
    expect(
      json(
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
              foo: (foo: any) => foo,
            },
          } as any,
        ),
      ),
    ).toEqual({
      defaults: {
        foo: {
          bar: {
            category: 'foo',
            label: 'bar',
            themes: [],
            value: 'baz',
          },
        },
      },
    });
  });
  test('should allow returning function to full access', () => {
    expect(
      json(
        mergeConfigs(
          {
            defaults: {
              foo: () => ({ foo: 'bar' }),
            },
          } as any,
          {
            defaults: {
              foo: () => (defaults: any) => defaults('foo'),
            },
          } as any,
        ),
      ),
    ).toEqual({
      defaults: {
        foo: {
          foo: {
            category: 'foo',
            label: 'foo',
            themes: [],
            value: 'bar',
          },
        },
      },
    });
  });
});
