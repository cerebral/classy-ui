# classy-ui

A typed, configurable design system with no runtime

## What is it?

With great inspiration from [tailwindcss](https://tailwindcss.com/) we wanted to take it a step further. **classy-ui**, like tailwindcss, lets you express your styling with CSS classes based on a design system that you can customize. Where **classy-ui** takes it further is that it automatically creates the output CSS based on your actual application consumption of these css classes... and yeah, it is typed, meaning you can search for the classes directly in your code even if you are **NOT** using Typescript.

- Typed usage of classnames from the design system which also gives you discoverability, traversing and searching for classnames
- Lazily creates classnames and pseudo selector CSS based on consumption in app
- Compose classnames together into variables or use them inline in components
- Use dynamic assignment of classnames with conveniant `{ 'my-class': isActive }`
- In production it automatically optimizes css class names and dynamic assignment. The created css file is automatically imported in your code, making it part of your existing CSS optimization tool chain
- The runtime **completely** disappears in production, meaning it does not affect your
- Supports themes by automatically converting themed configuration to CSS variables

The design system is based on [system-ui specification](https://system-ui.com/theme/) and [tailwindcss](https://tailwindcss.com/).

> The name **classy-ui** enforces the idea that your UI becomes an elegant, optimized and concise set of classnames based on a design system

## How to use it

Install the project:

```
npm install classy-ui
```

Add **classy-ui/plugin** to your babel configuration:

```json
{
  "plugins": ["classy-ui/plugin"]
}
```

Start using it:

```ts
import { classnames } from 'classy-ui';
```

### Macro support

If you are using **babel-plugin-macros** you can go straight ahead and just use the api:

```ts
import { classnames } from 'classy-ui/macro';
```

## Consume your first classnames

**classy-ui** is consumed through a Javascript API. Simply import the default **classnames** function and start building.

### React

```js
import React from 'react';
import { classnames, hover } from 'classy-ui';

const header = classnames('background-color-gray-400', hover('background-color-gray-200'));

export const App = () => {
  <h1 className={header}>Hello world</h1>;
};
```

### Vue

```html
<template>
  <h1 :class="header">Hello world</h1>
</template>
<script>
  import { classnames, hover } from 'classy-ui';

  export default {
    data: {
      header: classnames('background-color-gray-400', hover('background-color-gray-200')),
    },
  };
</script>
```

### Angular

```ts
import { classnames, hover } from 'classy-ui';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1 [className]="header">Hello world</h1>
  `,
})
export class AppComponent {
  header = classnames('background-color-gray-400', hover('background-color-gray-200'));
}
```

## Using pseudo selectors

Pseudo selectors basically adds things like **:hover**, **:disabled** etc. to your classnames. You can compose multiple pseudo selectors on a single classname.

```js
import { classnames, hover } from 'classy-ui';

const myClass = classnames(hover('color-red-500'));
```

The following pseudo selectors are available:

- **hover**
- **disabled**
- **focus**
- **active**
- **visited**
- **firstChild**
- **lastChild**
- **oddChild**
- **evenChild**
- **focusWithin**

These can be composed together:

```js
import { classnames, hover, firstChild } from 'classy-ui';

const myClass = classnames(hover(firstChild('color-red-500')));
```

## Breakpoint selectors

There are four functions representing breakpoints, **sm**, **md**, **lg** and **xl**. These are used to enable classnames within the respective breakpoints:

```js
import { classnames, md } from 'classy-ui';

const myClass = classnames(md('color-red-500'));
```

**myClass** is now only red up to the **md** breakpoint defined in the config, which by default is **768px**.

## Group selectors

A special constant exported from **classy-ui** is called **GROUP**. This is used in combination with the **groupHover** function to trigger css classes based on some parent hovering.

```js
import { classnames, groupHover, GROUP } from 'classy-ui';

const myParent = classnames(GROUP);

const myChild = classnames(groupHover('color-red-500'));
```

Now any **myChild** of **myParent** will be red when the parent is being hovered.

## Composing

The Javascript API allows you to compose together classnames and also selectors.

### Composing classnames

```js
import { classnames } from 'classy-ui';

const myClass = classnames('background-color-red-500', 'color-white');
```

### Composing selectors

```js
import { classnames, md, xl, hover } from 'classy-ui';

const myClass = classnames(md(hover('color-white')), xl(hover('color-black')));
```

### Composing compositions

```js
import { classnames } from 'classy-ui';

const button = classnames('border-none', 'background-color-gray-500');

const alertButton = classnames(button, 'background-color-red-500');
```

## Factories

```js
import { classnames } from 'classy-ui';

export const button = isDisabled =>
  classnames('border-none', 'background-color-gray-500', 'color-black', {
    'background-color-gray-100': isDisabled,
    'color-gray-500': isDisabled,
  });
```

## Custom config

The basic configuration of **classy-ui** looks like:

```js
{
  space: {...},
  sizes: {...},
  breakpoints: {...},
  colors: {...},
  borderStyles: {...},
  borderWidths: {...},
  borderColors: {...}
  radii: {...},
  fontSizes: {...},
  fontWeights: {...},
  fonts: {...},
  letterSpacings: {...},
  lineHeights: {...},
  shadows: {...},
  transitions: {...},
  zIndices: {...},
}
```

Each **category** is structured by a **label** and a value:

```js
{
  lineHeights: {
    '0': '1',
    '1': '1.25',
    '2': '1.375',
    '3': '1.5',
    '4': '1.625',
    '5': '2',
  },
}
```

Take a look at the [base.config.js](https://github.com/cerebral/classy-ui/blob/master/src/config/base.config.ts) file. You can override any of these categories with your own file called **classy-ui.config.js**, which you put in the root of your project:

```js
module.exports = {
  // Use an object to replace the current values
  lineHeights: {
    tiny: '1',
    normal: '1.25',
    big: '1.375',
  },
  // Use a function to look at existing value
  colors: colors => ({
    ...colors,
    primary: 'red',
  }),
  // Use a function which returns a function to create a value
  // based on existing config
  borderColors: () => config => config.colors,
};
```

## Themes

There is also a configuration property called **themes**. It allows you to define multiple themes for your application. Each theme is allowed to override existing config. Automatically under the hood **classy-ui** will makes these values CSS variables. That means you simply need to add a class of **themes-myTheme** on the body and it optimally flips to your theme.

```js
module.exports = {
  themes: {
    dark: {
      colors: {
        white: 'black',
        black: 'white',
      },
    },
  },
};
```

In this example adding the classname **themes-dark** to any element, typically body, in your app will now flip the colors of any classname using these colors.

## How does it work?

At its core **classy-ui** is a babel plugin. When added it will look at your code and fin imports from the **classy-ui** package. It will now analyze the usage of these imports and replace their meaning.

**In development** it replaces **classnames**, **hover** etc. with a call to the runtime of **classy-ui**, holding the actual CSS to be injected into a style element that is already inserted in the head of the document. If the classname is already added, the code is just removed.

**In production** it does the same analysis, but instead of inserting the CSS to be added, it just removes the code. The CSS to be added is rather added to a **styles.css** file and your initial code is replaced with an import of this file. That means many files will have this import, but your build tool will handle this correctly.
