import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses } from '../types';
import { createClassObject, evaluateConfig, injectProduction } from '../utils';

const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: [] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['hover'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['hover', 'md'] },
        classes,
        true,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['hover', 'firstChild'] },
        classes,
        true,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['sm', 'xl'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['md'] }, classes, true),
      ['color-BLUE']: createClassObject(
        { baseClass: 'color', token: 'BLUE', decorators: ['hover', 'md'] },
        classes,
        true,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'GREEN', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['md'] }, classes, true),
      ['color-BLUE']: createClassObject({ baseClass: 'color', token: 'BLUE', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'GREEN', decorators: [] }, classes, true),
      ['color-PURPLE']: createClassObject({ baseClass: 'color', token: 'PURPLE', decorators: [] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['md'] }, classes, true),
      ['color-PURPLE']: createClassObject({ baseClass: 'color', token: 'PURPLE', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should handle references classnames', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject(
        { baseClass: 'borderColor', token: 'GREEN', decorators: ['hover'] },
        classes,
        false,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
});
