import { transform } from '../config/transform-config-to-classes';
import tailwindcss from '../configs/tailwindcss';
import { IExtractedClasses } from '../types';
import { evaluateConfig, injectDevelopment } from '../utils';

const config = evaluateConfig({
  extends: tailwindcss,
  themes: {
    dark: {
      colors: {
        'red-700': 'green',
      },
    },
  },
} as any);
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
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['c', 'hover']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['c', 'md']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['c', 'md', 'hover']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['c', 'hover', 'firstChild']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['c', 'sm', 'xl']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['c', 'md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', ['c', 'hover', 'md']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', ['c', 'md']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject group decorators', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', ['c', 'groupHover']),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
});
