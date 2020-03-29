const isBrowser = typeof document !== 'undefined';

const classCache = new Set<string>();

const screenStyles: HTMLStyleElement[] = [];
let commonStyle: HTMLStyleElement;

if (isBrowser) {
  commonStyle = document.createElement('style');
  const head = document.querySelector('head');
  head?.appendChild(commonStyle);
}

export const addClasses = (classes: Array<string | number>) => {
  let commonCss = '';
  const screenCss: { [index: string]: string } = {};
  for (let x = 0; x < classes.length; x += 3) {
    const className = classes[x] as string;

    if (classCache.has(className)) {
      continue;
    }
    classCache.add(className);
    const cssString = classes[x + 1];
    const styleIndex = classes[x + 2] as number;

    if (styleIndex === -1) {
      commonCss += `${cssString}\n`;
    } else {
      screenCss[styleIndex] = `${screenCss[styleIndex] || ''}${cssString}\n`;
    }
  }

  if (isBrowser) {
    if (commonCss) {
      commonStyle.appendChild(document.createTextNode(commonCss));
    }

    // We have to insert screens in order due to specificity issues
    Object.keys(screenCss).forEach(stringIndex => {
      const index = Number(stringIndex);

      if (!screenStyles[index]) {
        screenStyles[index] = document.createElement('style');

        const nextExistingStyleTag = screenStyles.slice(index)[1];
        const elToInsertBefore = nextExistingStyleTag || commonStyle;
        const head = document.querySelector('head');

        head?.insertBefore(screenStyles[index], elToInsertBefore);
      }

      screenStyles[index].appendChild(document.createTextNode(screenCss[stringIndex]));
    });
  }
};

export const fixSpecificity = (...classnames: string[]) => {
  const a = new Map();
  for (const name of classnames) {
    if (typeof name === 'string') {
      for (const n of name.split(' ')) {
        a.set(n.substr(0, n.indexOf(process.env.NODE_ENV === 'production' ? '_' : '__')), n);
      }
    }
  }
  let classname = '';
  for (const n of a.values()) {
    classname += `${n} `;
  }
  return classname;
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
