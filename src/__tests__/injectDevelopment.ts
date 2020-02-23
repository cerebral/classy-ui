import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses } from '../types';
import { createClassObject, evaluateConfig, injectDevelopment } from '../utils';

const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT DEVELOPMENT', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: [] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });

  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['hover'] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['md'] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject(
        { baseClass: 'color', token: 'red', decorators: ['md', 'hover'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject(
        { baseClass: 'color', token: 'red', decorators: ['hover', 'firstChild'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['sm', 'xl'] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['md'] }, classes, false),
      ['color-blue']: createClassObject(
        { baseClass: 'color', token: 'blue', decorators: ['hover', 'md'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject({ baseClass: 'color', token: 'green', decorators: ['md'] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject group decorators', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject(
        { baseClass: 'color', token: 'green', decorators: ['groupHover'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should handle references classnames', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject(
        { baseClass: 'borderColor', token: 'green', decorators: ['hover'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
});
