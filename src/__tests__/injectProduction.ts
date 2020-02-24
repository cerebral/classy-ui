import { transform } from '../config/transform-config-to-classes';
import { IExtractedClasses } from '../types';
import { createClassObject, evaluateConfig, injectProduction } from '../utils';

const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: [] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['hover'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject(
        { baseClass: 'color', token: 'red', decorators: ['hover', 'md'] },
        classes,
        true,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject(
        { baseClass: 'color', token: 'red', decorators: ['hover', 'firstChild'] },
        classes,
        true,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['sm', 'xl'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['md'] }, classes, true),
      ['color-blue']: createClassObject(
        { baseClass: 'color', token: 'blue', decorators: ['hover', 'md'] },
        classes,
        true,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject({ baseClass: 'color', token: 'green', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-red']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['md'] }, classes, true),
      ['color-blue']: createClassObject({ baseClass: 'color', token: 'blue', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject({ baseClass: 'color', token: 'green', decorators: [] }, classes, true),
      ['color-purple']: createClassObject({ baseClass: 'color', token: 'purple', decorators: [] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject({ baseClass: 'color', token: 'red', decorators: ['md'] }, classes, true),
      ['color-purple']: createClassObject({ baseClass: 'color', token: 'purple', decorators: ['md'] }, classes, true),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should handle references classnames', () => {
    const classCollection: IExtractedClasses = {
      ['color-green']: createClassObject(
        { baseClass: 'borderColor', token: 'green', decorators: ['hover'] },
        classes,
        false,
      ),
    };

    expect(injectProduction(classCollection, classes, config)).toMatchSnapshot();
  });
});
