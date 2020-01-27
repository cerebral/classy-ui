# classy-ui

A typed, configurable design system with no runtime

## What is it?

With great inspiration from [tailwindcss](https://tailwindcss.com/) we wanted to create an experience using the class based approach of typing, with less friction.

- Type safe usage of classnames from the design system
- Compose classnames together into variables or use them inline in components
- Use dynamic assignment of classnames
- Automatically produces the classes you consume, both in development and production
- No runtime in production

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

## First run

When you fire up your project the first time
