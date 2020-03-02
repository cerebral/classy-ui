import { transform } from '../config/transform-config-to-classes';
import { productionClassesByType } from '../plugin';
import { IClassesByType, IExtractedClasses } from '../types';
import { createClassObject, createProductionCss, evaluateConfig, injectProduction } from '../utils';

const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT PRODUCTION', () => {
  beforeEach(() => {
    productionClassesByType.common = {};
    productionClassesByType.rootTokens = {};
    productionClassesByType.screens = {};
    productionClassesByType.themeTokens = {};
  });
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: [] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['hover'] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['hover', 'tablet'] },
        classes,
        true,
      ),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['hover', 'firstChild'] },
        classes,
        true,
      ),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject with multiple breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject(
        { baseClass: 'color', token: 'RED', decorators: ['mobile', 'laptop'] },
        classes,
        true,
      ),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject multiple', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, true),
      ['color-BLUE']: createClassObject(
        { baseClass: 'color', token: 'BLUE', decorators: ['hover', 'tablet'] },
        classes,
        true,
      ),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should inject themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'GREEN', decorators: ['tablet'] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should group breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, true),
      ['color-BLUE']: createClassObject({ baseClass: 'color', token: 'BLUE', decorators: ['tablet'] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should group themes', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'GREEN', decorators: [] }, classes, true),
      ['color-PURPLE']: createClassObject({ baseClass: 'color', token: 'PURPLE', decorators: [] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should group themes and breakpoints', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, true),
      ['color-PURPLE']: createClassObject(
        { baseClass: 'color', token: 'PURPLE', decorators: ['tablet'] },
        classes,
        true,
      ),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should handle references classnames', () => {
    const classCollection: IExtractedClasses = {
      ['color-GREEN']: createClassObject(
        { baseClass: 'borderColor', token: 'GREEN', decorators: ['hover'] },
        classes,
        false,
      ),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
  test('should not override with screens', () => {
    const classCollection: IExtractedClasses = {
      ['color-RED']: createClassObject({ baseClass: 'color', token: 'RED', decorators: [] }, classes, true),
      ['color-GREEN']: createClassObject({ baseClass: 'color', token: 'GREEN', decorators: ['laptop'] }, classes, true),
    };
    const productionClassesByType: IClassesByType = {
      screens: {},
      common: {},
      themeTokens: {},
      rootTokens: {},
    };

    expect(
      createProductionCss(injectProduction(productionClassesByType, classCollection, classes, config), config),
    ).toMatchSnapshot();
  });
});
