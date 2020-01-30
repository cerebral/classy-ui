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
import { classnames } from 'classy-ui'

classnames('background-color-red-500')`,
    },
    {
      title: 'should convert pseudos',
      code: `
import { classnames, hover } from 'classy-ui'

classnames(hover('background-color-red-500'))`,
    },
    {
      title: 'should convert breakpoints',
      code: `
import { classnames, md } from 'classy-ui'

classnames(md('background-color-red-500'))`,
    },
    {
      title: 'should convert both breakpoints and pseudos',
      code: `
import { classnames, hover, md } from 'classy-ui'

classnames(md(hover('background-color-red-500')))`,
    },
    {
      title: 'should convert complex compositions',
      code: `
import { classnames, hover, md, lg } from 'classy-ui'

classnames('background-color-red-600', md(lg(hover('background-color-red-500'))))`,
    },
    {
      error: true,
      title: 'should throw when nesting classnames call',
      code: `
import { classnames } from 'classy-ui'

classnames(classnames('background-color-red-600'))`,
    },
    {
      error: false,
      title: 'should not throw when using group inside classnames call',
      code: `
import { classnames, group } from 'classy-ui'

classnames(group())`,
    },
    {
      error: false,
      title: 'should allow arguments to group',
      code: `
import { group } from 'classy-ui'

group('background-color-red-600', 'background-color-red-500')`,
    },
    {
      error: true,
      title: 'should throw if group was renamed',
      code: `
import { classnames, group as g } from 'classy-ui'

classnames(group())`,
    },
    {
      title: 'should give group a classname',
      code: `
import { classnames, group } from 'classy-ui'

group()`,
    },
    {
      title: 'should allow pseudo decorators as base',
      code: `
import { classnames, hover } from 'classy-ui'

hover('background-color-red-500')`,
    },
  ],
});
