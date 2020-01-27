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

    css += `.${className}${cssString}\n`;
    x++;
  }

  style.appendChild(document.createTextNode(css));
};
