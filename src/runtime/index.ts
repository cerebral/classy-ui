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

export const fixSpecificity = (classnames: string) => {
  const a = new Map();
  for (const n of classnames.split(' ')) {
    a.set(n.substr(0, n.indexOf('__')), n);
  }
  classnames = '';
  for (const n of a.values()) {
    classnames += n + ' ';
  }
  return classnames;
};

const throwError = () => {
  throw new Error(
    'CLASSY-UI: The plugin is not active. Either you are in a macro environment and you forgot to import from "classy-ui/macro", or the plugin is not added in your babel configuration',
  );
};

export const c = throwError;
export const t = throwError;
export const compose = throwError;
export const tokens = throwError;
export const themes = throwError;
export const group = throwError;
