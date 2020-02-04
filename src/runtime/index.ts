const isBrowser = typeof document !== 'undefined';

const classCache = new Set<string>();

let style: HTMLStyleElement;
if (isBrowser) {
  style = document.createElement('style');
  const head = document.querySelector('head');
  head?.appendChild(style);
}

export const addClasses = (classes: string[]) => {
  let css = '';
  for (let x = 0; x < classes.length; x += 2) {
    const className = classes[x];

    if (classCache.has(className)) {
      continue;
    }
    classCache.add(className);
    const cssString = classes[x + 1];

    css += `${cssString}\n`;
  }

  if (isBrowser) {
    style.appendChild(document.createTextNode(css));
  }
};

const throwError = () => {
  throw new Error(
    'CLASSY-UI: The plugin is not active. Either you are in a macro environment and you forgot to import from "classy-ui/macro", or the plugin is not added in your babel configuration',
  );
};

export const c = throwError;
export const hover = throwError;
export const group = throwError;
export const active = throwError;
export const disabled = throwError;
export const visited = throwError;
export const firstChild = throwError;
export const lastChild = throwError;
export const oddChild = throwError;
export const evenChild = throwError;
export const focusWithin = throwError;
export const groupHover = throwError;
export const groupActive = throwError;
export const groupDisabled = throwError;
export const groupVisited = throwError;
export const groupFirstChild = throwError;
export const groupLastChild = throwError;
export const groupOddChild = throwError;
export const groupEvenChild = throwError;
export const groupFocusWithin = throwError;
