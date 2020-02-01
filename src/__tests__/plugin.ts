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
import { c } from 'classy-ui'

c('background-color-red-500')`,
    },
    {
      title: 'should convert pseudos',
      code: `
import { c, hover } from 'classy-ui'

c(hover('background-color-red-500'))`,
    },
    {
      title: 'should convert breakpoints',
      code: `
import { c, md } from 'classy-ui'

c(md('background-color-red-500'))`,
    },
    {
      title: 'should convert both breakpoints and pseudos',
      code: `
import { c, hover, md } from 'classy-ui'

c(md(hover('background-color-red-500')))`,
    },
    {
      title: 'should convert complex compositions',
      code: `
import { c, hover, md, lg } from 'classy-ui'

c('background-color-red-600', md(lg(hover('background-color-red-500'))))`,
    },
    {
      error: true,
      title: 'should throw when nesting c call',
      code: `
import { c } from 'classy-ui'

c(c('background-color-red-600'))`,
    },
    {
      error: false,
      title: 'should not throw when using group inside c call',
      code: `
import { c, group } from 'classy-ui'

c(group())`,
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
import { c, group as g } from 'classy-ui'

c(group())`,
    },
    {
      title: 'should give group a classname',
      code: `
import { c, group } from 'classy-ui'

group()`,
    },
    {
      title: 'should allow pseudo decorators as base',
      code: `
import { c, hover } from 'classy-ui'

hover('background-color-red-500')`,
    },
    {
      title: 'should allow group with conditional after it',
      code: `
import { c, group } from 'classy-ui'

c(group(), { 'background-color-red-500': true })`,
    },
    {
      title: 'should handle complex dynamic composition',
      code: `
import { c, group } from 'classy-ui'

c(group(), { 'background-color-red-500': true }, 'color-white', { 'background-color-blue-500': true }, 'border-radius-sm')`,
    },
    {
      title: 'should fix specifiy issue in dynamic composition',
      code: `
import { c} from 'classy-ui'

c(compose, moreCompose, 'color-red-500', 'border-radius-sm')`,
    },
  ],
});
