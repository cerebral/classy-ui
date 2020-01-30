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

function createExtractedClass(id: string, origin = 'classnames', decorators: string[] = []) {
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
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', ['hover']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', ['hover', 'md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', [
        'hover',
        'first-child',
      ]),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', ['sm', 'xl']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', ['md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', 'classnames', ['hover', 'md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', 'classnames', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', 'classnames', ['md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', 'classnames', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', 'classnames', []),
      ['background-color-red-800']: createExtractedClass('background-color-red-800', 'classnames', []),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', 'classnames', ['md']),
      ['background-color-red-800']: createExtractedClass('background-color-red-800', 'classnames', ['md']),
    };

    expect(injectProduction(classCollection, classes.defaults, config)).toMatchSnapshot();
  });
});
