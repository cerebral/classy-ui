import { IEvaluatedConfig } from '../types';
import { allowedPseudoDecorators, camelToDash } from '../utils';

function convertClassnameToType(baseClass: string, token: string, config: IEvaluatedConfig) {
  const cssConstructor = config.classnames[baseClass].css;
  const css: string[] =
    typeof cssConstructor === 'function'
      ? [
          cssConstructor(`.${camelToDash(baseClass)}-${token}`, config.classnames[baseClass].tokens[token])
            .split('\n')
            .join('\n   * '),
        ]
      : cssConstructor.reduce<string[]>((aggr, derivedBaseClass) => {
          return aggr.concat(
            (config.classnames[derivedBaseClass].css as any)(
              `.${camelToDash(baseClass)}-${token}`,
              config.classnames[derivedBaseClass].tokens[token],
            )
              .split('\n')
              .join('\n   * '),
          );
        }, []);
  return `
  /**
   ${
     config.classnames[baseClass].tokens[token].startsWith('#')
       ? `* ![${config.classnames[baseClass].tokens[token]}](https://placehold.it/15/${config.classnames[
           baseClass
         ].tokens[token].substr(1)}/000000?text=+)`
       : ''
   }
   * \`\`\`css
   * ${css.join('\n')}
   * \`\`\`
   */
  "${token}": IDecorators;
  `;
}

export const transform = (config: IEvaluatedConfig) => {
  return `
export type TClassname = string & "CLASSNAME";
export enum Themes {
  ${config.themeNames
    .reduce<string[]>((aggr, theme) => aggr.concat(`${theme} = "${`themes-${theme}"`}`), [])
    .join(',\n')}
}
export type TGroup = 'GROUP'
export interface IDecorators {
  /**
   * \`\`\`css
   * group:hover $token {}
   * \`\`\`
   */
  groupHover: IDecorators;
  /**
   * \`\`\`css
   * group:focus $token {}
   * \`\`\`
   */
  groupFocus: IDecorators;
  /**
   * \`\`\`css
   * group:active $token {}
   * \`\`\`
   */
  groupActive: IDecorators;
  /**
   * \`\`\`css
   * group:first-child $token {}
   * \`\`\`
   */
  groupFirstChild: IDecorators;
  /**
   * \`\`\`css
   * group:last-child $token {}
   * \`\`\`
   */
  groupLastChild: IDecorators;
  /**
   * \`\`\`css
   * group:odd-child $token {}
   * \`\`\`
   */
  groupOddChild: IDecorators;
  /**
   * \`\`\`css
   * group:even-child $token {}
   * \`\`\`
   */
  groupEvenChild: IDecorators;
  /**
   * \`\`\`css
   * group:focus-within $token {}
   * \`\`\`
   */
  groupFocusWithin: IDecorators;
${allowedPseudoDecorators
  .map(
    decorator => `
  /**
   * \`\`\`css
   * $token:${camelToDash(decorator)} {}
   * \`\`\`
   */
  ${decorator}: IDecorators;
`,
  )
  .join('\n')}
${Object.keys(config.screens)
  .map(
    screen => `
  /**
   * \`\`\`css
   * ${config.screens[screen]('{\n  $token\n}').replace('@', '\\@')}
   * \`\`\`
   */
  ${screen}: IDecorators;
`,
  )
  .join('\n')}
}
export type TCompose = (...args: Array<IDecorators | TGroup | Themes | TClassname>) => TClassname;
export type TTokens = { 
  ${Object.keys(config.classnames)
    .reduce<string[]>((aggr, baseClass) => {
      return aggr.concat(`
  ${
    config.classnames[baseClass].description
      ? `
/**
  * ${config.classnames[baseClass].description}
  */`
      : ''
  }
  ${baseClass}: {
    ${Object.keys(config.classnames[baseClass].tokens)
      .reduce<string[]>((subAggr, token) => {
        return subAggr.concat(convertClassnameToType(baseClass, token, config));
      }, [])
      .join('\n')}
  }
`);
    }, [])
    .join('\n')}
}

export const themes: {
  ${config.themeNames.reduce<string[]>((aggr, theme) => aggr.concat(`${theme}: Themes.${theme}`), []).join('\n')}
};
export const group: TGroup;
export const c: TCompose;
export const compose: TCompose;
export const t: TTokens;
export const tokens: TTokens;
`;
};
