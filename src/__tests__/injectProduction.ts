import { transform } from '../config/transform-config-to-classes';
import { IClassesByType, IExtractedClasses } from '../types';
import {
  createExtractedClasses,
  createProductionClassObjects,
  createProductionCss,
  evaluateConfig,
  injectProduction,
} from '../utils';

const config = evaluateConfig(require('../../classy-ui.config.js'));
const classes = transform(config);

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'RED', decorators: [] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'RED', decorators: ['hover'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'RED', decorators: ['tablet'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'RED', decorators: ['hover', 'tablet'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'RED', decorators: ['hover', 'firstChild'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'RED', decorators: ['mobile', 'laptop'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { baseClass: 'color', token: 'RED', decorators: ['tablet'] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { baseClass: 'color', token: 'BLUE', decorators: ['hover', 'tablet'] },
          classes,
          evaluatedProductionShortnames,
        ),
      ),
    );

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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'color', token: 'GREEN', decorators: ['tablet'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );
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
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { baseClass: 'color', token: 'RED', decorators: ['tablet'] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { baseClass: 'color', token: 'BLUE', decorators: ['tablet'] },
          classes,
          evaluatedProductionShortnames,
        ),
      ),
    );

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
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { baseClass: 'color', token: 'GREEN', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { baseClass: 'color', token: 'PURPLE', decorators: [] },
          classes,
          evaluatedProductionShortnames,
        ),
      ),
    );

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
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { baseClass: 'color', token: 'RED', decorators: ['tablet'] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { baseClass: 'color', token: 'PURPLE', decorators: ['tablet'] },
          classes,
          evaluatedProductionShortnames,
        ),
      ),
    );

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
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects({ baseClass: 'borderColor', token: 'GREEN', decorators: ['hover'] }, classes, {
        classnames: [],
        tokens: [],
        decorators: [],
      }),
    );

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
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { baseClass: 'color', token: 'BLUE', decorators: ['mobile'] },
          classes,
          evaluatedProductionShortnames,
        ),
      ),
    );

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
