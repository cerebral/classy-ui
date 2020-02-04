import { transform } from '../config/transform-config-to-classes';
import { testConfig } from '../testConfig';
import { IExtractedClasses } from '../types';
import { createClassObject, evaluateConfig, injectProduction } from '../utils';

const config = evaluateConfig({
  extends: testConfig,
  themes: {
    dark: {
      colors: {
        green: 'yellow',
        purple: 'pink',
      },
    },
  },
} as any);
const classes = transform(config);

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', [], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['hover'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['md'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['hover', 'md'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['hover', 'first-child'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['sm', 'xl'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['md'], classes, true),
      ['color-blue']: createClassObject('color-blue', ['hover', 'md'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject('color-green', ['md'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject('color-red', ['md'], classes, true),
      ['color-blue']: createClassObject('color-blue', ['md'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject('color-green', [], classes, true),
      ['color-purple']: createClassObject('color-purple', [], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject('color-green', ['md'], classes, true),
      ['color-purple']: createClassObject('color-purple', ['md'], classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
});
