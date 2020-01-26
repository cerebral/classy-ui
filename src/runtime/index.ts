import classnamesLib from 'classnames';

import { TPseudoClass, TTailwind, TTailwindString } from '../types';

export const classnames: TTailwind = classnamesLib as any;

const style = document.createElement('style');
const head = document.querySelector('head');

head?.appendChild(style);

export const addClasses = (classes: string[]) => {
  let css = '';
  for (let x = 0; x < classes.length; x++) {
    const classNameArray = classes[x].split(':');
    const className = classNameArray.length === 1 ? classNameArray[0] : classNameArray[1];
    const pseudo = classNameArray.length === 1 ? null : classNameArray[0];
    const cssString = classes[x + 1];

    css += `.${pseudo ? pseudo + ':' : ''}${className}${pseudo ? ':' + pseudo : ''} ${cssString}\n`;
    x++;
  }

  style.appendChild(document.createTextNode(css));
};

export const hover: TPseudoClass = className => `hover:${className}` as TTailwindString;

export const sm: TPseudoClass = className => `sm:${className}` as TTailwindString;

export const md: TPseudoClass = className => `md:${className}` as TTailwindString;

export const lg: TPseudoClass = className => `lg:${className}` as TTailwindString;

export const xl: TPseudoClass = className => `xl:${className}` as TTailwindString;

export const focus: TPseudoClass = className => `focus:${className}` as TTailwindString;

export const active: TPseudoClass = className => `active:${className}` as TTailwindString;

export const disabled: TPseudoClass = className => `disabled:${className}` as TTailwindString;

export const visited: TPseudoClass = className => `visited:${className}` as TTailwindString;

export const firstChild: TPseudoClass = className => `first-child:${className}` as TTailwindString;

export const lastChild: TPseudoClass = className => `last-child:${className}` as TTailwindString;

export const oddChild: TPseudoClass = className => `odd-child:${className}` as TTailwindString;

export const evenChild: TPseudoClass = className => `odd-child:${className}` as TTailwindString;

export const groupHover: TPseudoClass = className => `group-hover:${className}` as TTailwindString;

export const focusWithin: TPseudoClass = className => `focus-within:${className}` as TTailwindString;
