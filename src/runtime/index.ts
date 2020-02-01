const style = document.createElement('style');
const head = document.querySelector('head');
const classCache = new Set<string>();

head?.appendChild(style);

export const addClasses = (classes: string[]) => {
  let css = '';
  for (let x = 0; x < classes.length; x++) {
    const className = classes[x];

    if (classCache.has(className)) {
      continue;
    }
    classCache.add(className);
    const cssString = classes[x + 1];

    css += `${cssString}\n`;
    x++;
  }

  style.appendChild(document.createTextNode(css));
};

const throwError = () => {
  throw new Error(
    'CLASSY-UI: The plugin is not active. Either you are in a macro environment and you forgot to import from "classy-ui/macro", or the plugin is not added in your babel configuration',
  );
};

export const c = throwError;
