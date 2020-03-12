import { transform } from '../config/transform-config-to-classes';
import { IClassesByType, IExtractedClasses } from '../types';
import {
  createExtractedClasses,
  createProductionClassObjects,
  createProductionCss,
  evaluateConfig,
  getUserConfig,
  injectProduction,
} from '../utils';

// tslint:disable-next-line
const config = evaluateConfig(getUserConfig());
const classes = transform(config);

describe('INJECT PRODUCTION', () => {
  test('should inject simple', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'compose', baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should inject with pseudo selector', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'compose', baseClass: 'color', token: 'RED', decorators: ['hover'] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should inject with breakpoint', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'tablet', baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should inject both pseudo selector and breakpoint', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'tablet', baseClass: 'color', token: 'RED', decorators: ['hover'] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should inject with multiple pseudo selectors', () => {
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'compose', baseClass: 'color', token: 'RED', decorators: ['hover', 'firstChild'] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should inject multiple', () => {
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'tablet', baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { composition: 'tablet', baseClass: 'color', token: 'BLUE', decorators: ['hover'] },
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
      createProductionClassObjects(
        { composition: 'tablet', baseClass: 'color', token: 'GREEN', decorators: [] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should group breakpoints', () => {
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'tablet', baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { composition: 'tablet', baseClass: 'color', token: 'BLUE', decorators: [] },
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
        { composition: 'compose', baseClass: 'color', token: 'GREEN', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { composition: 'compose', baseClass: 'color', token: 'PURPLE', decorators: [] },
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
        { composition: 'tablet', baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { composition: 'tablet', baseClass: 'color', token: 'PURPLE', decorators: [] },
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
      createProductionClassObjects(
        { composition: 'compose', baseClass: 'borderColor', token: 'GREEN', decorators: ['hover'] },
        classes,
        {
          classnames: [],
          tokens: [],
          decorators: [],
        },
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
  test('should not override with screens', () => {
    const evaluatedProductionShortnames = {
      classnames: [],
      tokens: [],
      decorators: [],
    };
    const classCollection: IExtractedClasses = createExtractedClasses(
      createProductionClassObjects(
        { composition: 'compose', baseClass: 'color', token: 'RED', decorators: [] },
        classes,
        evaluatedProductionShortnames,
      ).concat(
        createProductionClassObjects(
          { composition: 'compose', baseClass: 'color', token: 'BLUE', decorators: ['mobile'] },
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
