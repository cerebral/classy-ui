import pluginTester from 'babel-plugin-tester';

import classyUiPlugin from '../plugin';

pluginTester({
  plugin: classyUiPlugin,
  title: 'classy-ui',
  snapshot: true,
  tests: [
    {
      title: 'should convert simple',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.red)`,
    },
    {
      title: 'should convert pseudos',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.red.hover)`,
    },
    {
      title: 'should convert breakpoints',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.red.md)`,
    },
    {
      title: 'should convert both breakpoints and pseudos',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.red.md.hover)`,
    },
    {
      title: 'should convert complex compositions',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.blue, tokens.color.red.md.lg.hover)
`,
    },
    {
      error: true,
      title: 'should throw when nesting c call',
      code: `
import { compose, tokens } from 'classy-ui'

compose(compose(tokens.color.blue))`,
    },
    {
      error: false,
      title: 'should not throw when using group inside c call',
      code: `
import { compose, group } from 'classy-ui'

compose(group)`,
    },
    {
      title: 'should allow group with conditional after it',
      code: `
import { compose, group, tokens } from 'classy-ui'

compose(group, true ? tokens.color.red : '')`,
    },
    {
      title: 'should handle complex dynamic composition',
      code: `
import { compose, group, tokens } from 'classy-ui'

c(group, true ? tokens.color.red : '', tokens.backgroundColor.red, true ? tokens.display.block : '', tokens.display.inline)`,
    },
    {
      title: 'should fix specifiy issue in dynamic composition',
      code: `
import { compose, tokens } from 'classy-ui'
const aCompose = compose(tokens.color.blue, tokens.backgroundColor.blue)
const moreCompose = compose(tokens.color.green, tokens.backgroundColor.green)

compose(aCompose, moreCompose, tokens.color.red, tokens.backgroundColor.red)`,
    },
    {
      title: 'should handle dynamic calls to some function',
      code: `
import { compose, group } from 'classy-ui'

compose(group, someFunction())`,
    },
    {
      title: 'should fix specificity inside object',
      code: `
import { compose, tokens } from 'classy-ui'

const buttonBlue = compose(tokens.color.blue);
const buttonGreen = compose(tokens.color.green);

const buttonRed = compose(buttonBlue, buttonGreen, tokens.color.red);

{className: compose(buttonRed, tokens.color.green.hover)}


`,
    },
    {
      title: 'should handle derived classnames',
      code: `
import { compose, tokens } from 'classy-ui'

{className: compose(tokens.padding.2)}


`,
    },
    {
      title: 'should handle themes',
      code: `
import { themes } from 'classy-ui'

c(themes.dark)


`,
    },
  ],
});
