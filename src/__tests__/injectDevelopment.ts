import { transform } from '../config/transform-config-to-classes';
import { IExtractedClass, IExtractedClasses } from '../types';
import { createClassObjects, createExtractedClasses, evaluateConfig, injectDevelopment } from '../utils';

// tslint:disable-next-line
const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT DEVELOPMENT', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects({ composition: 'compose', baseClass: 'color', token: 'RED', decorators: [] }, classes),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });

  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects({ composition: 'compose', baseClass: 'color', token: 'RED', decorators: ['hover'] }, classes),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects({ composition: 'tablet', baseClass: 'color', token: 'RED', decorators: [] }, classes),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects({ composition: 'tablet', baseClass: 'color', token: 'RED', decorators: ['hover'] }, classes),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects(
        { composition: 'compose', baseClass: 'color', token: 'RED', decorators: ['hover', 'firstChild'] },
        classes,
      ),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects({ composition: 'tablet', baseClass: 'color', token: 'RED', decorators: [] }, classes).concat(
        createClassObjects(
          { composition: 'tablet', baseClass: 'color', token: 'BLUE', decorators: ['hover'] },
          classes,
        ),
      ),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects({ composition: 'tablet', baseClass: 'color', token: 'GREEN', decorators: [] }, classes),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should inject group decorators', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects(
        { composition: 'compose', baseClass: 'color', token: 'GREEN', decorators: ['groupHover'] },
        classes,
      ),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
  test('should handle references classnames', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createClassObjects(
        { composition: 'compose', baseClass: 'borderColor', token: 'RED', decorators: ['hover'] },
        classes,
      ),
    );

    expect(injectDevelopment(classCollection, classes, config)).toMatchSnapshot();
  });
});
