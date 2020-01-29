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
  ],
});
