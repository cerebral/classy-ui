import classnamesLib from 'classnames';

import { TClassyUi, TClassyUiString, TPseudoClass } from '../types';

export const classnames: TClassyUi = classnamesLib as any;

const style = document.createElement('style');
const head = document.querySelector('head');
const classCache = new Set<string>();

head?.appendChild(style);

export const addClasses = (classes: string[]) => {
  let css = '';
  for (let x = 0; x < classes.length; x++) {
    if (classCache.has(classes[x])) {
      continue;
    }
    classCache.add(classes[x]);
    const classNameArray = classes[x].split(':');
    const className = classNameArray.length === 1 ? classNameArray[0] : classNameArray[1];
    const pseudo = classNameArray.length === 1 ? null : classNameArray[0];
    const cssString = classes[x + 1];

    css += `.${pseudo ? pseudo + ':' : ''}${className}${pseudo ? ':' + pseudo : ''} ${cssString}\n`;
    x++;
  }

  style.appendChild(document.createTextNode(css));
};

export const hover: TPseudoClass = className => `hover:${className}` as TClassyUiString;

export const sm: TPseudoClass = className => `sm:${className}` as TClassyUiString;

export const md: TPseudoClass = className => `md:${className}` as TClassyUiString;

export const lg: TPseudoClass = className => `lg:${className}` as TClassyUiString;

export const xl: TPseudoClass = className => `xl:${className}` as TClassyUiString;

export const focus: TPseudoClass = className => `focus:${className}` as TClassyUiString;

export const active: TPseudoClass = className => `active:${className}` as TClassyUiString;

export const disabled: TPseudoClass = className => `disabled:${className}` as TClassyUiString;

export const visited: TPseudoClass = className => `visited:${className}` as TClassyUiString;

export const firstChild: TPseudoClass = className => `first-child:${className}` as TClassyUiString;

export const lastChild: TPseudoClass = className => `last-child:${className}` as TClassyUiString;

export const oddChild: TPseudoClass = className => `odd-child:${className}` as TClassyUiString;

export const evenChild: TPseudoClass = className => `odd-child:${className}` as TClassyUiString;

export const groupHover: TPseudoClass = className => `group-hover:${className}` as TClassyUiString;

export const focusWithin: TPseudoClass = className => `focus-within:${className}` as TClassyUiString;
