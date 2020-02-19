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

c('color-red')`,
    },
    {
      title: 'should convert pseudos',
      code: `
import { c, hover } from 'classy-ui'

c(hover('color-red'))`,
    },
    {
      title: 'should convert breakpoints',
      code: `
import { c, md } from 'classy-ui'

c(md('color-red'))`,
    },
    {
      title: 'should convert both breakpoints and pseudos',
      code: `
import { c, hover, md } from 'classy-ui'

c(md(hover('color-red')))`,
    },
    {
      title: 'should convert complex compositions',
      code: `
import { c, hover, md, lg } from 'classy-ui'

c('color-blue', md(lg(hover('color-red'))))`,
    },
    {
      error: true,
      title: 'should throw when nesting c call',
      code: `
import { c } from 'classy-ui'

c(c('color-blue'))`,
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

group('color-blue', 'color-red')`,
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

hover('color-red')`,
    },
    {
      title: 'should allow group with conditional after it',
      code: `
import { c, group } from 'classy-ui'

c(group(), { 'color-red': true })`,
    },
    {
      title: 'should handle complex dynamic composition',
      code: `
import { c, group } from 'classy-ui'

c(group(), { 'color-red': true }, 'background-color-red', { 'display-block': true }, 'display-inline-block')`,
    },
    {
      title: 'should fix specifiy issue in dynamic composition',
      code: `
import { c} from 'classy-ui'
const compose = c('color-blue', 'background-color-blue')
const moreCompose = c('color-green', 'background-color-green')

c(compose, moreCompose, 'color-red', 'background-color-red')`,
    },
    {
      title: 'should handle dynamic calls to some function',
      code: `
import { c, group } from 'classy-ui'

c(group(), someFunction())`,
    },
    {
      title: 'should fix specificity inside object',
      code: `
import { c, hover } from 'classy-ui'

const buttonBlue = c('color-blue');
const buttonGreen = c('color-green');

const buttonRed = c(buttonBlue, buttonGreen, 'color-red');

{className: c(buttonRed, hover('color-green'))}


`,
    },
    {
      title: 'should handle derived classnames',
      code: `
import { c } from 'classy-ui'

{className: c('padding-2')}


`,
    },
  ],
});
