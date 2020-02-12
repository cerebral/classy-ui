import { IBaseConfig, IVariants } from '../types';

export const config: IBaseConfig<
  | 'breakpoints'
  | 'spacing'
  | 'colors'
  | 'borderWidths'
  | 'letterSpacing'
  | 'lineHeight'
  | 'borderRadius'
  | 'fontFamily'
  | 'boxShadows'
  | 'opacity'
> = {
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
    fontFamily: {
      sans: `${[
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
      serif: `${['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(',')}`,
      mono: `${['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(',')}`,
    },
    borderWidths: {
      '': '1px',
      '0': '0',
      '2': '2px',
      '4': '4px',
      '8': '8px',
    },
    letterSpacing: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    borderRadius: {
      '': '.25rem;',
      none: '0;',
      sm: '.125rem;',
      lg: '.5rem;',
      full: '9999px',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.375',
      normal: '1.5',
      relaxed: '1.625',
      loose: '2',
    },
    boxShadows: {
      '': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      none: 'none',
    },
    opacity: {
      '0': '0',
      '25': '0.25',
      '50': '0.5',
      '75': '0.75',
      '100': '1',
    },
  },
  screens: {
    sm: (css, { breakpoints }) => `@media (max-width:${breakpoints.sm}) {${css}}`,
    md: (css, { breakpoints }) => `@media (max-width:${breakpoints.md}) {${css}}`,
    lg: (css, { breakpoints }) => `@media (max-width:${breakpoints.lg}) {${css}}`,
    xl: (css, { breakpoints }) => `@media (max-width:${breakpoints.xl}) {${css}}`,
  },
  classnames: {
    display: {
      variants: {
        block: 'block',
        'inline-block': 'inline-block',
        inline: 'inline',
        'inline-flex': 'inline-flex',
        table: 'table',
        'table-row': 'table-row',
        'table-cell': 'table-cell',
        grid: 'grid',
        hidden: 'hidden',
      },
      css: (name, value) => `${name}{display:${value};}`,
    },
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
    tableLayout: {
      variants: {
        auto: 'auto',
        fixed: 'fixed',
      },
      css: (name, value) => `${name}{table-layout:${value};}`,
    },
    position: {
      variants: {
        static: 'static',
        fixed: 'fixed',
        absolute: 'absolute',
        relative: 'relative',
        sticky: 'sticky',
      },
      css: (name, value) => `${name}{position:${value};}`,
    },
    backgroundAttachment: {
      variants: {
        fixed: 'fixed',
        local: 'local',
        scroll: 'scroll',
      },
      css: (name, value) => `${name}{background-attachment:${value};}`,
    },
    backgroundColor: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}{background-color:${value};}`,
    },
    backgroundPosition: {
      variants: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
      },
      css: (name, value) => `${name}{background-position:${value};}`,
    },
    backgroundRepeat: {
      variants: {
        repeat: 'background-repeat:repeat',
        'no-repeat': 'background-repeat:no-repeat',
        'repeat-x': 'background-repeat:repeat-x',
        'repeat-y': 'background-repeat:repeat-y',
        'repeat-round': 'background-repeat:repeat-round',
        'repeat-space': 'background-repeat:repeat-space',
      },
      css: (name, value) => `${name}{background-repeat:${value};}`,
    },
    backgroundSize: {
      variants: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
      },
      css: (name, value) => `${name}{background-size:${value};}`,
    },
    borderRadius: {
      variants: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name}{border-radius:${value};}`,
    },
    borderTopLeftRadius: {
      variants: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name}{border-top-left-radius:${value};}`,
    },
    borderTopRightRadius: {
      variants: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name}{border-top-right-radius:${value};}`,
    },
    borderBottomRightRadius: {
      variants: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name}{border-bottom-right-radius:${value};}`,
    },
    borderBottomLeftRadius: {
      variants: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name}{border-bottom-left-radius:${value};}`,
    },
    borderColor: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}{border-color:${value};}`,
    },
    borderWidth: {
      variants: ({ borderWidths }) => borderWidths,
      css: (name, value) => `${name}{border-width:${value};}`,
    },
    borderTopWidth: {
      variants: ({ borderWidths }) => borderWidths,
      css: (name, value) => `${name}{border-top-width:${value};}`,
    },
    borderRightWidth: {
      variants: ({ borderWidths }) => borderWidths,
      css: (name, value) => `${name}{border-right-width:${value};}`,
    },
    borderBottomWidth: {
      variants: ({ borderWidths }) => borderWidths,
      css: (name, value) => `${name}{border-bottom-width:${value};}`,
    },
    borderLeftWidth: {
      variants: ({ borderWidths }) => borderWidths,
      css: (name, value) => `${name}{border-left-width:${value};}`,
    },
    borderStyle: {
      variants: {
        solid: 'solid',
        dashed: 'dashed',
        dotted: 'dotted',
        double: 'double',
        none: 'none',
      },
      css: (name, value) => `${name}{border-style:${value};}`,
    },
    borderCollapse: {
      variants: {
        '': 'collapse',
        separate: 'separate',
      },
      css: (name, value) => `${name}{border-collapse:${value};}`,
    },
    overflow: {
      variants: {
        auto: 'auto',
        hidden: 'hidden',
        visible: 'visible',
        scroll: 'scroll',
      },
      css: (name, value) => `${name}{overflow:${value};}`,
    },
    overflowX: {
      variants: {
        auto: 'auto',
        hidden: 'hidden',
        visible: 'visible',
        scroll: 'scroll',
      },
      css: (name, value) => `${name}{overflow-x:${value};}`,
    },
    overflowY: {
      variants: {
        auto: 'auto',
        hidden: 'hidden',
        visible: 'visible',
        scroll: 'scroll',
      },
      css: (name, value) => `${name}{overflow-y:${value};}`,
    },
    visibility: {
      variants: {
        visible: 'visible',
        hidden: 'hidden',
      },
      css: (name, value) => `${name}{visibility:${value};}`,
    },
    overflowScrolling: {
      variants: {
        touch: 'touch',
        auto: 'auto',
      },
      css: (name, value) => `${name}{-webkit-overflow-scrolling:${value};}`,
    },
    alignItems: {
      variants: {
        stretch: 'stretch',
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        baseline: 'baseline',
      },
      css: (name, value) => `${name}{align-items:${value};}`,
    },
    boxShadow: {
      variants: ({ boxShadows }) => boxShadows,
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
    userSelect: {
      variants: {
        none: 'none',
        text: 'text',
        all: 'all',
        auto: 'auto',
      },
      css: (name, value) => `${name}{user-select:${value};}`,
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
    fontWeight: {
      variants: {
        hairline: '100',
        thin: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
        bold: '700',
        extrabold: '800',
        black: '900',
      },
      css: (name, value) => `${name}{font-weight:${value};}`,
    },
    fontFamily: {
      variants: ({ fontFamily }) => fontFamily,
      css: (name, value) => `${name}{font-family:${value};}`,
    },
    color: {
      variants: ({ colors }) => colors,
      css: (name, value) => `${name}{color:${value};}`,
    },
    textAlign: {
      variants: {
        left: 'left',
        center: 'center',
        right: 'right',
        justify: 'justify',
      },
      css: (name, value) => `${name}{text-align:${value};}`,
    },
    fontSize: {
      variants: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
      css: (name, value) => `${name}{font-size:${value};}`,
    },
    textDecoration: {
      variants: {
        underline: 'underline',
        'line-through': 'line-through',
        none: 'none',
      },
      css: (name, value) => `${name}{text-decoration:${value};}`,
    },
    fontSmoothing: {
      variants: {
        antialiased: '-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;',
        'subpixel-antialiased': '-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;',
      },
      css: (name, value) => `${name}{${value}}`,
    },
    fontStyle: {
      variants: {
        italic: 'italic',
        normal: 'normal',
      },
      css: (name, value) => `${name}{font-style:${value};}`,
    },
    textTransform: {
      variants: {
        uppercase: 'uppercase',
        lowercase: 'lowercase',
        capitalize: 'capitalize',
        none: 'none',
      },
      css: (name, value) => `${name}{text-transform:${value}}`,
    },
    verticalAlign: {
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
    height: {
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
        full: '100%',
        screen: '100vh',
      }),
      css: (name, value) => `${name}{height:${value};}`,
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
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name}{top:${value};}`,
    },
    overflowWrap: {
      variants: {
        normal: 'normal',
        'break-word': 'break-word',
      },
      css: (name, value) => `${name}{overflow-wrap:${value};}`,
    },
    wordBreak: {
      variants: {
        normal: 'normal',
        'break-all': 'break-all',
      },
      css: (name, value) => `${name}{word-break:${value};}`,
    },
    textOverflow: {
      variants: {
        clip: 'clip',
        ellipsis: 'ellipsis',
      },
      css: (name, value) => `${name}{text-overflow:${value};white-space: nowrap;overflow: hidden;}`,
    },
    right: {
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name}{right:${value};}`,
    },
    left: {
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name}{left:${value};}`,
    },
    bottom: {
      variants: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name}{bottom:${value};}`,
    },
    letterSpacing: {
      variants: ({ letterSpacing }) => letterSpacing,
      css: (name, value) => `${name}{letter-spacing:${value};}`,
    },
    lineHeight: {
      variants: ({ lineHeight }) => lineHeight,
      css: (name, value) => `${name}{line-height:${value};}`,
    },
    listStyleType: {
      variants: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
      },
      css: (name, value) => `${name}{list-style-type:${value};}`,
    },
    listStylePosition: {
      variants: {
        inside: 'inside',
        outside: 'outside',
      },
      css: (name, value) => `${name}{list-style-position:${value};}`,
    },
    float: {
      variants: {
        right: 'right',
        left: 'left',
        none: 'none',
      },
      css: (name, value) => `${name}{float:${value};}`,
    },
    alignContent: {
      variants: {
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        between: 'space-between',
        around: 'space-around',
      },
      css: (name, value) => `${name}{align-content:${value};}`,
    },
    alignSelf: {
      variants: {
        auto: 'auto',
        start: 'flex-start',
        center: 'center',
        end: 'flex-end',
        stretch: 'stretch',
      },
      css: (name, value) => `${name}{align-self:${value};}`,
    },
    justifyContent: {
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
    maxHeight: {
      variants: {
        full: '100%',
        screen: '100vh',
      },
      css: (name, value) => `${name}{max-height:${value};}`,
    },
    maxWidth: {
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
    minHeight: {
      variants: {
        '0': '0',
        full: '100%',
        screen: '100vh',
      },
      css: (name, value) => `${name}{min-height:${value};}`,
    },
    minWidth: {
      variants: {
        '0': '0',
        full: '100%',
      },
      css: (name, value) => `${name}{min-width:${value};}`,
    },
    objectFit: {
      variants: {
        contain: 'contain',
        cover: 'cover',
        fill: 'fill',
        none: 'none',
        'scale-down': 'scale-down',
      },
      css: (name, value) => `${name}{object-fit:${value};}`,
    },
    objectPosition: {
      variants: {
        bottom: 'bottom',
        center: 'center',
        left: 'left',
        'left-bottom': 'left bottom',
        'left-top': 'left top',
        right: 'right',
        'right-bottom': 'right bottom',
        'right-top': 'right top',
        top: 'top',
      },
      css: (name, value) => `${name}{object-position:${value};}`,
    },
    opacity: {
      variants: ({ opacity }) => opacity,
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
    padding: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding:${spacing[key]};`;

          return aggr;
        }, {}),
      css: (name, value) => `${name}{${value}}`,
    },
    paddingTop: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-top:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    paddingRight: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-right:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    paddingBottom: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-bottom:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    paddingLeft: {
      variants: ({ spacing }) =>
        Object.keys(spacing).reduce<IVariants>((aggr, key) => {
          aggr[key] = `padding-left:${spacing[key]};`;

          return aggr;
        }, {}),

      css: (name, value) => `${name}{${value}}`,
    },
    marginTop: {
      variants: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        auto: 'margin-top:auto;',
      }),
      css: (name, value) => `${name}{margin-top:${value};}`,
    },
    marginRight: {
      variants: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        auto: 'margin-right:auto;',
      }),
      css: (name, value) => `${name}{margin-right:${value};}`,
    },
    marginBottom: {
      variants: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        auto: 'margin-bottom:auto;',
      }),
      css: (name, value) => `${name}{margin-bottom:${value};}`,
    },
    marginLeft: {
      variants: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        auto: 'margin-left:auto;',
      }),
      css: (name, value) => `${name}{margin-left:${value};}`,
    },
    stroke: {
      variants: {
        current: 'currentColor',
      },
      css: (name, value) => `${name}{stroke:${value};}`,
    },
    width: {
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
    zIndex: {
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
    screenReaderOnly: name =>
      `${name}{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;}`,
    notScreenReaderOnly: () =>
      `${name}{position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal;}`,
  },
};
