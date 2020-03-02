import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses } from '../types';
import { createClassObject, evaluateConfig, injectDevelopment } from '../utils';

const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT DEVELOPMENT', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: [] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });

  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['hover'] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, false),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['tablet', 'hover'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['hover', 'firstChild'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['mobile', 'laptop'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, false),
      ['color-BLUE']: createClassObject(
        { baseClass: 'color', token: 'BLUE', decorators: ['hover', 'tablet'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject(
        { baseClass: 'color', token: 'GREEN', decorators: ['tablet'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject group decorators', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject(
        { baseClass: 'color', token: 'GREEN', decorators: ['groupHover'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should handle references classnames', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject(
        { baseClass: 'borderColor', token: 'GREEN', decorators: ['hover'] },
        classes,
        false,
      ),
    };

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
});
