import { mergeConfigs } from '../utils';

describe('MERGE CONFIGS', () => {
  test('should override with plain objects', () => {
    expect(
      mergeConfigs(
        {
          foo: {
            bar: 'baz',
          },
        } as any,
        {
          foo: {
            mip: 'mop',
          },
        } as any,
      ),
    ).toEqual({
      foo: {
        mip: 'mop',
      },
    });
  });
  test('should receive existing value when function', () => {
    expect(
      mergeConfigs(
        {
          foo: {
            bar: 'baz',
          },
        } as any,
        {
          foo: (value: any) => value,
        } as any,
      ),
    ).toEqual({
      foo: {
        bar: 'baz',
      },
    });
  });
  test('should handle existing category being function', () => {
    expect(
      mergeConfigs(
        {
          foo: () => ({ foo: 'bar' }),
        } as any,
        {
          foo: (value: any) => value,
        } as any,
      ),
    ).toEqual({
      foo: {
        foo: 'bar',
      },
    });
  });
});
