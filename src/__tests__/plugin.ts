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

compose(tokens.color.RED)`,
    },
    {
      title: 'should convert pseudos',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.RED.hover)`,
    },
    {
      title: 'should convert breakpoints',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.RED.tablet)`,
    },
    {
      title: 'should convert both breakpoints and pseudos',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.RED.tablet.hover)`,
    },
    {
      title: 'should convert complex compositions',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.BLUE, tokens.color.RED.tablet.laptop.hover)
`,
    },
    {
      error: true,
      title: 'should throw when nesting c call',
      code: `
import { compose, tokens } from 'classy-ui'

compose(compose(tokens.color.BLUE))`,
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

compose(group, true ? tokens.color.RED : ' ')`,
    },
    {
      title: 'should handle complex dynamic composition',
      code: `
import { compose, group, tokens } from 'classy-ui'

c(group, true ? tokens.color.RED : ' ', tokens.backgroundColor.RED, true ? tokens.display.BLOCK : ' ', tokens.display.INLINE_BLOCK)`,
    },
    {
      title: 'should fix specifiy issue in dynamic composition',
      code: `
import { compose, tokens } from 'classy-ui'
const aCompose = compose(tokens.color.BLUE, tokens.backgroundColor.BLUE)
const moreCompose = compose(tokens.color.GREEN, tokens.backgroundColor.GREEN)

compose(aCompose, moreCompose, tokens.color.RED, tokens.backgroundColor.RED)`,
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

const buttonBlue = compose(tokens.color.BLUE);
const buttonGreen = compose(tokens.color.GREEN);

const buttonRed = compose(buttonBlue, buttonGreen, tokens.color.RED);

{className: compose(buttonRed, tokens.color.GREEN.hover)}


`,
    },
    {
      title: 'should handle derived classnames',
      code: `
import { compose, tokens } from 'classy-ui'

{className: compose(tokens.padding.SPACING_1)}


`,
    },
    {
      title: 'should handle themes',
      code: `
import { themes } from 'classy-ui'

c(themes.dark)


`,
    },
    {
      title: 'should throw when using default import',
      error: true,
      code: `
import classy from 'classy-ui'
`,
    },
    {
      title: 'should throw when using namespace import',
      error: true,
      code: `
import * as classy from 'classy-ui'
`,
    },
    {
      title: 'should handle binary expressions',
      code: `
import { compose, tokens } from 'classy-ui'

compose(true && tokens.color.RED)`,
    },
    {
      title: 'should handle conditional expression',
      code: `
import { compose, tokens } from 'classy-ui'

compose(true ? tokens.color.GREEN : tokens.color.RED )`,
    },
    {
      error: true,
      title: 'should throw when using invalid class',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.BLU)`,
    },
    {
      title: 'should not override same token with different decorators',
      code: `
import { compose, tokens } from 'classy-ui'

compose(tokens.color.RED, tokens.color.RED.mobile)`,
    },
  ],
});
