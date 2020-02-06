import { IBaseConfig, IVariants } from '../types';

export const config: IBaseConfig<'breakpoints' | 'spacing' | 'colors'> = {
  variables: {
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    colors: {
      transparent: 'transparent',
      black: '#000',
      white: '#fff',
      'gray-100': '#f7fafc',
      'gray-200': '#edf2f7',
      'gray-300': '#e2e8f0',
      'gray-400': '#cbd5e0',
      'gray-500': '#a0aec0',
      'gray-600': '#718096',
      'gray-700': '#4a5568',
      'gray-800': '#2d3748',
      'gray-900': '#1a202c',
      'red-100': '#fff5f5',
      'red-200': '#fed7d7',
      'red-300': '#feb2b2',
      'red-400': '#fc8181',
      'red-500': '#f56565',
      'red-600': '#e53e3e',
      'red-700': '#c53030',
      'red-800': '#9b2c2c',
      'red-900': '#742a2a',
      'orange-100': '#fffaf0',
      'orange-200': '#feebc8',
      'orange-300': '#fbd38d',
      'orange-400': '#f6ad55',
      'orange-500': '#ed8936',
      'orange-600': '#dd6b20',
      'orange-700': '#c05621',
      'orange-800': '#9c4221',
      'orange-900': '#7b341e',
      'yellow-100': '#fffff0',
      'yellow-200': '#fefcbf',
      'yellow-300': '#faf089',
      'yellow-400': '#f6e05e',
      'yellow-500': '#ecc94b',
      'yellow-600': '#d69e2e',
      'yellow-700': '#b7791f',
      'yellow-800': '#975a16',
      'yellow-900': '#744210',
      'green-100': '#f0fff4',
      'green-200': '#c6f6d5',
      'green-300': '#9ae6b4',
      'green-400': '#68d391',
      'green-500': '#48bb78',
      'green-600': '#38a169',
      'green-700': '#2f855a',
      'green-800': '#276749',
      'green-900': '#22543d',
      'teal-100': '#e6fffa',
      'teal-200': '#b2f5ea',
      'teal-300': '#81e6d9',
      'teal-400': '#4fd1c5',
      'teal-500': '#38b2ac',
      'teal-600': '#319795',
      'teal-700': '#2c7a7b',
      'teal-800': '#285e61',
      'teal-900': '#234e52',
      'blue-100': '#ebf8ff',
      'blue-200': '#bee3f8',
      'blue-300': '#90cdf4',
      'blue-400': '#63b3ed',
      'blue-500': '#4299e1',
      'blue-600': '#3182ce',
      'blue-700': '#2b6cb0',
      'blue-800': '#2c5282',
      'blue-900': '#2a4365',
      'indigo-100': '#ebf4ff',
      'indigo-200': '#c3dafe',
      'indigo-300': '#a3bffa',
      'indigo-400': '#7f9cf5',
      'indigo-500': '#667eea',
      'indigo-600': '#5a67d8',
      'indigo-700': '#4c51bf',
      'indigo-800': '#434190',
      'indigo-900': '#3c366b',
      'purple-100': '#faf5ff',
      'purple-200': '#e9d8fd',
      'purple-300': '#d6bcfa',
      'purple-400': '#b794f4',
      'purple-500': '#9f7aea',
      'purple-600': '#805ad5',
      'purple-700': '#6b46c1',
      'purple-800': '#553c9a',
      'purple-900': '#44337a',
      'pink-100': '#fff5f7',
      'pink-200': '#fed7e2',
      'pink-300': '#fbb6ce',
      'pink-400': '#f687b3',
      'pink-500': '#ed64a6',
      'pink-600': '#d53f8c',
      'pink-700': '#b83280',
      'pink-800': '#97266d',
      'pink-900': '#702459',
    },
  },
  screens: {
    sm: (css, { breakpoints }) => `@media (max-width:${breakpoints.sm}) {${css}}`,
    md: (css, { breakpoints }) => `@media (max-width:${breakpoints.md}) {${css}}`,
    lg: (css, { breakpoints }) => `@media (max-width:${breakpoints.lg}) {${css}}`,
    xl: (css, { breakpoints }) => `@media (max-width:${breakpoints.xl}) {${css}}`,
  },
  classnames: {
    block: name => `${name}{display:block;}`,
    'inline-block': name => `${name}{display:inline-block;}`,
    inline: name => `${name}{display:inline;}`,
    'inline-flex': name => `${name}{display:inline-flex;}`,
    flex: {
      variants: {
        '': 'display:flex',
        '1': 'flex:1 1 0%',
        auto: 'flex:1 1 auto',
        initial: 'flex:0 1 auto',
        none: 'flex:none',
        row: 'flex-direction:row',
        'row-reverse': 'flex-direction:row-reverse',
        col: 'flex-direction:column',
        'col-reverse': 'flex-direction:column-reverse',
        'no-wrap': 'flex-wrap:nowrap',
        wrap: 'flex-wrap:wrap',
        'wrap-reverse': 'flex-wrap:wrap-reverse',
        grow: 'flex-grow:1',
        'grow-0': 'flex-grow:0',
        shrink: 'flex-shrink:1',
        'shrink-0': 'flex-shrink:0',
      },
      css: (name, value) => `${name}{${value};}`,
    },
    table: {
      variants: {
        '': 'display:table',
        auto: 'table-layout:auto',
        fixed: 'table-layout:fixed',
      },
      css: (name, value) => `${name}{${value};}`,
    },
    'table-row': name => `${name}{display:table-row;}`,
    'table-cell': name => `${name}{display:table-cell;}`,
    hidden: name => `${name}{display:hidden;}`,
    static: name => `${name}{position:static;}`,
    fixed: name => `${name}{position:fixed;}`,
    absolute: name => `${name}{position:absolute;}`,
    relative: name => `${name}{position:relative;}`,
    sticky: name => `${name}{position:sticky;}`,
    bg: {
      variants: ({ colors }) => ({
        fixed: 'background-attachment:fixed',
        local: 'background-attachment:local',
        scroll: 'background-attachment:scroll',
        bottom: 'background-position:bottom',
        center: 'background-position:center',
        left: 'background-position:left',
        'left-bottom': 'background-position:left bottom',
        'left-top': 'background-position:left top',
        right: 'background-position:right',
        'right-bottom': 'background-position:right bottom',
        'right-top': 'background-position:right top',
        top: 'background-position:top',
        repeat: 'background-repeat:repeat',
        'no-repeat': 'background-repeat:no-repeat',
        'repeat-x': 'background-repeat:repeat-x',
        'repeat-y': 'background-repeat:repeat-y',
        'repeat-round': 'background-repeat:repeat-round',
        'repeat-space': 'background-repeat:repeat-space',
        auto: 'background-size:auto',
        cover: 'background-size:cover',
        contain: 'background-size:container',
        ...Object.keys(colors).reduce<IVariants>((aggr, key) => {
          aggr[key] = `background-color:${colors[key]}`;

          return aggr;
        }, {}),
      }),
      css: (name, value) => `${name}{${value};}`,
    },
    color: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}{color:${value};}`,
    },
    borderRadius: {
      variants: {
        none: '0',
        sm: '0.125rem',
        default: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        full: '9999px',
      },
      css: (name, value) => `${name}{border-radius:${value};}`,
    },
    border: {
      variants: ({ colors }) => ({
        '': 'border-width:1px',
        '0': 'border-width:0',
        '2': 'border-width:2px',
        '4': 'border-width:4px',
        '8': 'border-width:8px',
        t: 'border-top-width:1px',
        't-0': 'border-top-width:0',
        't-2': 'border-top-width:2px',
        't-4': 'border-top-width:4px',
        't-8': 'border-top-width:8px',
        r: 'border-right-width:1px',
        'r-0': 'border-right-width:0',
        'r-2': 'border-right-width:2px',
        'r-4': 'border-right-width:4px',
        'r-8': 'border-right-width:8px',
        b: 'border-bottom-width:1px',
        'b-0': 'border-bottom-width:0',
        'b-2': 'border-bottom-width:2px',
        'b-4': 'border-bottom-width:4px',
        'b-8': 'border-bottom-width:8px',
        l: 'border-left-width:1px',
        'l-0': 'border-left-width:0',
        'l-2': 'border-left-width:2px',
        'l-4': 'border-left-width:4px',
        'l-8': 'border-left-width:8px',
        solid: 'border-style:solid',
        dashed: 'border-style:dashed',
        dotted: 'border-style:dotted',
        double: 'border-style:double',
        none: 'border-style:none',
        collapse: 'border-collapse:collapse',
        separate: 'border-collapse:separate',
        ...Object.keys(colors).reduce<IVariants>((aggr, key) => {
          aggr[key] = `border-color:${colors[key]}`;

          return aggr;
        }, {}),
      }),
      css: (name, value) => `${name}{${value};}`,
    },
    overflow: {
      variants: {
        auto: 'overflow:auto',
        hidden: 'overflow:hidden',
        visible: 'overflow:visible',
        scroll: 'overflow:scroll',
        'x-auto': 'overflow-x:auto',
        'y-auto': 'overflow-y:auto',
        'x-hidden': 'overflow-x:hidden',
        'y-hidden': 'overflow-y:hidden',
        'x-visible': 'overflow-x:visible',
        'y-visible': 'overflow-y:visible',
        'x-scroll': 'overflow-x:scroll',
        'y-scroll': 'overflow-y:scroll',
      },
      css: (name, value) => `${name}{${value};}`,
    },
    visible: name => `${name}{visibility:visible;}`,
    invisible: name => `${name}{visibility:hidden;}`,
    scrolling: {
      variants: {
        touch: 'touch',
        auto: 'auto',
      },
      css: (name, value) => `${name}{-webkit-overflow-scrolling:${value};}`,
    },
    items: {
      variants: {
        stretch: 'stretch',
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        baseline: 'baseline',
      },
      css: (name, value) => `${name}{align-items:${value};}`,
    },
    shadow: {
      variants: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      css: (name, value) => `${name}{box-shadow:${value};}`,
    },
    outline: {
      variants: {
        none: '0',
      },
      css: (name, value) => `${name}{outline:${value};}`,
    },
    pointerEvents: {
      variants: {
        none: 'none',
        auto: 'auto',
      },
      css: (name, value) => `${name}{pointer-events:${value}}`,
    },
    resize: {
      variants: {
        '': 'both',
        none: 'none',
        y: 'vertical',
        x: 'horizontal',
      },
      css: (name, value) => `${name}{resize:${value};}`,
    },
    select: {
      variants: {
        none: 'none',
        text: 'text',
        all: 'all',
        auto: 'auto',
      },
      css: (name, value) => `${name}{user-select:${value};}`,
    },
    container: {
      variants: ({ breakpoints }) => ({
        none: 'width:100%',
        ...Object.keys(breakpoints).reduce<IVariants>((aggr, key) => {
          aggr[key] = `max-width:${breakpoints[key]};`;

          return aggr;
        }, {}),
      }),
      css: (name, value) => `${name}{${value};}`,
    },
    cursor: {
      variants: {
        auto: 'auto',
        default: 'default',
        pointer: 'pointer',
        wait: 'wait',
        text: 'text',
        move: 'move',
        'not-allowed': 'not-allowed',
      },
      css: (name, value) => `${name}{cursor:${value};}`,
    },
    fill: {
      variants: {
        current: 'currentColor',
      },
      css: (name, value) => `${name}{fill:${value};}`,
    },
    appearance: {
      variants: {
        none: 'none',
      },
      css: (name, value) => `${name}{appearance:${value};}`,
    },
    font: {
      variants: {
        hairline: 'font-weight:100',
        thin: 'font-weight:200',
        light: 'font-weight:300',
        normal: 'font-weight:400',
        medium: 'font-weight:500',
        semibold: 'font-weight:600',
        bold: 'font-weight:700',
        extrabold: 'font-weight:800',
        black: 'font-weight:900',
        sans: `font-family:${[
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ].join(', ')}`,
        serif: `font-family:${['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(',')}`,
        mono: `font-family:${['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(
          ',',
        )}`,
      },
      css: (name, value) => `${name}{${value};}`,
    },
    text: {
      variants: ({ colors }) => ({
        xs: 'font-size:0.75rem',
        sm: 'font-size:0.875rem',
        base: 'font-size:1rem',
        lg: 'font-size:1.125rem',
        xl: 'font-size:1.25rem',
        '2xl': 'font-size:1.5rem',
        '3xl': 'font-size:1.875rem',
        '4xl': 'font-size:2.25rem',
        '5xl': 'font-size:3rem',
        '6xl': 'font-size:4rem',
        left: 'text-align:left',
        center: 'text-align:center',
        right: 'text-align:right',
        justify: 'text-align:justify',
        ...Object.keys(colors).reduce<IVariants>((aggr, key) => {
          aggr[key] = `color:${colors[key]}`;

          return aggr;
        }, {}),
      }),
      css: (name, value) => `${name}{${value};}`,
    },
    underline: name => `${name}{text-decoration:underline;}`,
    'line-through': name => `${name}{text-decoration:line-through;}`,
    'no-underline': name => `${name}{text-decoration:none;}`,
    antialiased: name => `${name}{-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;}`,
    'subpixel-antialiased': name => `${name}{-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;}`,
    italic: name => `${name}{font-style:italic;}`,
    'non-italic': name => `${name}{font-style:normal;}`,
    uppercase: name => `${name}{text-transform:uppercase;}`,
    lowercase: name => `${name}{text-transform:lowercase;}`,
    capitalize: name => `${name}{text-transform:capitalize;}`,
    'normal-case': name => `${name}{text-transform:none;}`,
    align: {
      variants: {
        baseline: 'baseline',
        top: 'top',
        middle: 'middle',
        bottom: 'bottom',
        'text-top': 'text-top',
        'text-bottom': 'text-bottom',
      },
      css: (name, value) => `${name}{vertical-align:${value};}`,
    },
    h: {
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
        full: '100%',
        screen: '100vh',
      }),
      css: (name, value) => `${name}{height:${value};}`,
    },
    inset: {
      variants: {
        '0': 'top:0;right:0;bottom:0;left:0;',
        'y-0': 'top:0;bottom:0;',
        'x-0': 'right:0;left:0;',
        'y-auto': 'top:auto;bottom:auto;',
        'x-auto': 'right:auto;left:auto;',
        auto: 'top:auto;right:auto;bottom:auto;left:auto;',
      },
      css: (name, value) => `${name}{${value}}`,
    },
    whitespace: {
      variants: {
        normal: 'normal',
        'no-wrap': 'nowrap',
        pre: 'pre',
        'pre-line': 'pre-line',
        'pre-wrap': 'pre-wrap',
      },
      css: (name, value) => `${name}{white-space:${value};}`,
    },
    top: {
      variants: {
        '0': '0',
        auto: 'auto',
      },
      css: (name, value) => `${name}{top:${value};}`,
    },
    break: {
      variants: {
        normal: 'word-brea:normal;overflow-wrap:normal;',
        words: 'overflow-wrap:break-word;',
        all: 'word-break:break-all;',
      },
      css: (name, value) => `${name}{${value}}`,
    },
    truncate: () => '{overflow: hidden;text-overflow: ellipsis;white-space: nowrap}',
    right: {
      variants: {
        '0': '0',
        auto: 'auto',
      },
      css: (name, value) => `${name}{right:${value};}`,
    },
    left: {
      variants: {
        '0': '0',
        auto: 'auto',
      },
      css: (name, value) => `${name}{left:${value};}`,
    },
    bottom: {
      variants: {
        '0': '0',
        auto: 'auto',
      },
      css: (name, value) => `${name}{bottom:${value};}`,
    },
    tracking: {
      variants: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
      css: (name, value) => `${name}{letter-spacing:${value};}`,
    },
    leading: {
      variants: {
        none: '1',
        tight: '1.25',
        snug: '1.375',
        normal: '1.5',
        relaxed: '1.625',
        loose: '2',
      },
      css: (name, value) => `${name}{line-height:${value};}`,
    },
    list: {
      variants: {
        none: 'list-style-type:none',
        disc: 'list-style-type:disc',
        decimal: 'list-style-type:decimal',
        inside: 'list-style-position:inside',
        outside: 'list-style-position:outside',
      },
      css: (name, value) => `${name}{${value};}`,
    },
    float: {
      variants: {
        right: 'right',
        left: 'left',
        none: 'none',
      },
      css: (name, value) => `${name}{float:${value};}`,
    },
    content: {
      variants: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        between: 'space-between',
        around: 'space-around',
      },
      css: (name, value) => `${name}{align-content:${value};}`,
    },
    self: {
      variants: {
        auto: 'auto',
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        stretch: 'stretch',
      },
      css: (name, value) => `${name}{align-self:${value};}`,
    },
    justify: {
      variants: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        between: 'space-between',
        around: 'space-around',
      },
      css: (name, value) => `${name}{justify-content:${value};}`,
    },
    clearfix: () => '::after{content: "";display: table;clear: both;}',
    margin: {
      variants: ({ spacing }, { negative }) => ({
        auto: 'auto',
        ...spacing,
        ...negative(spacing),
      }),
      css: (name, value) => `${name}{margin:${value}};`,
    },
    maxH: {
      variants: {
        full: '100%',
        screen: '100vh',
      },
      css: (name, value) => `${name}{max-height:${value};}`,
    },
    maxW: {
      variants: {
        none: 'none',
        xs: '20rem',
        sm: '24rem',
        md: '28rem',
        lg: '32rem',
        xl: '36rem',
        '2xl': '42rem',
        '3xl': '48rem',
        '4xl': '56rem',
        '5xl': '64rem',
        '6xl': '72rem',
        full: '100%',
      },
      css: (name, value) => `${name}{max-width:${value};}`,
    },
    minH: {
      variants: {
        '0': '0',
        full: '100%',
        screen: '100vh',
      },
      css: (name, value) => `${name}{min-height:${value};}`,
    },
    minW: {
      variants: {
        '0': '0',
        full: '100%',
      },
      css: (name, value) => `${name}{min-width:${value};}`,
    },
    object: {
      variants: {
        contain: 'object-fit:contain',
        cover: 'object-fit:cover',
        fill: 'object-fit:fill',
        none: 'object-fit:none',
        'scale-down': 'object-fit:scale-down',
        bottom: 'object-position:bottom',
        center: 'object-position:center',
        left: 'object-position:left',
        'left-bottom': 'object-position:left bottom',
        'left-top': 'object-position:left top',
        right: 'object-position:right',
        'right-bottom': 'object-position:right bottom',
        'right-top': 'object-position:right top',
        top: 'object-position:top',
      },
      css: (name, value) => `${name}{${value};}`,
    },

    opacity: {
      variants: {
        '0': '0',
        '25': '0.25',
        '50': '0.5',
        '75': '0.75',
        '100': '1',
      },
      css: (name, value) => `${name}{opacity:${value};}`,
    },
    order: {
      variants: {
        first: '-9999',
        last: '9999',
        none: '0',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
      },
      css: (name, value) => `${name}{order:${value};}`,
    },
    p: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding:${spacing[key]};`;

          return aggr;
        }, {}),
      css: (name, value) => `${name}{${value}}`,
    },
    py: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-top:${spacing[key]};padding-bottom:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    px: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-left:${spacing[key]};padding-right:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    pt: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-top:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    pr: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-right:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    pb: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-bottom:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    pl: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-left:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    m: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin:${spacing[key]};`;

          return aggr;
        }, {}),
      css: (name, value) => `${name}{${value}}`,
    },
    my: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin-top:${spacing[key]};margin-bottom:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    mx: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin-left:${spacing[key]};margin-right:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    mt: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin-top:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    mr: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin-right:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    mb: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin-bottom:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    ml: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `margin-left:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    placeholder: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}::placeholder{color:${value};}`,
    },
    stroke: {
      variants: {
        current: 'currentColor',
      },
      css: (name, value) => `${name}{stroke:${value};}`,
    },
    w: {
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
        full: '100%',
        screen: '100vw',
      }),
      css: (name, value) => `${name}{width:${value};}`,
    },
    z: {
      variants: {
        auto: 'auto',
        '0': '0',
        '10': '10',
        '20': '20',
        '30': '30',
        '40': '40',
        '50': '50',
      },
      css: (name, value) => `${name}{z-index:${value};}`,
    },
    gap: {
      variants: ({ spacing }) => spacing,
      css: (name, value) => `${name}{gap:${value};}`,
    },
    rowGap: name => `${name}{}`,
    columnGap: name => `${name}{}`,
    gridTemplateColumns: {
      variants: {
        none: 'none',
        '1': 'repeat(1, minmax(0, 1fr))',
        '2': 'repeat(2, minmax(0, 1fr))',
        '3': 'repeat(3, minmax(0, 1fr))',
        '4': 'repeat(4, minmax(0, 1fr))',
        '5': 'repeat(5, minmax(0, 1fr))',
        '6': 'repeat(6, minmax(0, 1fr))',
        '7': 'repeat(7, minmax(0, 1fr))',
        '8': 'repeat(8, minmax(0, 1fr))',
        '9': 'repeat(9, minmax(0, 1fr))',
        '10': 'repeat(10, minmax(0, 1fr))',
        '11': 'repeat(11, minmax(0, 1fr))',
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      css: (name, value) => `${name}{grid-template-columns:${value};}`,
    },
    gridColumn: {
      variants: {
        auto: 'auto',
        'span-1': 'span 1 / span 1',
        'span-2': 'span 2 / span 2',
        'span-3': 'span 3 / span 3',
        'span-4': 'span 4 / span 4',
        'span-5': 'span 5 / span 5',
        'span-6': 'span 6 / span 6',
        'span-7': 'span 7 / span 7',
        'span-8': 'span 8 / span 8',
        'span-9': 'span 9 / span 9',
        'span-10': 'span 10 / span 10',
        'span-11': 'span 11 / span 11',
        'span-12': 'span 12 / span 12',
      },
      css: (name, value) => `${name}{grid-column:${value};}`,
    },
    gridColumnStart: {
      variants: {
        auto: 'auto',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      css: (name, value) => `${name}{grid-column-start:${value};}`,
    },
    gridColumnEnd: {
      variants: {
        auto: 'auto',
        '1': '1',
        '2': '2',
        '3': '3',
        '4': '4',
        '5': '5',
        '6': '6',
        '7': '7',
        '8': '8',
        '9': '9',
        '10': '10',
        '11': '11',
        '12': '12',
        '13': '13',
      },
      css: (name, value) => `${name}{grid-column-end:${value};}`,
    },
    gridTemplateRows: () => `${name}{}`,
    gridRow: () => `${name}{}`,
    gridRowStart: () => `${name}{}`,
    gridRowEnd: () => `${name}{}`,
    transformOrigin: {
      variants: {
        center: 'center',
        top: 'top',
        'top-right': 'top right',
        right: 'right',
        'bottom-right': 'bottom right',
        bottom: 'bottom',
        'bottom-left': 'bottom left',
        left: 'left',
        'top-left': 'top left',
      },
      css: (name, value) => `${name}{transform-origin:${value};}`,
    },
    scale: {
      variants: {
        '0': '0',
        '50': '.5',
        '75': '.75',
        '90': '.9',
        '95': '.95',
        '100': '1',
        '105': '1.05',
        '110': '1.1',
        '125': '1.25',
        '150': '1.5',
      },
      css: (name, value) => `${name}{transform:scale(${value});}`,
    },
    rotate: {
      variants: {
        '-180': '-180deg',
        '-90': '-90deg',
        '-45': '-45deg',
        '0': '0',
        '45': '45deg',
        '90': '90deg',
        '180': '180deg',
      },
      css: (name, value) => `${name}{transform:rotate(${value});}`,
    },
    translate: {
      variants: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        '-full': '-100%',
        '-1/2': '-50%',
        '1/2': '50%',
        full: '100%',
      }),
      css: (name, value) => `${name}{transform:translate(${value});}`,
    },
    skew: () => '',
    rounded: {
      variants: {
        '': 'border-radius:.25rem;',
        none: 'border-radius:0;',
        sm: 'border-radius:.125rem;',
        lg: 'border-radius:.5rem;',
        full: 'border-radius:9999px',
        't-none': 'border-radius-top-left:0;border-radius-top-right:0;',
        'r-none': 'border-radius-top-right:0;border-radius-bottom-right:0;',
        'b-none': 'border-radius-bottom-left:0;border-radius-bottom-right:0;',
        'l-none': 'border-radius-bottom-left:0;border-radius-top-left:0;',
        't-sm': 'border-top-left-radius:.125rem;border-top-right-radius:.125rem;',
        'r-sm': 'border-top-right-radius:.125rem;border-bottom-right-radius:.125rem;',
        'b-sm': 'border-bottom-right-radius: .125rem;border-bottom-left-radius:.125rem;',
        'l-sm': 'border-top-left-radius:.125rem;border-bottom-left-radius:.125rem;',
        t: 'border-top-left-radius:.25rem;border-top-right-radius:.25rem;',
        r: 'border-top-right-radius:.25rem;border-bottom-right-radius:.25rem;',
        b: 'border-bottom-right-radius:.25rem;border-bottom-left-radius:.25rem;',
        l: 'border-top-left-radius:.25rem;border-bottom-left-radius:.25rem;',
        't-lg': 'border-top-left-radius:.5rem;border-top-right-radius:.5rem;',
        'r-lg': 'border-top-right-radius:.5rem;border-bottom-right-radius:.5rem;',
        'b-lg': 'border-bottom-right-radius:.5rem;border-bottom-left-radius:.5rem;',
        'l-lg': 'border-top-left-radius:.5rem;border-bottom-left-radius:.5rem;',
        't-full': 'border-top-left-radius:9999px;border-top-right-radius:9999px;',
        'r-full': 'border-top-right-radius:9999px;border-bottom-right-radius:9999px;',
        'b-full': 'border-bottom-right-radius:9999px;border-bottom-left-radius:9999px;',
        'l-full': 'border-top-left-radius:9999px;border-bottom-left-radius:9999px;',
        'tl-none': 'border-top-left-radius:0;',
        'tr-none': 'border-top-right-radius:0;',
        'br-none': 'border-bottom-right-radius:0;',
        'bl-none': 'border-bottom-left-radius:0;',
        'tl-sm': 'border-top-left-radius:.125rem;',
        'tr-sm': 'border-top-right-radius:.125rem;',
        'br-sm': 'border-bottom-right-radius:.125rem;',
        'bl-sm': 'border-bottom-left-radius:.125rem;',
        tl: 'border-top-left-radius:.25rem;',
        tr: 'border-top-right-radius:.25rem;',
        br: 'border-bottom-right-radius:.25rem;',
        bl: 'border-bottom-left-radius:.25rem;',
        'tl-lg': 'border-top-left-radius:.5rem;',
        'tr-lg': 'border-top-right-radius:.5rem;',
        'br-lg': 'border-bottom-right-radius:.5rem;',
        'bl-lg': 'border-bottom-left-radius:.5rem;',
        'tl-full': 'border-top-left-radius:9999px;',
        'tr-full': 'border-top-right-radius:9999px;',
        'br-full': 'border-bottom-right-radius:9999px;',
        'bl-full': 'border-bottom-left-radius:9999px;',
      },
      css: (name, value) => `${name}{${value}}`,
    },
    transitionProperty: {
      variants: {
        none: 'none',
        all: 'all',
        default: 'background-color, border-color, color, opacity, transform',
        colors: 'background-color, border-color, color',
        opacity: 'opacity',
        transform: 'transform',
      },
      css: (name, value) => `${name}{transition-property:${value};}`,
    },
    transitionTimingFunction: {
      variants: {
        linear: 'linear',
        in: 'cubic-bezier(0.4, 0, 1, 1)',
        out: 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      css: (name, value) => `${name}{transition-timing-function:${value};}`,
    },
    transitionDuration: {
      variants: {
        '75': '75ms',
        '100': '100ms',
        '150': '150ms',
        '200': '200ms',
        '300': '300ms',
        '500': '500ms',
        '700': '700ms',
        '1000': '1000ms',
      },
      css: (name, value) => `${name}{transition-duration:${value};}`,
    },
    srOnly: name =>
      `${name}{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}`,
    notSrOnly: () =>
      `${name}{position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal;}`,
  },
};
