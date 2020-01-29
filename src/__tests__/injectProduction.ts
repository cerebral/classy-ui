import { config as baseConfig } from '../config/base.config';
import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses, TBreakpoints } from '../types';
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

function createExtractedClass(id: string, pseudos: string[] = [], breakpoints: TBreakpoints = []) {
  return {
    id,
    uid: id,
    name: id,
    pseudos,
    breakpoints,
  };
}

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500'),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['hover']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', [], ['md']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['hover'], ['md']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', ['hover', 'first-child'], []),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', [], ['sm', 'xl']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', [], ['md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', ['hover'], ['md']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', [], ['md']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-500']: createExtractedClass('background-color-red-500', [], ['md']),
      ['background-color-red-600']: createExtractedClass('background-color-red-600', [], ['md']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', [], []),
      ['background-color-red-800']: createExtractedClass('background-color-red-800', [], []),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['background-color-red-700']: createExtractedClass('background-color-red-700', [], ['md']),
      ['background-color-red-800']: createExtractedClass('background-color-red-800', [], ['md']),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
});
