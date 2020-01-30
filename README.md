# classy-ui

A typed, configurable design system with no runtime

## What is it?

With great inspiration from [tailwindcss](https://tailwindcss.com/) we wanted to take it a step further. **classy-ui**, like tailwindcss, lets you express your styling with CSS classes based on a design system that you can customize. Where **classy-ui** takes it further is that it automatically creates the output CSS based on your actual application consumption of these css classes... and yeah, it is typed, meaning you can search for the classes directly in your code even if you are **NOT** using Typescript.

The benefits:

- Typed usage of classnames from the design system which also gives you discoverability, traversing and searching for classnames
- Lazily creates classnames and pseudo selector CSS based on consumption in app
- Compose classnames together into variables or use them inline in components
- Use dynamic assignment of classnames with conveniant `{ 'my-class': isActive }`
- In production it automatically optimizes css class names and dynamic assignment. The created css file is automatically imported in your code, making it part of your existing CSS optimization tool chain
- The runtime **completely** disappears in production, meaning it does not affect your bundle size
- Supports themes by automatically converting themed configuration to CSS variables

The design system is based on [tailwindcss](https://tailwindcss.com/), the configuration is actually exactly the same.

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

## Decorators

The **classnames** function used in the examples above is what we call a **decorator**. There are several decorators and they have different purposes. All of them takes an optional set of classnames and/or dynamic classnames.

### Pseudo decorators

Pseudo decorators basically adds things like **:hover**, **:disabled** etc. to your classnames. You can compose multiple pseudo selectors on a single classname.

```js
import { hover } from 'classy-ui';

const myClass = hover('color-red-500');
```

The following pseudo decorators are available:

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
import { hover, firstChild } from 'classy-ui';

const myClass = hover(firstChild('color-red-500'));
```

## Screen decorators

**screens** is one of the properties of the configuration. This property holds the configuration of different breakpoints used in combination with media queries. By default these are **sm**, **md**, **lg** and **xl**. These are used to enable classnames within the respective breakpoints:

```js
import { md } from 'classy-ui';

const myClass = md('color-red-500');
```

**myClass** text is now red only up to the **md** breakpoint defined in the config, which by default is **768px**. If you were to change these **screens** properties, their respectve imports would be used. For example **tablet**:

```js
import { tablet } from 'classy-ui';

const myClass = tablet('color-red-500');
```

## Group decorators

You can also define a set off classnames with the **group** decorator. This allows any nested group decorator to trigger based on this parent. For example:

```js
import { classnames, groupHover, group } from 'classy-ui';

const myParent = group();

const myChild = groupHover('color-red-500');
```

Now any **myChild** of **myParent** will be red when **myParent** is being hovered. The following group decorators are available:

- **group**, creates the wrapping group and has no CSS side effect
- **groupHover**
- **groupFocus**
- **groupActive**
- **groupFirstChild**
- **groupLastChild**
- **groupOddChild**
- **groupEvenChild**
- **groupFocusWithin**

## Composing

The Javascript API allows you to compose together classnames and also decorators.

### Composing classnames

```js
import { classnames } from 'classy-ui';

const myClass = classnames('background-color-red-500', 'color-white');
```

### Composing decorators

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

A powerful concept brought with a Javascript API is factories. Instead of having static classnames, you can rather build them dynamically behind a function. This function can take any options you define.

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
  screens: {...},
  colors: {...},
  spacing: {...},
  backgroundColor: {...},
  backgroundPosition: {...},
  backgroundSize: {...},
  borderColor: {...},
  borderRadius: {...},
  borderWidth: {...},
  boxShadow: {...},
  container: {...},
  cursor: {...},
  fill: {...},
  flex: {...},
  flexGrow: {...},
  flexShrink: {...},
  fontFamily: {...},
  fontSize: {...},
  fontWeight: {...},
  height: {...},
  inset: {...},
  letterSpacing: {...},
  lineHeight: {...},
  listStyleType: {...},
  margin: {...},
  maxHeight: {...},
  maxWidth: {...},
  minHeight: {...},
  minWidth: {...},
  objectPosition: {...},
  opacity: {...},
  order: {...},
  padding: {...},
  placeholderColor: {...},
  stroke: {...},
  strokeWidth: {...},
  color: {...},
  width: {...},
  zIndex: {...},
  gap: {...},
  rowGap: {...},
  columnGap: {...},
  gridTemplateColumns: {...},
  gridColumn: {...},
  gridColumnStart: {...},
  gridColumnEnd: {...},
  gridTemplateRows: {...},
  gridRow: {...},
  gridRowStart: {...},
  gridRowEnd: {...},
  transformOrigin: {...},
  scale: {...},
  rotate: {...},
  translate: {...},
  skew: {...},
  transitionProperty: {...},
  transitionTimingFunction: {...},
  transitionDuration: {...},
},
```

Each **category** is structured by a **label** and a value:

```js
{
  transitionDuration: {
    '75': '75ms',
    '100': '100ms',
    '150': '150ms',
    '200': '200ms',
    '300': '300ms',
    '500': '500ms',
    '700': '700ms',
    '1000': '1000ms',
  },
}
```

Most of these categories maps directly to their CSS property counterpart, but others affects multiple CSS properties, as seen here:

```js
{
  padding: ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
  margin: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  placeholderColor: [],
  gap: ['gap'],
  rowGap: ['row-gap'],
  columnGap: ['column-gap'],
  gridTemplateColumns: ['grid-template-columns'],
  gridColumnStart: ['grid-column-start'],
  gridColumnEnd: ['grid-column-end'],
  gridTemplateRows: ['grid-template-rows'],
  gridRow: ['grid-row'],
  gridRowStart: ['grid-row-start'],
  gridRowEnd: ['grid-row-end'],
  transformOrigin: ['transform-origin'],
  scale: ['scale'],
  rotate: ['rotate'],
  translate: ['translate'],
  skew: ['skew'],
  transitionProperty: ['transition-property'],
  transitionTimingFunction: ['transition-timing-function'],
  transitionDuration: ['transition-duration'],
  gridColumn: ['grid-column'],
  width: ['width'],
  borderWidth: ['border-width', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
  borderColor: ['border-color', 'border-bottom-color', 'border-top-color', 'border-left-color', 'border-right-color'],
  borderRadius: [
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
  ],
  fontSize: ['font-size'],
  fontWeight: ['font-weight'],
  fontFamily: ['font-family'],
  letterSpacing: ['letter-spacing'],
  lineHeight: ['line-height'],
  boxShadow: ['box-shadow', 'text-shadow'],
  zIndex: ['z-index'],
  backgroundPosition: ['background-position'],
  backgroundSize: ['background-size'],
  cursor: ['cursor'],
  fill: ['fill'],
  flex: ['flex'],
  inset: ['inset'],
  listStyleType: ['list-style-type'],
  objectPosition: ['object-position'],
  opacity: ['opacity'],
  order: ['order'],
  stroke: ['stroke'],
  strokeWidth: ['stroke-width'],
  backgroundColor: ['background-color'],
  container: [],
  flexGrow: ['flex-grow'],
  flexShrink: ['flex-shrink'],
  height: ['height'],
  maxHeight: ['max-height'],
  maxWidth: ['max-width'],
  minHeight: ['min-height'],
  minWidth: ['min-width'],
  color: ['color'],
}
```

The way the classnames are evaluated is by looking at the CSS property itself, for example **border-top-width** which maps to **borderWidth** which again maps to:

```js
{
  borderWidth: {
  default: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px',
},
}
```

That means you have the following classes for **border-top-width**:

- **border-top-width-default**
- **border-top-width-0**
- **border-top-width-2**
- **border-top-width-4**
- **border-top-width-8**

Take a look at the [base.config.js](https://github.com/cerebral/classy-ui/blob/master/src/config/base.config.ts) file. You can override any of these categories with your own file called **classy-ui.config.js**, which you put in the root of your project:

```js
module.exports = {
  defaults: {
    // Use an object to replace the current values
    lineHeights: {
      tiny: '1',
      normal: '1.25',
      big: '1.375',
    },
    // Use a function to look at existing value. Use this to merge
    colors: colors => ({
      ...colors,
      primary: colors['red-500'],
      custom: 'red',
    }),
    // Use a function which returns a function to create a value
    // based on any existing config
    borderColors: () => defaults => defaults('colors'),
  },
};
```

## Themes

There is also a configuration property called **themes**. It allows you to define multiple themes for your application. Each theme is allowed to override existing config. Automatically under the hood **classy-ui** will makes these values CSS variables. That means you simply need to add a class of **themes-myTheme** on the body and it optimally flips to your theme.

```js
module.exports = {
  defaults: {...},
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
