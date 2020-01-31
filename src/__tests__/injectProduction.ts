import { config as baseConfig } from '../config/base.config';
import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses } from '../types';
import { injectProduction, mergeConfigs } from '../utils';

const config = mergeConfigs(baseConfig, {
  themes: {
    dark: {
      colors: {
        'red-700': 'green',
        'red-800': 'blue',
      },
    },
  },
});
const classes = transform(config);

function createExtractedClass(id: string, origin = 'c', decorators: string[] = []) {
  return {
    id,
    uid: id,
    name: id,
    origin,
    decorators,
  };
}

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500'),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['hover']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['hover', 'md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['hover', 'first-child']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['sm', 'xl']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', 'c', ['hover', 'md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', 'c', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'c', ['md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', 'c', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', 'c', []),
      ['background-color-red-800']: createExtractedClass('background-color-red-800', 'c', []),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', 'c', ['md']),
      ['background-color-red-800']: createExtractedClass('background-color-red-800', 'c', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
});
