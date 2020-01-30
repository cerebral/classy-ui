import { config as baseConfig } from '../config/base.config';
import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses } from '../types';
import { injectDevelopment, mergeConfigs } from '../utils';

const config = mergeConfigs(baseConfig, {
  themes: {
    dark: {
      colors: {
        'red-700': 'green',
      },
    },
  },
});
const classes = transform(config);

function createExtractedClass(id: string, decorators: string[] = []) {
  return {
    id,
    uid: id,
    name: id,
    decorators,
  };
}

describe('INJECT DEVELOPMENT', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500'),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });

  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['classnames', 'hover']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['classnames', 'md']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['classnames', 'md', 'hover']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', [
        'classnames',
        'hover',
        'firstChild',
      ]),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['classnames', 'sm', 'xl']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['classnames', 'md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', ['classnames', 'hover', 'md']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', ['classnames', 'md']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject group decorators', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', ['classnames', 'groupHover']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
});
