import { IBaseConfig } from '../types';

function describeClassname(prop: string, description: string, showMdnLink: boolean = true) {
  return `### ${prop}\n${description}\n${
    showMdnLink
      ? `[Mozilla Developer Network: ${prop}](https://developer.mozilla.org/en-US/docs/Web/CSS/${prop}).`
      : null
  }`;
}

export const config: IBaseConfig<
  | 'breakpoints'
  | 'spacing'
  | 'colors'
  | 'lineWidths'
  | 'letterSpacing'
  | 'lineHeight'
  | 'borderRadius'
  | 'fontFamily'
  | 'boxShadows'
  | 'opacity'
  | 'durations'
  | 'timingFunctions'
  | 'fontSizes'
  | 'fontStyles'
  | 'gridTemplateColumns'
  | 'gridSpacing'
> = {
  tokens: {
    gridSpacing: {
      AUTO: 'auto',
      SPAN_01: 'span 1',
      SPAN_02: 'span 2',
      SPAN_03: 'span 3',
      SPAN_04: 'span 4',
      SPAN_05: 'span 5',
      SPAN_06: 'span 6',
      SPAN_07: 'span 7',
      SPAN_08: 'span 8',
      SPAN_09: 'span 9',
      SPAN_10: 'span 10',
      SPAN_11: 'span 11',
      SPAN_12: 'span 12',
    },
    gridTemplateColumns: {
      NONE: 'none',
      COLUMNS_01: 'repeat(1, minmax(0, 1fr))',
      COLUMNS_02: 'repeat(2, minmax(0, 1fr))',
      COLUMNS_03: 'repeat(3, minmax(0, 1fr))',
      COLUMNS_04: 'repeat(4, minmax(0, 1fr))',
      COLUMNS_05: 'repeat(5, minmax(0, 1fr))',
      COLUMNS_06: 'repeat(6, minmax(0, 1fr))',
      COLUMNS_07: 'repeat(7, minmax(0, 1fr))',
      COLUMNS_08: 'repeat(8, minmax(0, 1fr))',
      COLUMNS_09: 'repeat(9, minmax(0, 1fr))',
      COLUMNS_10: 'repeat(10, minmax(0, 1fr))',
      COLUMNS11: 'repeat(11, minmax(0, 1fr))',
      COLUMNS12: 'repeat(12, minmax(0, 1fr))',
    },
    breakpoints: {
      SMALL: '640px',
      MEDIUM: '768px',
      LARGE: '1024px',
      EXTRA_LARGE: '1280px',
    },
    fontStyles: {
      NORMAL: 'normal',
      ITALIC: 'italic',
      OBLIQUE: 'oblique',
    },
    spacing: {
      PX: '1px',
      NONE: '0',
      SPACING_01: '0.25rem',
      SPACING_02: '0.5rem',
      SPACING_03: '0.75rem',
      SPACING_04: '1rem',
      SPACING_05: '1.25rem',
      SPACING_06: '1.5rem',
      SPACING_08: '2rem',
      SPACING_10: '2.5rem',
      SPACING_12: '3rem',
      SPACING_16: '4rem',
      SPACING_20: '5rem',
      SPACING_24: '6rem',
      SPACING_32: '8rem',
      SPACING_40: '10rem',
      SPACING_48: '12rem',
      SPACING_56: '14rem',
      SPACING_64: '16rem',
    },
    colors: {
      TRANSPARENT: 'transparent',
      BLACK: '#000',
      WHITE: '#fff',
      GRAY_100: '#f7fafc',
      GRAY_200: '#edf2f7',
      GRAY_300: '#e2e8f0',
      GRAY_400: '#cbd5e0',
      GRAY_500: '#a0aec0',
      GRAY_600: '#718096',
      GRAY_700: '#4a5568',
      GRAY_800: '#2d3748',
      GRAY_900: '#1a202c',
      RED_100: '#fff5f5',
      RED_200: '#fed7d7',
      RED_300: '#feb2b2',
      RED_400: '#fc8181',
      RED_500: '#f56565',
      RED_600: '#e53e3e',
      RED_700: '#c53030',
      RED_800: '#9b2c2c',
      RED_900: '#742a2a',
      ORANGE_100: '#fffaf0',
      ORANGE_200: '#feebc8',
      ORANGE_300: '#fbd38d',
      ORANGE_400: '#f6ad55',
      ORANGE_500: '#ed8936',
      ORANGE_600: '#dd6b20',
      ORANGE_700: '#c05621',
      ORANGE_800: '#9c4221',
      ORANGE_900: '#7b341e',
      YELLOW_100: '#fffff0',
      YELLOW_200: '#fefcbf',
      YELLOW_300: '#faf089',
      YELLOW_400: '#f6e05e',
      YELLOW_500: '#ecc94b',
      YELLOW_600: '#d69e2e',
      YELLOW_700: '#b7791f',
      YELLOW_800: '#975a16',
      YELLOW_900: '#744210',
      GREEN_100: '#f0fff4',
      GREEN_200: '#c6f6d5',
      GREEN_300: '#9ae6b4',
      GREEN_400: '#68d391',
      GREEN_500: '#48bb78',
      GREEN_600: '#38a169',
      GREEN_700: '#2f855a',
      GREEN_800: '#276749',
      GREEN_900: '#22543d',
      TEAL_100: '#e6fffa',
      TEAL_200: '#b2f5ea',
      TEAL_300: '#81e6d9',
      TEAL_400: '#4fd1c5',
      TEAL_500: '#38b2ac',
      TEAL_600: '#319795',
      TEAL_700: '#2c7a7b',
      TEAL_800: '#285e61',
      TEAL_900: '#234e52',
      BLUE_100: '#ebf8ff',
      BLUE_200: '#bee3f8',
      BLUE_300: '#90cdf4',
      BLUE_400: '#63b3ed',
      BLUE_500: '#4299e1',
      BLUE_600: '#3182ce',
      BLUE_700: '#2b6cb0',
      BLUE_800: '#2c5282',
      BLUE_900: '#2a4365',
      INDIGO_100: '#ebf4ff',
      INDIGO_200: '#c3dafe',
      INDIGO_300: '#a3bffa',
      INDIGO_400: '#7f9cf5',
      INDIGO_500: '#667eea',
      INDIGO_600: '#5a67d8',
      INDIGO_700: '#4c51bf',
      INDIGO_800: '#434190',
      INDIGO_900: '#3c366b',
      PURPLE_100: '#faf5ff',
      PURPLE_200: '#e9d8fd',
      PURPLE_300: '#d6bcfa',
      PURPLE_400: '#b794f4',
      PURPLE_500: '#9f7aea',
      PURPLE_600: '#805ad5',
      PURPLE_700: '#6b46c1',
      PURPLE_800: '#553c9a',
      PURPLE_900: '#44337a',
      PINK_100: '#fff5f7',
      PINK_200: '#fed7e2',
      PINK_300: '#fbb6ce',
      PINK_400: '#f687b3',
      PINK_500: '#ed64a6',
      PINK_600: '#d53f8c',
      PINK_700: '#b83280',
      PINK_800: '#97266d',
      PINK_900: '#702459',
    },
    fontFamily: {
      SANS: `${[
        'Inter',
        'apple-system',
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
      SERIF: `${['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'].join(',')}`,
      MONO: `${['Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'].join(',')}`,
    },
    lineWidths: {
      NONE: '0',
      WIDTH_1: '1px',
      WIDTH_2: '2px',
      WIDTH_4: '4px',
      WIDTH_8: '8px',
    },
    letterSpacing: {
      TIGHTER: '-0.05em',
      TIGHT: '-0.025em',
      NORMAL: '0',
      WIDE: '0.025em',
      WIDER: '0.05em',
      WIDEST: '0.1em',
    },
    borderRadius: {
      NONE: '0',
      SMALL: '.125rem',
      MEDIUM: '.25rem',
      LARGE: '.5rem',
      FULL: '9999px',
    },
    lineHeight: {
      NONE: '1',
      TIGHT: '1.25',
      SNUG: '1.375',
      NORMAL: '1.5',
      RELAXED: '1.625',
      LOOSE: '2',
    },
    boxShadows: {
      EXTRA_SMALL: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      SMALL: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      MEDIUM: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      LARGE: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      EXTRA_LARGE: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      EXTRA_LARGE_2: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      EXTRA_LARGE_3: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
      INNER: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      OUTLINE: '0 0 0 3px rgba(66, 153, 225, 0.5)',
      NONE: 'none',
    },
    opacity: {
      NONE: '0',
      OPACITY_25: '0.25',
      OPACITY_50: '0.5',
      OPACITY_75: '0.75',
      FULL: '1',
    },
    durations: {
      MS_75: '75ms',
      MS_100: '100ms',
      MS_150: '150ms',
      MS_200: '200ms',
      MS_300: '300ms',
      MS_500: '500ms',
      MS_700: '700ms',
      MS_1000: '1000ms',
    },
    timingFunctions: {
      LINEAR: 'linear',
      IN: 'cubic-bezier(0.4, 0, 1, 1)',
      OUT: 'cubic-bezier(0, 0, 0.2, 1)',
      IN_OUT: 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    fontSizes: {
      EXTRA_SMALL: '0.75rem',
      SMALL: '0.875rem',
      BASE: '1rem',
      LARGE: '1.125rem',
      EXTRA_LARGE: '1.25rem',
      EXTRA_LARGE_2: '1.5rem',
      EXTRA_LARGE_3: '1.875rem',
      EXTRA_LARGE_4: '2.25rem',
      EXTRA_LARGE_5: '3rem',
      EXTRA_LARGE_6: '4rem',
    },
  },
  screens: {
    sm: (css, { breakpoints }) => `@media (max-width: ${breakpoints.SMALL}) {${css}}`,
    md: (css, { breakpoints }) => `@media (max-width: ${breakpoints.MEDIUM}) {${css}}`,
    lg: (css, { breakpoints }) => `@media (max-width: ${breakpoints.LARGE}) {${css}}`,
    xl: (css, { breakpoints }) => `@media (max-width: ${breakpoints.EXTRA_LARGE}) {${css}}`,
  },
  classnames: {
    boxSizing: {
      tokens: {
        CONTENT_BOX: 'content-box',
        BORDER_BOX: 'border-box',
      },
      css: (name, value) => `${name} {\n  box-sizing: ${value};\n}`,
      description: describeClassname('box-sizing', 'Sets how the total width and height of an element is calculated.'),
    },
    display: {
      tokens: {
        BLOCK: 'block',
        INLINE_BLOCK: 'inline-block',
        INLINE: 'inline',
        INLINE_FLEX: 'inline-flex',
        TABLE: 'table',
        TABLE_ROW: 'table-row',
        TABLE_CELL: 'table-cell',
        GRID: 'grid',
        FLEX: 'flex',
        HIDDEN: 'none',
      },
      css: (name, value) => `${name} {\n  display: ${value};\n}`,
      description: describeClassname(
        'display',
        'The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.',
      ),
    },
    tableLayout: {
      tokens: {
        AUTO: 'auto',
        FIXED: 'fixed',
      },
      css: (name, value) => `${name} {\n  table-layout: ${value};\n}`,
      description: describeClassname(
        'table-layout',
        'The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.',
      ),
    },
    position: {
      tokens: {
        STATIC: 'static',
        FIXED: 'fixed',
        ABSOLUTE: 'absolute',
        RELATIVE: 'relative',
        STICKY: 'sticky',
      },
      css: (name, value) => `${name} {\n  position: ${value};\n}`,
      description: describeClassname(
        'position',
        'The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.',
      ),
    },
    backgroundAttachment: {
      tokens: {
        FIXED: 'fixed',
        LOCAL: 'local',
        SCROLL: 'scroll',
      },
      css: (name, value) => `${name} {\n  background-attachment: ${value};\n}`,
      description: describeClassname(
        'background-attachment',
        "The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.",
      ),
    },
    backgroundColor: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  background-color: ${value};\n}`,
      description: describeClassname(
        'background-color',
        'The background-color CSS property sets the background color of an element.',
      ),
    },
    backgroundPosition: {
      tokens: {
        BOTTOM: 'bottom',
        CENTER: 'center',
        LEFT: 'left',
        LEFT_BOTTOM: 'left bottom',
        LEFT_TOP: 'left top',
        RIGHT: 'right',
        RIGHT_BOTTOM: 'right bottom',
        RIGHT_TOP: 'right top',
        TOP: 'top',
      },
      css: (name, value) => `${name} {\n  background-position: ${value};\n}`,
      description: describeClassname(
        'background-position',
        'The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.',
      ),
    },
    backgroundRepeat: {
      tokens: {
        REPEAT: 'background-repeat:repeat',
        NO_REPEAT: 'background-repeat:no-repeat',
        REPEAT_X: 'background-repeat:repeat-x',
        REPEAT_Y: 'background-repeat:repeat-y',
        REPEAT_ROUND: 'background-repeat:repeat-round',
        REPEAT_SPACE: 'background-repeat:repeat-space',
      },
      css: (name, value) => `${name} {\n  background-repeat: ${value};\n}`,
      description: describeClassname(
        'background-repeat',
        'The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.',
      ),
    },
    backgroundSize: {
      tokens: {
        AUTO: 'auto',
        COVER: 'cover',
        CONTAIN: 'contain',
      },
      css: (name, value) => `${name} {\n  background-size: ${value};\n}`,
      description: describeClassname(
        'background-size',
        "The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.",
      ),
    },
    borderRadius: {
      tokens: ({ borderRadius }) => borderRadius,
      css: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
      description: describeClassname(
        'border-radius',
        "The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.",
      ),
    },
    borderTopLeftRadius: {
      tokens: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name} {\n  border-top-left-radius: ${value};\n}`,
      description: describeClassname(
        'border-top-left-radius',
        'The border-top-left-radius CSS property rounds the top-left corner of an element.',
      ),
    },
    borderTopRightRadius: {
      tokens: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name} {\n  border-top-right-radius: ${value};\n}`,
      description: describeClassname(
        'border-top-right-radius',
        'The border-top-right-radius CSS property rounds the top-right corner of an element.',
      ),
    },
    borderBottomRightRadius: {
      tokens: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name} {\n  border-bottom-right-radius: ${value};\n}`,
      description: describeClassname(
        'border-bottom-right-radius',
        'The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.',
      ),
    },
    borderBottomLeftRadius: {
      tokens: ({ borderRadius }) => borderRadius,
      css: (name, value) => `${name} {\n  border-bottom-left-radius: ${value};\n}`,
      description: describeClassname(
        'border-bottom-left-radius',
        'The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.',
      ),
    },
    borderColor: {
      tokens: ({ colors }) => colors,
      css: ['borderTopColor', 'borderRightColor', 'borderBottomColor', 'borderLeftColor'],
      description: describeClassname(
        'border-color',
        "The border-color shorthand CSS property sets the color of an element's border.",
      ),
    },
    borderTopColor: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  border-top-color: ${value};\n}`,
      description: describeClassname(
        'border-top-color',
        "The border-top-color CSS property sets the color of an element's top border. ",
      ),
    },
    borderRightColor: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  border-right-color: ${value};\n}`,
      description: describeClassname(
        'border-right-color',
        "The border-right-color CSS property sets the color of an element's right border. ",
      ),
    },
    borderBottomColor: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  border-bottom-color: ${value};\n}`,
      description: describeClassname(
        'border-bottom-color',
        "The border-bottom-color CSS property sets the color of an element's bottom border. ",
      ),
    },
    borderLeftColor: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  border-left-color: ${value};\n}`,
      description: describeClassname(
        'border-left-color',
        "The border-left-color CSS property sets the color of an element's left border.",
      ),
    },
    borderWidth: {
      tokens: ({ lineWidths }) => lineWidths,
      css: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
      description: describeClassname(
        'border-width',
        "The border-width shorthand CSS property sets the width of an element's border.",
      ),
    },
    borderTopWidth: {
      tokens: ({ lineWidths }) => lineWidths,
      css: (name, value) => `${name} {\n  border-top-width: ${value};\n}`,
      description: describeClassname(
        'border-top-width',
        'The border-top-width CSS property sets the width of the top border of an element.',
      ),
    },
    borderRightWidth: {
      tokens: ({ lineWidths }) => lineWidths,
      css: (name, value) => `${name} {\n  border-right-width: ${value};\n}`,
      description: describeClassname(
        'border-right-width',
        'The border-right-width CSS property sets the width of the right border of an element.',
      ),
    },
    borderBottomWidth: {
      tokens: ({ lineWidths }) => lineWidths,
      css: (name, value) => `${name} {\n  border-bottom-width: ${value};\n}`,
      description: describeClassname(
        'border-bottom-width',
        'The border-bottom-width CSS property sets the width of the bottom border of an element.',
      ),
    },
    borderLeftWidth: {
      tokens: ({ lineWidths }) => lineWidths,
      css: (name, value) => `${name} {\n  border-left-width: ${value};\n}`,
      description: describeClassname(
        'border-left-width',
        'The border-left-width CSS property sets the width of the left border of an element.',
      ),
    },
    borderStyle: {
      tokens: {
        SOLID: 'solid',
        DASHED: 'dashed',
        DOTTED: 'dotted',
        DOUBLE: 'double',
        NONE: 'none',
      },
      css: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
      description: describeClassname(
        'border-style',
        "The border-style shorthand CSS property sets the line style for all four sides of an element's border.",
      ),
    },
    borderTopStyle: {
      tokens: {
        SOLID: 'solid',
        DASHED: 'dashed',
        DOTTED: 'dotted',
        DOUBLE: 'double',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  border-top-style: ${value};\n}`,
      description: describeClassname(
        'border-top-style',
        "The border-top-style CSS property sets the line style of an element's top border.",
      ),
    },
    borderRightStyle: {
      tokens: {
        SOLID: 'solid',
        DASHED: 'dashed',
        DOTTED: 'dotted',
        DOUBLE: 'double',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  border-right-style: ${value};\n}`,
      description: describeClassname(
        'border-right-style',
        "The border-right-style CSS property sets the line style of an element's right border.",
      ),
    },
    borderBottomStyle: {
      tokens: {
        SOLID: 'solid',
        DASHED: 'dashed',
        DOTTED: 'dotted',
        DOUBLE: 'double',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  border-bottom-style: ${value};\n}`,
      description: describeClassname(
        'border-bottom-style',
        "The border-bottom-style CSS property sets the line style of an element's bottom border.",
      ),
    },
    borderLeftStyle: {
      tokens: {
        SOLID: 'solid',
        DASHED: 'dashed',
        DOTTED: 'dotted',
        DOUBLE: 'double',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  border-left-style: ${value};\n}`,
      description: describeClassname(
        'border-left-style',
        "The border-left-style CSS property sets the line style of an element's left border.",
      ),
    },
    borderCollapse: {
      tokens: {
        COLLAPSE: 'collapse',
        SEPARATE: 'separate',
      },
      css: (name, value) => `${name} {\n  border-collapse: ${value};\n}`,
      description: describeClassname(
        'border-collapse',
        'The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.',
      ),
    },
    overflow: {
      tokens: {
        AUTO: 'auto',
        HIDDEN: 'hidden',
        VISIBLE: 'visible',
        SCROLL: 'scroll',
      },
      css: ['overflowX', 'overflowY'],
      description: describeClassname(
        'overflow',
        "The overflow shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context.",
      ),
    },
    overflowX: {
      tokens: {
        AUTO: 'auto',
        HIDDEN: 'hidden',
        VISIBLE: 'visible',
        SCROLL: 'scroll',
      },
      css: (name, value) => `${name} {\n  overflow-x: ${value};\n}`,
      description: describeClassname(
        'overflow-x',
        "The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.",
      ),
    },
    overflowY: {
      tokens: {
        AUTO: 'auto',
        HIDDEN: 'hidden',
        VISIBLE: 'visible',
        SCROLL: 'scroll',
      },
      css: (name, value) => `${name} {\n  overflow-y: ${value};\n}`,
      description: describeClassname(
        'overflow-y',
        "The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.",
      ),
    },
    visibility: {
      tokens: {
        VISIBLE: 'visible',
        HIDDEN: 'hidden',
      },
      css: (name, value) => `${name} {\n  visibility: ${value};\n}`,
      description: describeClassname(
        'visibility',
        'The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.',
      ),
    },
    overflowScrolling: {
      tokens: {
        TOUCH: 'touch',
        AUTO: 'auto',
      },
      css: (name, value) => `${name} {\n  -webkit-overflow-scrolling: ${value};\n}`,
      description: describeClassname(
        '-webkit-overflow-scrolling',
        'The -webkit-overflow-scrolling CSS property controls whether or not touch devices use momentum-based scrolling for a given element.',
      ),
    },
    alignItems: {
      tokens: {
        STRETCH: 'stretch',
        START: 'flex-start',
        CENTER: 'center',
        END: 'flex-end',
        BASELINE: 'baseline',
      },
      css: (name, value) => `${name} {\n  align-items: ${value};\n}`,
      description: describeClassname(
        'align-items',
        'The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.',
      ),
    },
    flexDirection: {
      tokens: {
        ROW: 'row',
        ROW_REVERSE: 'row-reverse',
        COLUMN: 'column',
        COLUMN_REVERSE: 'column-reverse',
      },
      css: (name, value) => `${name} {\n  flex-direction: ${value};\n}`,
      description: describeClassname(
        'flex-direction',
        'The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).',
      ),
    },
    boxShadow: {
      tokens: ({ boxShadows }) => boxShadows,
      css: (name, value) => `${name} {\n  box-shadow: ${value};\n}`,
      description: describeClassname(
        'box-shadow',
        "The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.",
      ),
    },
    outline: {
      tokens: {
        NONE: '0',
      },
      css: (name, value) => `${name} {\n  outline: ${value};\n}`,
      description: describeClassname(
        'outline',
        'The outline CSS property is a shorthand to set various outline properties in a single declaration: outline-style, outline-width, and outline-color.',
      ),
    },
    pointerEvents: {
      tokens: {
        NONE: 'none',
        AUTO: 'auto',
      },
      css: (name, value) => `${name} {\n  pointer-events: ${value}}`,
      description: describeClassname(
        'pointer-events',
        'The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.',
      ),
    },
    resize: {
      tokens: {
        BOTH: 'both',
        NONE: 'none',
        VERTICAL: 'vertical',
        HORIZONTAL: 'horizontal',
      },
      css: (name, value) => `${name} {\n  resize: ${value};\n}`,
      description: describeClassname(
        'resize',
        'The resize CSS property sets whether an element is resizable, and if so, in which directions.',
      ),
    },
    userSelect: {
      tokens: {
        NONE: 'none',
        TEXT: 'text',
        ALL: 'all',
        AUTO: 'auto',
      },
      css: (name, value) => `${name} {\n  user-select: ${value};\n}`,
      description: describeClassname(
        'user-select',
        "The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.",
      ),
    },
    cursor: {
      tokens: {
        AUTO: 'auto',
        DEFAULT: 'default',
        POINTER: 'pointer',
        WAIT: 'wait',
        TEXT: 'text',
        MOVE: 'move',
        NOT_ALLOWED: 'not-allowed',
      },
      css: (name, value) => `${name} {\n  cursor: ${value};\n}`,
      description: describeClassname(
        'cursor',
        'The cursor CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.',
      ),
    },
    fill: {
      tokens: {
        CURRENT: 'currentColor',
      },
      css: (name, value) => `${name} {\n  fill: ${value};\n}`,
      description: describeClassname(
        'fill',
        "The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.",
      ),
    },
    appearance: {
      tokens: {
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  appearance: ${value};\n}`,
      description: describeClassname(
        'appearance',
        "The appearance CSS property is used to display an element using platform-native styling based on the operating system's theme.",
      ),
    },
    fontWeight: {
      tokens: {
        HAIRLINE: '100',
        THIN: '200',
        LIGHT: '300',
        NORMAL: '400',
        MEDIUM: '500',
        SEMIBOLD: '600',
        BOLD: '700',
        EXTRABOLD: '800',
        BLACK: '900',
      },
      css: (name, value) => `${name} {\n  font-weight: ${value};\n}`,
      description: describeClassname(
        'font-weight',
        'The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.',
      ),
    },
    fontFamily: {
      tokens: ({ fontFamily }) => fontFamily,
      css: (name, value) => `${name} {\n  font-family: ${value};\n}`,
      description: describeClassname(
        'font-family',
        'The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.',
      ),
    },
    color: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  color: ${value};\n}`,
      description: describeClassname(
        'color',
        "Sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.",
      ),
    },
    textAlign: {
      tokens: {
        LEFT: 'left',
        CENTER: 'center',
        RIGHT: 'right',
        JUSTIFY: 'justify',
      },
      css: (name, value) => `${name} {\n  text-align: ${value};\n}`,
      description: describeClassname(
        'text-align',
        'The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.',
      ),
    },
    fontSize: {
      tokens: ({ fontSizes }) => fontSizes,
      css: (name, value) => `${name} {\n  font-size: ${value};\n}`,
      description: describeClassname(
        'font-size',
        'The font-size CSS property sets the size of the font. This property is also used to compute the size of em, ex, and other relative <length> units.',
      ),
    },
    textDecorationLine: {
      tokens: {
        UNDERLINE: 'underline',
        LINE_THROUGH: 'line-through',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  text-decoration-line: ${value};\n}`,
      description: describeClassname(
        'text-decoration-line',
        'The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.',
      ),
    },
    textDecorationColor: {
      tokens: ({ colors }) => colors,
      css: (name, value) => `${name} {\n  text-decoration-color: ${value};\n}`,
      description: describeClassname(
        'text-decoration-color',
        'The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.',
      ),
    },
    textDecorationStyle: {
      tokens: {
        SOLID: 'solid',
        DOUBLE: 'double',
        DOTTED: 'dotted',
        DASHED: 'dashed',
        WAVY: 'wavy',
      },
      css: (name, value) => `${name} {\n  text-decoration-style: ${value};\n}`,
      description: describeClassname(
        'text-decoration-style',
        'The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.',
      ),
    },
    textDecorationThickness: {
      tokens: ({ lineWidths }) => ({
        ...lineWidths,
        AUTO: 'auto',
        FROM_FONT: 'from-font',
      }),
      css: (name, value) => `${name} {\n  text-decoration-thickness: ${value};\n}`,
      description: describeClassname(
        'text-decoration-thickness',
        'The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.',
      ),
    },
    fontSmoothing: {
      tokens: {
        ANTIALIASED: '-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;',
        SUBPIXEL_ANTIALIASED: '-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;',
      },
      css: (name, value) => `${name} {\n  ${value}\n}`,
      description: describeClassname(
        '-webkit-font-smoothing',
        'The font-smooth CSS property controls the application of anti-aliasing when fonts are rendered.',
      ),
    },
    fontStyle: {
      tokens: ({ fontStyles }) => fontStyles,
      css: (name, value) => `${name} {\n  font-style: ${value};\n}`,
      description: describeClassname(
        'font-style',
        'The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.',
      ),
    },
    textTransform: {
      tokens: {
        UPPERCASE: 'uppercase',
        LOWERCASE: 'lowercase',
        CAPITALIZE: 'capitalize',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  text-transform: ${value}}`,
      description: describeClassname(
        'text-transform',
        "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.",
      ),
    },
    verticalAlign: {
      tokens: {
        BASELINE: 'baseline',
        TOP: 'top',
        MIDDLE: 'middle',
        BOTTOM: 'bottom',
        TEXT_TOP: 'text-top',
        TEXT_BOTTOM: 'text-bottom',
      },
      css: (name, value) => `${name} {\n  vertical-align: ${value};\n}`,
      description: describeClassname(
        'vertical-align',
        'The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.',
      ),
    },
    height: {
      tokens: ({ spacing }) => ({
        AUTO: 'auto',
        ...spacing,
        FULL: '100%',
        SCREEN: '100vh',
      }),
      css: (name, value) => `${name} {\n  height: ${value};\n}`,
      description: describeClassname(
        'height',
        'The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.',
      ),
    },
    whitespace: {
      tokens: {
        NORMAL: 'normal',
        NO_WRAP: 'nowrap',
        PRE: 'pre',
        PRE_LINE: 'pre-line',
        PRE_WRAP: 'pre-wrap',
      },
      css: (name, value) => `${name} {\n  white-space: ${value};\n}`,
      description: describeClassname(
        'white-space',
        'The white-space CSS property sets how white space inside an element is handled.',
      ),
    },
    top: {
      tokens: ({ spacing }) => ({
        AUTO: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name} {\n  top: ${value};\n}`,
      description: describeClassname(
        'top',
        'The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.',
      ),
    },
    overflowWrap: {
      tokens: {
        NORMAL: 'normal',
        BREAK_WORD: 'break-word',
      },
      css: (name, value) => `${name} {\n  overflow-wrap: ${value};\n}`,
      description: describeClassname(
        'overflow-wrap',
        'The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.',
      ),
    },
    wordBreak: {
      tokens: {
        NORMAL: 'normal',
        BREAK_ALL: 'break-all',
      },
      css: (name, value) => `${name} {\n  word-break: ${value};\n}`,
      description: describeClassname(
        'word-break',
        'The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.',
      ),
    },
    textOverflow: {
      tokens: {
        CLIP: 'clip',
        ELLIPSIS: 'ellipsis',
      },
      css: (name, value) => `${name} {\n  text-overflow: ${value};white-space: nowrap;overflow: hidden;\n}`,
      description: describeClassname(
        'text-overflow',
        "The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped or display an ellipsis ('…').",
      ),
    },
    right: {
      tokens: ({ spacing }) => ({
        AUTO: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name} {\n  right: ${value};\n}`,
      description: describeClassname(
        'right',
        'The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.',
      ),
    },
    left: {
      tokens: ({ spacing }) => ({
        AUTO: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name} {\n  left: ${value};\n}`,
      description: describeClassname(
        'left',
        'The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.',
      ),
    },
    bottom: {
      tokens: ({ spacing }) => ({
        AUTO: 'auto',
        ...spacing,
      }),
      css: (name, value) => `${name} {\n  bottom: ${value};\n}`,
      description: describeClassname(
        'bottom',
        'The bottom CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.',
      ),
    },
    letterSpacing: {
      tokens: ({ letterSpacing }) => letterSpacing,
      css: (name, value) => `${name} {\n  letter-spacing: ${value};\n}`,
      description: describeClassname(
        'letter-spacing',
        'The letter-spacing CSS property sets the spacing behavior between text characters.',
      ),
    },
    lineHeight: {
      tokens: ({ lineHeight }) => lineHeight,
      css: (name, value) => `${name} {\n  line-height: ${value};\n}`,
      description: describeClassname(
        'letter-height',
        "The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.",
      ),
    },
    listStyleType: {
      tokens: {
        NONE: 'none',
        DISC: 'disc',
        DECIMAL: 'decimal',
      },
      css: (name, value) => `${name} {\n  list-style-type: ${value};\n}`,
      description: describeClassname(
        'list-style-type',
        'The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.',
      ),
    },
    listStylePosition: {
      tokens: {
        INSIDE: 'inside',
        OUTSIDE: 'outside',
      },
      css: (name, value) => `${name} {\n  list-style-position: ${value};\n}`,
      description: describeClassname(
        'list-style-position',
        'The list-style-position CSS property sets the position of the ::marker relative to a list item.',
      ),
    },
    float: {
      tokens: {
        RIGHT: 'right',
        LEFT: 'left',
        NONE: 'none',
      },
      css: (name, value) => `${name} {\n  float: ${value};\n}`,
      description: describeClassname(
        'float',
        'The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).',
      ),
    },
    alignContent: {
      tokens: {
        START: 'flex-start',
        CENTER: 'center',
        END: 'flex-end',
        BETWEEN: 'space-between',
        AROUND: 'space-around',
      },
      css: (name, value) => `${name} {\n  align-content: ${value};\n}`,
      description: describeClassname(
        'align-content',
        "The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
      ),
    },
    alignSelf: {
      tokens: {
        AUTO: 'auto',
        START: 'flex-start',
        CENTER: 'center',
        END: 'flex-end',
        STRETCH: 'stretch',
      },
      css: (name, value) => `${name} {\n  align-self: ${value};\n}`,
      description: describeClassname(
        'align-self',
        "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.",
      ),
    },
    justifyContent: {
      tokens: {
        START: 'flex-start',
        CENTER: 'center',
        END: 'flex-end',
        BETWEEN: 'space-between',
        AROUND: 'space-around',
      },
      css: (name, value) => `${name} {\n  justify-content: ${value};\n}`,
      description: describeClassname(
        'justify-content',
        'The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.',
      ),
    },
    margin: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto',
      }),
      css: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
      description: describeClassname(
        'margin',
        'The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.',
      ),
    },
    marginVertical: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto',
      }),
      css: ['marginTop', 'marginBottom'],
      description: describeClassname(
        'margin-vertical (Classy-UI)',
        'The margin CSS property sets the margin area on vertical sides of an element. It is a shorthand for margin-top and margin-bottom.',
        false,
      ),
    },
    marginHorizontal: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto',
      }),
      css: ['marginLeft', 'marginRight'],
      description: describeClassname(
        'margin-horizontal (Classy-UI)',
        'The margin CSS property sets the margin area on horizontal sides of an element. It is a shorthand for margin-left and margin-right.',
        false,
      ),
    },
    maxHeight: {
      tokens: {
        FULL: '100%',
        SCREEN: '100vh',
      },
      css: (name, value) => `${name} {\n  max-height: ${value};\n}`,
      description: describeClassname(
        'max-height',
        'The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.',
      ),
    },
    maxWidth: {
      tokens: {
        NONE: 'none',
        WIDTH_01: '20rem',
        WIDTH_02: '24rem',
        WIDTH_03: '28rem',
        WIDTH_04: '32rem',
        WIDTH_05: '36rem',
        WIDTH_06: '42rem',
        WIDTH_07: '48rem',
        WIDTH_08: '56rem',
        WIDTH_09: '64rem',
        WIDTH_10: '72rem',
        FULL: '100%',
      },
      css: (name, value) => `${name} {\n  max-width: ${value};\n}`,
      description: describeClassname(
        'max-width',
        'The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.',
      ),
    },
    minHeight: {
      tokens: {
        NONE: '0',
        FULL: '100%',
        SCREEN: '100vh',
      },
      css: (name, value) => `${name} {\n  min-height: ${value};\n}`,
      description: describeClassname(
        'min-height',
        'The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.',
      ),
    },
    minWidth: {
      tokens: {
        NONE: '0',
        FULL: '100%',
      },
      css: (name, value) => `${name} {\n  min-width: ${value};\n}`,
      description: describeClassname(
        'min-width',
        'The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.',
      ),
    },
    objectFit: {
      tokens: {
        CONTAIN: 'contain',
        COVER: 'cover',
        FILL: 'fill',
        NONE: 'none',
        SCALE_DOWN: 'scale-down',
      },
      css: (name, value) => `${name} {\n  object-fit: ${value};\n}`,
      description: describeClassname(
        'object-fit',
        'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.',
      ),
    },
    objectPosition: {
      tokens: {
        BOTTOM: 'bottom',
        CENTER: 'center',
        LEFT: 'left',
        LEFT_BOTTOM: 'left bottom',
        LEFT_TOP: 'left top',
        RIGHT: 'right',
        RIGHT_BOTTOM: 'right bottom',
        RIGHT_TOP: 'right top',
        TOP: 'top',
      },
      css: (name, value) => `${name} {\n  object-position: ${value};\n}`,
      description: describeClassname(
        'object-position',
        "The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.",
      ),
    },
    opacity: {
      tokens: ({ opacity }) => opacity,
      css: (name, value) => `${name} {\n  opacity: ${value};\n}`,
      description: describeClassname(
        'opacity',
        'The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.',
      ),
    },
    order: {
      tokens: {
        FIRST: '-9999',
        LAST: '9999',
        NONE: '0',
        ORDER_01: '1',
        ORDER_02: '2',
        ORDER_03: '3',
        ORDER_04: '4',
        ORDER_05: '5',
        ORDER_06: '6',
        ORDER_07: '7',
        ORDER_08: '8',
        ORDER_09: '9',
        ORDER_10: '10',
        ORDER_11: '11',
        ORDER_12: '12',
      },
      css: (name, value) => `${name} {\n  order: ${value};\n}`,
      description: describeClassname(
        'order',
        'The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.',
      ),
    },
    padding: {
      tokens: ({ spacing }) => spacing,
      css: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
      description: describeClassname(
        'padding',
        'The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.',
      ),
    },
    paddingVertical: {
      tokens: ({ spacing }) => spacing,
      css: ['paddingTop', 'paddingBottom'],
      description: describeClassname(
        'padding-vertical (Classy-UI)',
        'The padding CSS property sets the padding area on the vertical sides of an element. It is a shorthand for padding-top and padding-bottom.',
        false,
      ),
    },
    paddingHorizontal: {
      tokens: ({ spacing }) => spacing,
      css: ['paddingLeft', 'paddingRight'],
      description: describeClassname(
        'padding-horizontal (Classy-UI)',
        'The padding CSS property sets the padding area on the horizontal sides of an element. It is a shorthand for padding-left and padding-right.',
        false,
      ),
    },
    paddingTop: {
      tokens: ({ spacing }) => spacing,
      css: (name, value) => `${name} {\n  padding-top: ${value};\n}`,
      description: describeClassname(
        'padding-top',
        'The padding-top CSS property sets the height of the padding area on the top of an element.',
      ),
    },
    paddingRight: {
      tokens: ({ spacing }) => spacing,
      css: (name, value) => `${name} {\n  padding-right: ${value};\n}`,
      description: describeClassname(
        'padding-right',
        'The padding-right CSS property sets the width of the padding area on the right of an element.',
      ),
    },
    paddingBottom: {
      tokens: ({ spacing }) => spacing,
      css: (name, value) => `${name} {\n  padding-bottom: ${value};\n}`,
      description: describeClassname(
        'padding-bottom',
        'The padding-bottom CSS property sets the height of the padding area on the bottom of an element.',
      ),
    },
    paddingLeft: {
      tokens: ({ spacing }) => spacing,
      css: (name, value) => `${name} {\n  padding-left: ${value};\n}`,
      description: describeClassname(
        'padding-left',
        'The padding-left CSS property sets the width of the padding area on the left of an element.',
      ),
    },
    marginTop: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto;',
      }),
      css: (name, value) => `${name} {\n  margin-top: ${value};\n}`,
      description: describeClassname(
        'margin-top',
        'The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
      ),
    },
    marginRight: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto;',
      }),
      css: (name, value) => `${name} {\n  margin-right: ${value};\n}`,
      description: describeClassname(
        'margin-right',
        'The margin-right CSS property sets the margin area on the right of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
      ),
    },
    marginBottom: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto;',
      }),
      css: (name, value) => `${name} {\n  margin-bottom: ${value};\n}`,
      description: describeClassname(
        'margin-bottom',
        'The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
      ),
    },
    marginLeft: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        AUTO: 'auto;',
      }),
      css: (name, value) => `${name} {\n  margin-left: ${value};\n}`,
      description: describeClassname(
        'margin-left',
        'The margin-left CSS property sets the margin area on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
      ),
    },
    stroke: {
      tokens: {
        CURRENT: 'currentColor',
      },
      css: (name, value) => `${name} {\n  stroke: ${value};\n}`,
      description: describeClassname(
        'stroke',
        'The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.',
      ),
    },
    width: {
      tokens: ({ spacing }) => ({
        auto: 'auto',
        ...spacing,
        WIDTH_1_2: '50%',
        WIDTH_1_3: '33.333333%',
        WIDTH_2_3: '66.666667%',
        WIDTH_1_4: '25%',
        WIDTH_2_4: '50%',
        WIDTH_3_4: '75%',
        WIDTH_1_5: '20%',
        WIDTH_2_5: '40%',
        WIDTH_3_5: '60%',
        WIDTH_4_5: '80%',
        WIDTH_1_6: '16.666667%',
        WIDTH_2_6: '33.333333%',
        WIDTH_3_6: '50%',
        WIDTH_4_6: '66.666667%',
        WIDTH_5_6: '83.333333%',
        WIDTH_1_12: '8.333333%',
        WIDTH_2_12: '16.666667%',
        WIDTH_3_12: '25%',
        WIDTH_4_12: '33.333333%',
        WIDTH_5_12: '41.666667%',
        WIDTH_6_12: '50%',
        WIDTH_7_12: '58.333333%',
        WIDTH_8_12: '66.666667%',
        WIDTH_9_12: '75%',
        WIDTH_10_12: '83.333333%',
        WIDTH_11_12: '91.666667%',
        FULL: '100%',
        SCREEN: '100vw',
      }),
      css: (name, value) => `${name} {\n  width: ${value};\n}`,
      description: describeClassname(
        'width',
        'The width attribute defines the horizontal length of an element in the user coordinate system.',
      ),
    },
    zIndex: {
      tokens: {
        AUTO: 'auto',
        NONE: '0',
        Z_10: '10',
        Z_20: '20',
        Z_30: '30',
        Z_40: '40',
        Z_50: '50',
      },
      css: (name, value) => `${name} {\n  z-index: ${value};\n}`,
      description: describeClassname(
        'z-index',
        'The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.',
      ),
    },
    gap: {
      tokens: ({ spacing }) => spacing,
      css: ['rowGap', 'columnGap'],
      description: describeClassname(
        'gap',
        'The gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.',
      ),
    },
    rowGap: {
      tokens: ({ spacing }) => spacing,
      css: (name, value) => `${name} {\n  row-gap: ${value};\n}`,
      description: describeClassname(
        'row-gap',
        "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.",
      ),
    },
    columnGap: {
      tokens: ({ spacing }) => spacing,
      css: (name, value) => `${name} {\n  column-gap: ${value};\n}`,
      description: describeClassname(
        'column-gap',
        "The column-gap CSS property sets the size of the gap (gutter) between an element's grid columns.",
      ),
    },
    gridTemplateColumns: {
      tokens: ({ gridTemplateColumns }) => gridTemplateColumns,
      css: (name, value) => `${name} {\n  grid-template-columns: ${value};\n}`,
      description: describeClassname(
        'grid-template-columns',
        'The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.',
      ),
    },
    gridColumn: {
      tokens: ({ gridSpacing }) => gridSpacing,
      css: ['gridColumnStart', 'gridColumnEnd'],
      description: describeClassname(
        'grid-column',
        "The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
      ),
    },
    gridColumnStart: {
      tokens: ({ gridSpacing }) => gridSpacing,
      css: (name, value) => `${name} {\n  grid-column-start: ${value};\n}`,
      description: describeClassname(
        'grid-column-start',
        'The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.',
      ),
    },
    gridColumnEnd: {
      tokens: ({ gridSpacing }) => gridSpacing,
      css: (name, value) => `${name} {\n  grid-column-end: ${value};\n}`,
      description: describeClassname(
        'grid-column-end',
        'The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.',
      ),
    },
    transformOrigin: {
      tokens: {
        CENTER: 'center',
        TOP: 'top',
        TOP_RIGHT: 'top right',
        RIGHT: 'right',
        BOTTOM_RIGHT: 'bottom right',
        BOTTOM: 'bottom',
        BOTTOM_LEFT: 'bottom left',
        LEFT: 'left',
        TOP_LEFT: 'top left',
      },
      css: (name, value) => `${name} {\n  transform-origin: ${value};\n}`,
      description: describeClassname(
        'transform-origin',
        "The transform-origin CSS property sets the origin for an element's transformations.",
      ),
    },
    scale: {
      tokens: {
        NONE: '0',
        SCALE_050: '.5',
        SCALE_075: '.75',
        SCALE_090: '.9',
        SCALE_095: '.95',
        SCALE_100: '1',
        SCALE_105: '1.05',
        SCALE_110: '1.1',
        SCALE_125: '1.25',
        SCALE_150: '1.5',
      },
      css: (name, value) => `${name} {\n  transform:scale(${value});\n}`,
      description: describeClassname(
        'transform',
        'The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.',
      ),
    },
    rotate: {
      tokens: {
        NEG_DEG_180: '-180deg',
        NEG_DEG_90: '-90deg',
        NEG_DEG_45: '-45deg',
        NONE: '0',
        DEG_45: '45deg',
        DEG_90: '90deg',
        DEG_180: '180deg',
      },
      css: (name, value) => `${name} {\n  transform:rotate(${value});\n}`,
      description: describeClassname(
        'transform',
        'The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.',
      ),
    },
    translate: {
      tokens: ({ spacing }, { negative }) => ({
        ...spacing,
        ...negative(spacing),
        NEG_FULL: '-100%',
        NEG_HALF: '-50%',
        HALF: '50%',
        FULL: '100%',
      }),
      css: (name, value) => `${name} {\n  transform:translate(${value});\n}`,
      description: describeClassname(
        'transform',
        'The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.',
      ),
    },
    transitionProperty: {
      tokens: {
        NONE: 'none',
        ALL: 'all',
        DEFAULT: 'background-color, border-color, color, opacity, transform',
        COLORS: 'background-color, border-color, color',
        OPACITY: 'opacity',
        TRANSFORM: 'transform',
      },
      css: (name, value) => `${name} {\n  transition-property: ${value};\n}`,
      description: describeClassname(
        'transition-property',
        'The transition-property CSS property sets the CSS properties to which a transition effect should be applied.',
      ),
    },
    transitionTimingFunction: {
      tokens: ({ timingFunctions }) => timingFunctions,
      css: (name, value) => `${name} {\n  transition-timing-function: ${value};\n}`,
      description: describeClassname(
        'transition-timing-function',
        'The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.',
      ),
    },
    transitionDuration: {
      tokens: ({ durations }) => durations,
      css: (name, value) => `${name} {\n  transition-duration: ${value};\n}`,
      description: describeClassname(
        'transition-duration',
        'The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.',
      ),
    },
    utils: {
      tokens: {
        CLEARFIX: '::after{\n  content: "";display: table;clear: both;\n}',
        SCREEN_REDER:
          '{\n  position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border-width:0;\n}',
        NOT_SCREEN_READER:
          '{\n  position:static;width:auto;height:auto;padding:0;margin:0;overflow:visible;clip:auto;white-space:normal;\n}',
      },
      css: (name, value) => `${name}${value}`,
      description: describeClassname('utils (Classy-UI)', "A set of utility tokens, you'r welcome :-)", false),
    },
  },
};
