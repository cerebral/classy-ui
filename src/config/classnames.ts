import { IClassnames } from '../types';

function describeClassname(prop: string, description: string, showMdnLink: boolean = true) {
  return `### ${prop}\n${description}\n${
    showMdnLink
      ? `[Mozilla Developer Network: ${prop}](https://developer.mozilla.org/en-US/docs/Web/CSS/${prop}).`
      : null
  }`;
}

const classnames: IClassnames = {
  boxSizing: {
    tokens: {
      CONTENT_BOX: {
        value: 'content-box',
      },
      BORDER_BOX: {
        value: 'border-box',
      },
    },
    css: (name, value) => `${name} {\n  box-sizing: ${value};\n}`,
    description: describeClassname('box-sizing', 'Sets how the total width and height of an element is calculated.'),
  },
  display: {
    tokens: {
      BLOCK: {
        value: 'block',
      },
      INLINE_BLOCK: {
        value: 'inline-block',
      },
      INLINE: {
        value: 'inline',
      },
      INLINE_FLEX: {
        value: 'inline-flex',
      },
      TABLE: {
        value: 'table',
      },
      TABLE_ROW: {
        value: 'table-row',
      },
      TABLE_CELL: {
        value: 'table-cell',
      },
      GRID: {
        value: 'grid',
      },
      FLEX: {
        value: 'flex',
      },
      HIDDEN: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  display: ${value};\n}`,
    description: describeClassname(
      'display',
      'The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.',
    ),
  },
  tableLayout: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      FIXED: {
        value: 'fixed',
      },
    },
    css: (name, value) => `${name} {\n  table-layout: ${value};\n}`,
    description: describeClassname(
      'table-layout',
      'The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.',
    ),
  },
  position: {
    tokens: {
      STATIC: {
        value: 'static',
      },
      FIXED: {
        value: 'fixed',
      },
      ABSOLUTE: {
        value: 'absolute',
      },
      RELATIVE: {
        value: 'relative',
      },
      STICKY: {
        value: 'sticky',
      },
    },
    css: (name, value) => `${name} {\n  position: ${value};\n}`,
    description: describeClassname(
      'position',
      'The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.',
    ),
  },
  backgroundAttachment: {
    tokens: {
      FIXED: {
        value: 'fixed',
      },
      LOCAL: {
        value: 'local',
      },
      SCROLL: {
        value: 'scroll',
      },
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
      BOTTOM: {
        value: 'bottom',
      },
      CENTER: {
        value: 'center',
      },
      LEFT: {
        value: 'left',
      },
      LEFT_BOTTOM: {
        value: 'left bottom',
      },
      LEFT_TOP: {
        value: 'left top',
      },
      RIGHT: {
        value: 'right',
      },
      RIGHT_BOTTOM: {
        value: 'right bottom',
      },
      RIGHT_TOP: {
        value: 'right top',
      },
      TOP: {
        value: 'top',
      },
    },
    css: (name, value) => `${name} {\n  background-position: ${value};\n}`,
    description: describeClassname(
      'background-position',
      'The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.',
    ),
  },
  backgroundRepeat: {
    tokens: {
      REPEAT: {
        value: 'background-repeat:repeat',
      },
      NO_REPEAT: {
        value: 'background-repeat:no-repeat',
      },
      REPEAT_X: {
        value: 'background-repeat:repeat-x',
      },
      REPEAT_Y: {
        value: 'background-repeat:repeat-y',
      },
      REPEAT_ROUND: {
        value: 'background-repeat:repeat-round',
      },
      REPEAT_SPACE: {
        value: 'background-repeat:repeat-space',
      },
    },
    css: (name, value) => `${name} {\n  background-repeat: ${value};\n}`,
    description: describeClassname(
      'background-repeat',
      'The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.',
    ),
  },
  backgroundSize: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      COVER: {
        value: 'cover',
      },
      CONTAIN: {
        value: 'contain',
      },
    },
    css: (name, value) => `${name} {\n  background-size: ${value};\n}`,
    description: describeClassname(
      'background-size',
      "The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.",
    ),
  },
  borderRadius: {
    tokens: ({ radii }) => radii,
    css: ['borderTopLeftRadius', 'borderTopRightRadius', 'borderBottomRightRadius', 'borderBottomLeftRadius'],
    description: describeClassname(
      'border-radius',
      "The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.",
    ),
  },
  borderTopLeftRadius: {
    tokens: ({ radii }) => radii,
    css: (name, value) => `${name} {\n  border-top-left-radius: ${value};\n}`,
    description: describeClassname(
      'border-top-left-radius',
      'The border-top-left-radius CSS property rounds the top-left corner of an element.',
    ),
  },
  borderTopRightRadius: {
    tokens: ({ radii }) => radii,
    css: (name, value) => `${name} {\n  border-top-right-radius: ${value};\n}`,
    description: describeClassname(
      'border-top-right-radius',
      'The border-top-right-radius CSS property rounds the top-right corner of an element.',
    ),
  },
  borderBottomRightRadius: {
    tokens: ({ radii }) => radii,
    css: (name, value) => `${name} {\n  border-bottom-right-radius: ${value};\n}`,
    description: describeClassname(
      'border-bottom-right-radius',
      'The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.',
    ),
  },
  borderBottomLeftRadius: {
    tokens: ({ radii }) => radii,
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
    tokens: ({ borderWidths }) => borderWidths,
    css: ['borderTopWidth', 'borderRightWidth', 'borderBottomWidth', 'borderLeftWidth'],
    description: describeClassname(
      'border-width',
      "The border-width shorthand CSS property sets the width of an element's border.",
    ),
  },
  borderTopWidth: {
    tokens: ({ borderWidths }) => borderWidths,
    css: (name, value) => `${name} {\n  border-top-width: ${value};\n}`,
    description: describeClassname(
      'border-top-width',
      'The border-top-width CSS property sets the width of the top border of an element.',
    ),
  },
  borderRightWidth: {
    tokens: ({ borderWidths }) => borderWidths,
    css: (name, value) => `${name} {\n  border-right-width: ${value};\n}`,
    description: describeClassname(
      'border-right-width',
      'The border-right-width CSS property sets the width of the right border of an element.',
    ),
  },
  borderBottomWidth: {
    tokens: ({ borderWidths }) => borderWidths,
    css: (name, value) => `${name} {\n  border-bottom-width: ${value};\n}`,
    description: describeClassname(
      'border-bottom-width',
      'The border-bottom-width CSS property sets the width of the bottom border of an element.',
    ),
  },
  borderLeftWidth: {
    tokens: ({ borderWidths }) => borderWidths,
    css: (name, value) => `${name} {\n  border-left-width: ${value};\n}`,
    description: describeClassname(
      'border-left-width',
      'The border-left-width CSS property sets the width of the left border of an element.',
    ),
  },
  borderStyle: {
    tokens: {
      SOLID: {
        value: 'solid',
      },
      DASHED: {
        value: 'dashed',
      },
      DOTTED: {
        value: 'dotted',
      },
      DOUBLE: {
        value: 'double',
      },
      NONE: {
        value: 'none',
      },
    },
    css: ['borderTopStyle', 'borderRightStyle', 'borderBottomStyle', 'borderLeftStyle'],
    description: describeClassname(
      'border-style',
      "The border-style shorthand CSS property sets the line style for all four sides of an element's border.",
    ),
  },
  borderTopStyle: {
    tokens: {
      SOLID: {
        value: 'solid',
      },
      DASHED: {
        value: 'dashed',
      },
      DOTTED: {
        value: 'dotted',
      },
      DOUBLE: {
        value: 'double',
      },
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  border-top-style: ${value};\n}`,
    description: describeClassname(
      'border-top-style',
      "The border-top-style CSS property sets the line style of an element's top border.",
    ),
  },
  borderRightStyle: {
    tokens: {
      SOLID: {
        value: 'solid',
      },
      DASHED: {
        value: 'dashed',
      },
      DOTTED: {
        value: 'dotted',
      },
      DOUBLE: {
        value: 'double',
      },
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  border-right-style: ${value};\n}`,
    description: describeClassname(
      'border-right-style',
      "The border-right-style CSS property sets the line style of an element's right border.",
    ),
  },
  borderBottomStyle: {
    tokens: {
      SOLID: {
        value: 'solid',
      },
      DASHED: {
        value: 'dashed',
      },
      DOTTED: {
        value: 'dotted',
      },
      DOUBLE: {
        value: 'double',
      },
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  border-bottom-style: ${value};\n}`,
    description: describeClassname(
      'border-bottom-style',
      "The border-bottom-style CSS property sets the line style of an element's bottom border.",
    ),
  },
  borderLeftStyle: {
    tokens: {
      SOLID: {
        value: 'solid',
      },
      DASHED: {
        value: 'dashed',
      },
      DOTTED: {
        value: 'dotted',
      },
      DOUBLE: {
        value: 'double',
      },
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  border-left-style: ${value};\n}`,
    description: describeClassname(
      'border-left-style',
      "The border-left-style CSS property sets the line style of an element's left border.",
    ),
  },
  borderCollapse: {
    tokens: {
      COLLAPSE: {
        value: 'collapse',
      },
      SEPARATE: {
        value: 'separate',
      },
    },
    css: (name, value) => `${name} {\n  border-collapse: ${value};\n}`,
    description: describeClassname(
      'border-collapse',
      'The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.',
    ),
  },
  overflow: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      HIDDEN: {
        value: 'hidden',
      },
      VISIBLE: {
        value: 'visible',
      },
      SCROLL: {
        value: 'scroll',
      },
    },
    css: ['overflowX', 'overflowY'],
    description: describeClassname(
      'overflow',
      "The overflow shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context.",
    ),
  },
  overflowX: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      HIDDEN: {
        value: 'hidden',
      },
      VISIBLE: {
        value: 'visible',
      },
      SCROLL: {
        value: 'scroll',
      },
    },
    css: (name, value) => `${name} {\n  overflow-x: ${value};\n}`,
    description: describeClassname(
      'overflow-x',
      "The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.",
    ),
  },
  overflowY: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      HIDDEN: {
        value: 'hidden',
      },
      VISIBLE: {
        value: 'visible',
      },
      SCROLL: {
        value: 'scroll',
      },
    },
    css: (name, value) => `${name} {\n  overflow-y: ${value};\n}`,
    description: describeClassname(
      'overflow-y',
      "The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.",
    ),
  },
  visibility: {
    tokens: {
      VISIBLE: {
        value: 'visible',
      },
      HIDDEN: {
        value: 'hidden',
      },
    },
    css: (name, value) => `${name} {\n  visibility: ${value};\n}`,
    description: describeClassname(
      'visibility',
      'The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.',
    ),
  },
  overflowScrolling: {
    tokens: {
      TOUCH: {
        value: 'touch',
      },
      AUTO: {
        value: 'auto',
      },
    },
    css: (name, value) => `${name} {\n  -webkit-overflow-scrolling: ${value};\n}`,
    description: describeClassname(
      '-webkit-overflow-scrolling',
      'The -webkit-overflow-scrolling CSS property controls whether or not touch devices use momentum-based scrolling for a given element.',
    ),
  },
  alignItems: {
    tokens: {
      STRETCH: {
        value: 'stretch',
      },
      START: {
        value: 'flex-start',
      },
      CENTER: {
        value: 'center',
      },
      END: {
        value: 'flex-end',
      },
      BASELINE: {
        value: 'baseline',
      },
    },
    css: (name, value) => `${name} {\n  align-items: ${value};\n}`,
    description: describeClassname(
      'align-items',
      'The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.',
    ),
  },
  flexDirection: {
    tokens: {
      ROW: {
        value: 'row',
      },
      ROW_REVERSE: {
        value: 'row-reverse',
      },
      COLUMN: {
        value: 'column',
      },
      COLUMN_REVERSE: {
        value: 'column-reverse',
      },
    },
    css: (name, value) => `${name} {\n  flex-direction: ${value};\n}`,
    description: describeClassname(
      'flex-direction',
      'The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).',
    ),
  },
  flexWrap: {
    tokens: {
      NOWRAP: {
        value: 'nowrap',
      },
      WRAP: {
        value: 'wrap',
      },
      WRAP_REVERSE: {
        value: 'wrap-reverse',
      },
    },
    css: (name, value) => `${name} {\n  flex-wrap: ${value};\n}`,
    description: describeClassname(
      'flex-wrap',
      'The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.',
    ),
  },
  flexBasis: {
    tokens: ({ flexBases }) => flexBases,
    css: (name, value) => `${name} {\n  flex-basis: ${value};\n}`,
    description: describeClassname(
      'flex-basis',
      'The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.',
    ),
  },
  flexGrow: {
    tokens: ({ flexGrows }) => flexGrows,
    css: (name, value) => `${name} {\n  flex-grow: ${value};\n}`,
    description: describeClassname(
      'flex-grow',
      'The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor)',
    ),
  },
  flexShrink: {
    tokens: ({ flexShrinks }) => flexShrinks,
    css: (name, value) => `${name} {\n  flex-shrink: ${value};\n}`,
    description: describeClassname(
      'flex-shrink',
      'The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.',
    ),
  },
  boxShadow: {
    tokens: ({ shadows }) => shadows,
    css: (name, value) => `${name} {\n  box-shadow: ${value};\n}`,
    description: describeClassname(
      'box-shadow',
      "The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.",
    ),
  },
  textShadow: {
    tokens: ({ shadows }) => shadows,
    css: (name, value) => `${name} {\n  text-shadow: ${value};\n}`,
    description: describeClassname(
      'text-shadow',
      'The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.',
    ),
  },
  outline: {
    tokens: {
      NONE: {
        value: '0',
      },
    },
    css: (name, value) => `${name} {\n  outline: ${value};\n}`,
    description: describeClassname(
      'outline',
      'The outline CSS property is a shorthand to set various outline properties in a single declaration: outline-style, outline-width, and outline-color.',
    ),
  },
  pointerEvents: {
    tokens: {
      NONE: {
        value: 'none',
      },
      AUTO: {
        value: 'auto',
      },
    },
    css: (name, value) => `${name} {\n  pointer-events: ${value}}`,
    description: describeClassname(
      'pointer-events',
      'The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.',
    ),
  },
  resize: {
    tokens: {
      BOTH: {
        value: 'both',
      },
      NONE: {
        value: 'none',
      },
      VERTICAL: {
        value: 'vertical',
      },
      HORIZONTAL: {
        value: 'horizontal',
      },
    },
    css: (name, value) => `${name} {\n  resize: ${value};\n}`,
    description: describeClassname(
      'resize',
      'The resize CSS property sets whether an element is resizable, and if so, in which directions.',
    ),
  },
  userSelect: {
    tokens: {
      NONE: {
        value: 'none',
      },
      TEXT: {
        value: 'text',
      },
      ALL: {
        value: 'all',
      },
      AUTO: {
        value: 'auto',
      },
    },
    css: (name, value) => `${name} {\n  user-select: ${value};\n}`,
    description: describeClassname(
      'user-select',
      "The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.",
    ),
  },
  cursor: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      DEFAULT: {
        value: 'default',
      },
      POINTER: {
        value: 'pointer',
      },
      WAIT: {
        value: 'wait',
      },
      TEXT: {
        value: 'text',
      },
      MOVE: {
        value: 'move',
      },
      NOT_ALLOWED: {
        value: 'not-allowed',
      },
    },
    css: (name, value) => `${name} {\n  cursor: ${value};\n}`,
    description: describeClassname(
      'cursor',
      'The cursor CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.',
    ),
  },
  fill: {
    tokens: {
      CURRENT: {
        value: 'currentColor',
      },
    },
    css: (name, value) => `${name} {\n  fill: ${value};\n}`,
    description: describeClassname(
      'fill',
      "The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.",
    ),
  },
  appearance: {
    tokens: {
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  appearance: ${value};\n}`,
    description: describeClassname(
      'appearance',
      "The appearance CSS property is used to display an element using platform-native styling based on the operating system's theme.",
    ),
  },
  fontWeight: {
    tokens: ({ fontWeights }) => fontWeights,
    css: (name, value) => `${name} {\n  font-weight: ${value};\n}`,
    description: describeClassname(
      'font-weight',
      'The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.',
    ),
  },
  fontFamily: {
    tokens: ({ fonts }) => fonts,
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
      LEFT: {
        value: 'left',
      },
      CENTER: {
        value: 'center',
      },
      RIGHT: {
        value: 'right',
      },
      JUSTIFY: {
        value: 'justify',
      },
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
      UNDERLINE: {
        value: 'underline',
      },
      LINE_THROUGH: {
        value: 'line-through',
      },
      NONE: {
        value: 'none',
      },
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
      SOLID: {
        value: 'solid',
      },
      DOUBLE: {
        value: 'double',
      },
      DOTTED: {
        value: 'dotted',
      },
      DASHED: {
        value: 'dashed',
      },
      WAVY: {
        value: 'wavy',
      },
    },
    css: (name, value) => `${name} {\n  text-decoration-style: ${value};\n}`,
    description: describeClassname(
      'text-decoration-style',
      'The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.',
    ),
  },
  textDecorationThickness: {
    tokens: ({ borderWidths }) => ({
      ...borderWidths,
      AUTO: {
        value: 'auto',
      },
      FROM_FONT: {
        value: 'from-font',
      },
    }),
    css: (name, value) => `${name} {\n  text-decoration-thickness: ${value};\n}`,
    description: describeClassname(
      'text-decoration-thickness',
      'The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.',
    ),
  },
  fontSmoothing: {
    tokens: {
      ANTIALIASED: {
        value: '-webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;',
      },
      SUBPIXEL_ANTIALIASED: {
        value: '-webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;',
      },
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
      UPPERCASE: {
        value: 'uppercase',
      },
      LOWERCASE: {
        value: 'lowercase',
      },
      CAPITALIZE: {
        value: 'capitalize',
      },
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  text-transform: ${value}}`,
    description: describeClassname(
      'text-transform',
      "The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.",
    ),
  },
  verticalAlign: {
    tokens: {
      BASELINE: {
        value: 'baseline',
      },
      TOP: {
        value: 'top',
      },
      MIDDLE: {
        value: 'middle',
      },
      BOTTOM: {
        value: 'bottom',
      },
      SUB: {
        value: 'sub',
      },
      SUPER: {
        value: 'super',
      },
      TEXT_TOP: {
        value: 'text-top',
      },
      TEXT_BOTTOM: {
        value: 'text-bottom',
      },
    },
    css: (name, value) => `${name} {\n  vertical-align: ${value};\n}`,
    description: describeClassname(
      'vertical-align',
      'The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.',
    ),
  },
  height: {
    tokens: ({ size }) => ({
      ...size,
      AUTO: {
        value: 'auto',
      },
    }),
    css: (name, value) => `${name} {\n  height: ${value};\n}`,
    description: describeClassname(
      'height',
      'The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.',
    ),
  },
  whitespace: {
    tokens: {
      NORMAL: {
        value: 'normal',
      },
      NO_WRAP: {
        value: 'nowrap',
      },
      PRE: {
        value: 'pre',
      },
      PRE_LINE: {
        value: 'pre-line',
      },
      PRE_WRAP: {
        value: 'pre-wrap',
      },
    },
    css: (name, value) => `${name} {\n  white-space: ${value};\n}`,
    description: describeClassname(
      'white-space',
      'The white-space CSS property sets how white space inside an element is handled.',
    ),
  },
  top: {
    tokens: ({ space }) => ({
      AUTO: {
        value: 'auto',
      },
      ...space,
    }),
    css: (name, value) => `${name} {\n  top: ${value};\n}`,
    description: describeClassname(
      'top',
      'The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.',
    ),
  },
  overflowWrap: {
    tokens: {
      NORMAL: {
        value: 'normal',
      },
      BREAK_WORD: {
        value: 'break-word',
      },
    },
    css: (name, value) => `${name} {\n  overflow-wrap: ${value};\n}`,
    description: describeClassname(
      'overflow-wrap',
      'The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.',
    ),
  },
  wordBreak: {
    tokens: {
      NORMAL: {
        value: 'normal',
      },
      BREAK_ALL: {
        value: 'break-all',
      },
    },
    css: (name, value) => `${name} {\n  word-break: ${value};\n}`,
    description: describeClassname(
      'word-break',
      'The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.',
    ),
  },
  textOverflow: {
    tokens: {
      CLIP: {
        value: 'clip',
      },
      ELLIPSIS: {
        value: 'ellipsis',
      },
    },
    css: (name, value) => `${name} {\n  text-overflow: ${value};white-space: nowrap;overflow: hidden;\n}`,
    description: describeClassname(
      'text-overflow',
      "The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped or display an ellipsis ('…').",
    ),
  },
  right: {
    tokens: ({ space }) => ({
      AUTO: {
        value: 'auto',
      },
      ...space,
    }),
    css: (name, value) => `${name} {\n  right: ${value};\n}`,
    description: describeClassname(
      'right',
      'The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.',
    ),
  },
  left: {
    tokens: ({ space }) => ({
      AUTO: {
        value: 'auto',
      },
      ...space,
    }),
    css: (name, value) => `${name} {\n  left: ${value};\n}`,
    description: describeClassname(
      'left',
      'The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.',
    ),
  },
  bottom: {
    tokens: ({ space }) => ({
      AUTO: {
        value: 'auto',
      },
      ...space,
    }),
    css: (name, value) => `${name} {\n  bottom: ${value};\n}`,
    description: describeClassname(
      'bottom',
      'The bottom CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.',
    ),
  },
  letterSpacing: {
    tokens: ({ letterSpacings }) => letterSpacings,
    css: (name, value) => `${name} {\n  letter-space: ${value};\n}`,
    description: describeClassname(
      'letter-space',
      'The letter-space CSS property sets the space behavior between text characters.',
    ),
  },
  lineHeight: {
    tokens: ({ lineHeights }) => lineHeights,
    css: (name, value) => `${name} {\n  line-height: ${value};\n}`,
    description: describeClassname(
      'letter-height',
      "The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.",
    ),
  },
  listStyleType: {
    tokens: {
      NONE: {
        value: 'none',
      },
      DISC: {
        value: 'disc',
      },
      DECIMAL: {
        value: 'decimal',
      },
    },
    css: (name, value) => `${name} {\n  list-style-type: ${value};\n}`,
    description: describeClassname(
      'list-style-type',
      'The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.',
    ),
  },
  listStylePosition: {
    tokens: {
      INSIDE: {
        value: 'inside',
      },
      OUTSIDE: {
        value: 'outside',
      },
    },
    css: (name, value) => `${name} {\n  list-style-position: ${value};\n}`,
    description: describeClassname(
      'list-style-position',
      'The list-style-position CSS property sets the position of the ::marker relative to a list item.',
    ),
  },
  float: {
    tokens: {
      RIGHT: {
        value: 'right',
      },
      LEFT: {
        value: 'left',
      },
      NONE: {
        value: 'none',
      },
    },
    css: (name, value) => `${name} {\n  float: ${value};\n}`,
    description: describeClassname(
      'float',
      'The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).',
    ),
  },
  alignContent: {
    tokens: {
      START: {
        value: 'flex-start',
      },
      CENTER: {
        value: 'center',
      },
      END: {
        value: 'flex-end',
      },
      BETWEEN: {
        value: 'space-between',
      },
      AROUND: {
        value: 'space-around',
      },
    },
    css: (name, value) => `${name} {\n  align-content: ${value};\n}`,
    description: describeClassname(
      'align-content',
      "The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.",
    ),
  },
  alignSelf: {
    tokens: {
      AUTO: {
        value: 'auto',
      },
      START: {
        value: 'flex-start',
      },
      CENTER: {
        value: 'center',
      },
      END: {
        value: 'flex-end',
      },
      STRETCH: {
        value: 'stretch',
      },
    },
    css: (name, value) => `${name} {\n  align-self: ${value};\n}`,
    description: describeClassname(
      'align-self',
      "The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.",
    ),
  },
  justifyContent: {
    tokens: {
      START: {
        value: 'flex-start',
      },
      CENTER: {
        value: 'center',
      },
      END: {
        value: 'flex-end',
      },
      BETWEEN: {
        value: 'space-between',
      },
      AROUND: {
        value: 'space-around',
      },
    },
    css: (name, value) => `${name} {\n  justify-content: ${value};\n}`,
    description: describeClassname(
      'justify-content',
      'The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.',
    ),
  },
  margin: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto',
      },
    }),
    css: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    description: describeClassname(
      'margin',
      'The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.',
    ),
  },
  marginVertical: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto',
      },
    }),
    css: ['marginTop', 'marginBottom'],
    description: describeClassname(
      'margin-vertical (Classy-UI)',
      'The margin CSS property sets the margin area on vertical sides of an element. It is a shorthand for margin-top and margin-bottom.',
      false,
    ),
  },
  marginHorizontal: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto',
      },
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
      FULL: {
        value: '100%',
      },
      SCREEN: {
        value: '100vh',
      },
    },
    css: (name, value) => `${name} {\n  max-height: ${value};\n}`,
    description: describeClassname(
      'max-height',
      'The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.',
    ),
  },
  maxWidth: {
    tokens: ({ size }) => size,
    css: (name, value) => `${name} {\n  max-width: ${value};\n}`,
    description: describeClassname(
      'max-width',
      'The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.',
    ),
  },
  minHeight: {
    tokens: ({ size }) => size,
    css: (name, value) => `${name} {\n  min-height: ${value};\n}`,
    description: describeClassname(
      'min-height',
      'The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.',
    ),
  },
  minWidth: {
    tokens: ({ size }) => size,
    css: (name, value) => `${name} {\n  min-width: ${value};\n}`,
    description: describeClassname(
      'min-width',
      'The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.',
    ),
  },
  objectFit: {
    tokens: {
      CONTAIN: {
        value: 'contain',
      },
      COVER: {
        value: 'cover',
      },
      FILL: {
        value: 'fill',
      },
      NONE: {
        value: 'none',
      },
      SCALE_DOWN: {
        value: 'scale-down',
      },
    },
    css: (name, value) => `${name} {\n  object-fit: ${value};\n}`,
    description: describeClassname(
      'object-fit',
      'The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.',
    ),
  },
  objectPosition: {
    tokens: {
      BOTTOM: {
        value: 'bottom',
      },
      CENTER: {
        value: 'center',
      },
      LEFT: {
        value: 'left',
      },
      LEFT_BOTTOM: {
        value: 'left bottom',
      },
      LEFT_TOP: {
        value: 'left top',
      },
      RIGHT: {
        value: 'right',
      },
      RIGHT_BOTTOM: {
        value: 'right bottom',
      },
      RIGHT_TOP: {
        value: 'right top',
      },
      TOP: {
        value: 'top',
      },
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
      FIRST: {
        value: '-9999',
      },
      LAST: {
        value: '9999',
      },
      NONE: {
        value: '0',
      },
      ORDER_1: {
        value: '1',
      },
      ORDER_2: {
        value: '2',
      },
      ORDER_3: {
        value: '3',
      },
      ORDER_4: {
        value: '4',
      },
      ORDER_5: {
        value: '5',
      },
      ORDER_6: {
        value: '6',
      },
      ORDER_7: {
        value: '7',
      },
      ORDER_8: {
        value: '8',
      },
      ORDER_9: {
        value: '9',
      },
      ORDER_10: {
        value: '10',
      },
      ORDER_11: {
        value: '11',
      },
      ORDER_12: {
        value: '12',
      },
    },
    css: (name, value) => `${name} {\n  order: ${value};\n}`,
    description: describeClassname(
      'order',
      'The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.',
    ),
  },
  padding: {
    tokens: ({ space }) => space,
    css: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    description: describeClassname(
      'padding',
      'The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.',
    ),
  },
  paddingVertical: {
    tokens: ({ space }) => space,
    css: ['paddingTop', 'paddingBottom'],
    description: describeClassname(
      'padding-vertical (Classy-UI)',
      'The padding CSS property sets the padding area on the vertical sides of an element. It is a shorthand for padding-top and padding-bottom.',
      false,
    ),
  },
  paddingHorizontal: {
    tokens: ({ space }) => space,
    css: ['paddingLeft', 'paddingRight'],
    description: describeClassname(
      'padding-horizontal (Classy-UI)',
      'The padding CSS property sets the padding area on the horizontal sides of an element. It is a shorthand for padding-left and padding-right.',
      false,
    ),
  },
  paddingTop: {
    tokens: ({ space }) => space,
    css: (name, value) => `${name} {\n  padding-top: ${value};\n}`,
    description: describeClassname(
      'padding-top',
      'The padding-top CSS property sets the height of the padding area on the top of an element.',
    ),
  },
  paddingRight: {
    tokens: ({ space }) => space,
    css: (name, value) => `${name} {\n  padding-right: ${value};\n}`,
    description: describeClassname(
      'padding-right',
      'The padding-right CSS property sets the width of the padding area on the right of an element.',
    ),
  },
  paddingBottom: {
    tokens: ({ space }) => space,
    css: (name, value) => `${name} {\n  padding-bottom: ${value};\n}`,
    description: describeClassname(
      'padding-bottom',
      'The padding-bottom CSS property sets the height of the padding area on the bottom of an element.',
    ),
  },
  paddingLeft: {
    tokens: ({ space }) => space,
    css: (name, value) => `${name} {\n  padding-left: ${value};\n}`,
    description: describeClassname(
      'padding-left',
      'The padding-left CSS property sets the width of the padding area on the left of an element.',
    ),
  },
  marginTop: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto;',
      },
    }),
    css: (name, value) => `${name} {\n  margin-top: ${value};\n}`,
    description: describeClassname(
      'margin-top',
      'The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
    ),
  },
  marginRight: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto;',
      },
    }),
    css: (name, value) => `${name} {\n  margin-right: ${value};\n}`,
    description: describeClassname(
      'margin-right',
      'The margin-right CSS property sets the margin area on the right of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
    ),
  },
  marginBottom: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto;',
      },
    }),
    css: (name, value) => `${name} {\n  margin-bottom: ${value};\n}`,
    description: describeClassname(
      'margin-bottom',
      'The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
    ),
  },
  placeholder: {
    tokens: ({ colors }) => colors,
    css: (name, value) => `${name}::placeholder {\n  color: ${value};\n}`,
    description: describeClassname(
      '::placeholder',
      'The ::placeholder CSS pseudo-element represents the placeholder text in an <input> or <textarea> element.',
    ),
  },
  marginLeft: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      AUTO: {
        value: 'auto;',
      },
    }),
    css: (name, value) => `${name} {\n  margin-left: ${value};\n}`,
    description: describeClassname(
      'margin-left',
      'The margin-left CSS property sets the margin area on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.',
    ),
  },
  stroke: {
    tokens: {
      CURRENT: {
        value: 'currentColor',
      },
    },
    css: (name, value) => `${name} {\n  stroke: ${value};\n}`,
    description: describeClassname(
      'stroke',
      'The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.',
    ),
  },
  width: {
    tokens: ({ size }) => ({
      auto: {
        value: 'auto',
      },
      ...size,
      SPAN_1_2: {
        value: '50%',
      },
      SPAN_1_3: {
        value: '33.333333%',
      },
      SPAN_2_3: {
        value: '66.666667%',
      },
      SPAN_1_4: {
        value: '25%',
      },
      SPAN_2_4: {
        value: '50%',
      },
      SPAN_3_4: {
        value: '75%',
      },
      SPAN_1_5: {
        value: '20%',
      },
      SPAN_2_5: {
        value: '40%',
      },
      SPAN_3_5: {
        value: '60%',
      },
      SPAN_4_5: {
        value: '80%',
      },
      SPAN_1_6: {
        value: '16.666667%',
      },
      SPAN_2_6: {
        value: '33.333333%',
      },
      SPAN_3_6: {
        value: '50%',
      },
      SPAN_4_6: {
        value: '66.666667%',
      },
      SPAN_5_6: {
        value: '83.333333%',
      },
      SPAN_1_12: {
        value: '8.333333%',
      },
      SPAN_2_12: {
        value: '16.666667%',
      },
      SPAN_3_12: {
        value: '25%',
      },
      SPAN_4_12: {
        value: '33.333333%',
      },
      SPAN_5_12: {
        value: '41.666667%',
      },
      SPAN_6_12: {
        value: '50%',
      },
      SPAN_7_12: {
        value: '58.333333%',
      },
      SPAN_8_12: {
        value: '66.666667%',
      },
      SPAN_9_12: {
        value: '75%',
      },
      SPAN_10_12: {
        value: '83.333333%',
      },
      SPAN_11_12: {
        value: '91.666667%',
      },
    }),
    css: (name, value) => `${name} {\n  width: ${value};\n}`,
    description: describeClassname(
      'width',
      'The width attribute defines the horizontal length of an element in the user coordinate system.',
    ),
  },
  zIndex: {
    tokens: ({ zIndices }) => zIndices,
    css: (name, value) => `${name} {\n  z-index: ${value};\n}`,
    description: describeClassname(
      'z-index',
      'The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.',
    ),
  },
  gridGap: {
    tokens: ({ space }) => space,
    css: ['gridRowGap', 'gridColumnGap'],
    description: describeClassname(
      'gap',
      'The grid-gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.',
    ),
  },
  gridRowGap: {
    tokens: ({ space }) => space,
    css: (name, value) => `${name} {\n  grid-row-gap: ${value};\n}`,
    description: describeClassname(
      'grid-row-gap',
      "The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.",
    ),
  },
  gridColumnGap: {
    tokens: ({ space }) => space,
    css: (name, value) => `${name} {\n  grid-column-gap: ${value};\n}`,
    description: describeClassname(
      'grid-column-gap',
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
    tokens: ({ gridColumns }) => gridColumns,
    css: ['gridColumnStart', 'gridColumnEnd'],
    description: describeClassname(
      'grid-column',
      "The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.",
    ),
  },
  gridColumnStart: {
    tokens: ({ gridColumns }) => gridColumns,
    css: (name, value) => `${name} {\n  grid-column-start: ${value};\n}`,
    description: describeClassname(
      'grid-column-start',
      'The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.',
    ),
  },
  gridColumnEnd: {
    tokens: ({ gridColumns }) => gridColumns,
    css: (name, value) => `${name} {\n  grid-column-end: ${value};\n}`,
    description: describeClassname(
      'grid-column-end',
      'The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.',
    ),
  },
  transformOrigin: {
    tokens: {
      CENTER: {
        value: 'center',
      },
      TOP: {
        value: 'top',
      },
      TOP_RIGHT: {
        value: 'top right',
      },
      RIGHT: {
        value: 'right',
      },
      BOTTOM_RIGHT: {
        value: 'bottom right',
      },
      BOTTOM: {
        value: 'bottom',
      },
      BOTTOM_LEFT: {
        value: 'bottom left',
      },
      LEFT: {
        value: 'left',
      },
      TOP_LEFT: {
        value: 'top left',
      },
    },
    css: (name, value) => `${name} {\n  transform-origin: ${value};\n}`,
    description: describeClassname(
      'transform-origin',
      "The transform-origin CSS property sets the origin for an element's transformations.",
    ),
  },
  scale: {
    tokens: {
      NONE: {
        value: '0',
      },
      SCALE_50: {
        value: '.5',
      },
      SCALE_75: {
        value: '.75',
      },
      SCALE_90: {
        value: '.9',
      },
      SCALE_95: {
        value: '.95',
      },
      SCALE_100: {
        value: '1',
      },
      SCALE_105: {
        value: '1.05',
      },
      SCALE_110: {
        value: '1.1',
      },
      SCALE_125: {
        value: '1.25',
      },
      SCALE_150: {
        value: '1.5',
      },
    },
    css: (name, value) => `${name} {\n  transform:scale(${value});\n}`,
    description: describeClassname(
      'transform',
      'The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.',
    ),
  },
  rotate: {
    tokens: {
      NEGATIVE_DEG_180: {
        value: '-180deg',
      },
      NEGATIVE_DEG_90: {
        value: '-90deg',
      },
      NEGATIVE_DEG_45: {
        value: '-45deg',
      },
      NONE: {
        value: '0',
      },
      DEG_45: {
        value: '45deg',
      },
      DEG_90: {
        value: '90deg',
      },
      DEG_180: {
        value: '180deg',
      },
    },
    css: (name, value) => `${name} {\n  transform:rotate(${value});\n}`,
    description: describeClassname(
      'transform',
      'The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.',
    ),
  },
  translate: {
    tokens: ({ space }, { negative }) => ({
      ...space,
      ...negative(space),
      NEG_FULL: {
        value: '-100%',
      },
      NEG_HALF: {
        value: '-50%',
      },
      HALF: {
        value: '50%',
      },
      FULL: {
        value: '100%',
      },
    }),
    css: (name, value) => `${name} {\n  transform:translate(${value});\n}`,
    description: describeClassname(
      'transform',
      'The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.',
    ),
  },
  transitionProperty: {
    tokens: {
      NONE: {
        value: 'none',
      },
      ALL: {
        value: 'all',
      },
      DEFAULT: {
        value: 'background-color, border-color, color, opacity, transform',
      },
      COLORS: {
        value: 'background-color, border-color, color',
      },
      OPACITY: {
        value: 'opacity',
      },
      TRANSFORM: {
        value: 'transform',
      },
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
      CLEARFIX: {
        value: '::after{\n  content: "";\n  display: table;\n  clear: both;\n}',
      },
      SCREEN_READER: {
        value:
          '{\n  position:absolute;\n  width:1px;\n  height:1px;\n  padding:0;\n  margin:-1px;\n  overflow:hidden;\n  clip:rect(0,0,0,0);\n  white-space:nowrap;\n  border-width:0;\n}',
      },
      NOT_SCREEN_READER: {
        value:
          '{\n  position:static;\n  width:auto;\n  height:auto;\n  padding:0;\n  margin:0;\n  overflow:visible;\n  clip:auto;\n  white-space:normal;\n}',
      },
    },
    css: (name, value) => `${name}${value}`,
    description: describeClassname('utils (Classy-UI)', "A set of utility tokens, you're welcome :-)", false),
  },
};

export default classnames;
