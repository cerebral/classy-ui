# classy-ui

A typed, configurable design system with no runtime

## What is it?

With great inspiration from [tailwindcss](https://tailwindcss.com/) we wanted to create an experience where you get a type safe and automatically optimized bundle based on what classes and pseudo selectors you actualy use.

- Type safe usage of classnames from the design system which also gives you discoverability, traversing and searching for classnames
- Lazily creates classnames and pseudo selector CSS based on consumption in app
- Compose classnames together into variables or use them inline in components
- Use dynamic assignment of classnames
- Automatically extracts and imports to a CSS in productiont for you to optimize the CSS further
- No runtime in production

A design system based on [system-ui specification](https://system-ui.com/theme/), which gives you a set of options which gives consistency across your CSS properties.

## How to use it

Install the project:

```
npm install classy-ui
```

If you are using **babel-plugin-macros** you can go straight ahead and just use the api:

```ts
import { classnames } from 'classy-ui/macro';
```

Alternatively you can add **classy-ui/plugin** to your babel configuration:

```json
{
  "plugins": ["classy-ui/plugin"]
}
```

This results in the same behaviour, though you can now use the root imports:

```ts
import { classnames } from 'classy-ui';
```

## Create your first element

When your development flow starts **classy-ui** automatically prepare the typing based on the configuration of the project. That means as soon as you:

```ts
import { classnames, hover } from 'classy-ui';

export const button = classnames('background-color-gray-400', hover('background-color-gray-200'));
```

you will have full type safety and the composed class is inserted into the document. When you now use this button classname, here showing it with **JSX**:

```tsx
<button className={button}>Hello</button>
```

It will just work.

## Using pseudo selectors

## Composing

## Components

## Custom config

## Themes

## How does it work?
