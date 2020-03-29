
declare module 'classy-ui' {

  /**
   * ```css
   * $token:last-child {}
   * ```
   */
  lastChild: IDecorators;


  /**
   * ```css
   * $token:odd-child {}
   * ```
   */
  oddChild: IDecorators;


  /**
   * ```css
   * $token:even-child {}
   * ```
   */
  evenChild: IDecorators;


  /**
   * ```css
   * $token:focus-within {}
   * ```
   */
  focusWithin: IDecorators;


  /**
   * ```css
   * $token::before {}
   * ```
   */
  before: IDecorators;


  /**
   * ```css
   * $token::after {}
   * ```
   */
  after: IDecorators;


  /**
   * ```css
   * $token::first-line {}
   * ```
   */
  firstLine: IDecorators;


  /**
   * ```css
   * $token::first-letter {}
   * ```
   */
  firstLetter: IDecorators;


  /**
   * ```css
   * $token::selection {}
   * ```
   */
  selection: IDecorators;

}
export type TCompose = (...args: Array<IDecorators | TGroup | Themes | TClassname | boolean | ''>) => TClassname;
export type TTokens = { 
  
  export type TClassname = string & "CLASSNAME";
  export enum Themes {
    dark = "themes-dark"
  }
  export type TGroup = 'GROUP'
  export interface IDecorators {
    /**
     * ```css
     * group:hover $token {}
     * ```
     */
    groupHover: IDecorators;
    /**
     * ```css
     * group:focus $token {}
     * ```
     */
    groupFocus: IDecorators;
    /**
     * ```css
     * group:active $token {}
     * ```
     */
    groupActive: IDecorators;
    /**
     * ```css
     * group:first-child $token {}
     * ```
     */
    groupFirstChild: IDecorators;
    /**
     * ```css
     * group:last-child $token {}
     * ```
     */
    groupLastChild: IDecorators;
    /**
     * ```css
     * group:odd-child $token {}
     * ```
     */
    groupOddChild: IDecorators;
    /**
     * ```css
     * group:even-child $token {}
     * ```
     */
    groupEvenChild: IDecorators;
    /**
     * ```css
     * group:focus-within $token {}
     * ```
     */
    groupFocusWithin: IDecorators;
  
    /**
     * ```css
     * $token:hover {}
     * ```
     */
    hover: IDecorators;
  

    /**
     * ```css
     * $token:focus {}
     * ```
     */
    focus: IDecorators;
  

    /**
     * ```css
     * $token:active {}
     * ```
     */
    active: IDecorators;
  

    /**
     * ```css
     * $token:disabled {}
     * ```
     */
    disabled: IDecorators;
  

    /**
     * ```css
     * $token:visited {}
     * ```
     */
    visited: IDecorators;
  

    /**
     * ```css
     * $token:first-child {}
     * ```
     */
    firstChild: IDecorators;
  

    /**
     * ```css
     * $token:last-child {}
     * ```
     */
    lastChild: IDecorators;
  

    /**
     * ```css
     * $token:odd-child {}
     * ```
     */
    oddChild: IDecorators;
  

    /**
     * ```css
     * $token:even-child {}
     * ```
     */
    evenChild: IDecorators;
  

    /**
     * ```css
     * $token:focus-within {}
     * ```
     */
    focusWithin: IDecorators;
  
  }
  export type TCompose = (...args: Array<IDecorators | TGroup | Themes | TClassname | boolean | ''>) => TClassname;
  export type TTokens = { 
    
    
  /**
    * ### box-sizing
Sets how the total width and height of an element is calculated.
[Mozilla Developer Network: box-sizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing).
    */
    boxSizing: {
      
  /**
   
   
   * ```css
   * .box-sizing-CONTENT_BOX {
   *   box-sizing: content-box;
   * }
   * ```
   */
  readonly CONTENT_BOX: IDecorators;
  

  /**
   
   
   * ```css
   * .box-sizing-BORDER_BOX {
   *   box-sizing: border-box;
   * }
   * ```
   */
  readonly BORDER_BOX: IDecorators;
  
    }
  

    
  /**
    * ### display
The display CSS property sets whether an element is treated as a block or inline element and the layout used for its children, such as flow layout, grid or flex.
[Mozilla Developer Network: display](https://developer.mozilla.org/en-US/docs/Web/CSS/display).
    */
    display: {
      
  /**
   
   
   * ```css
   * .display-BLOCK {
   *   display: block;
   * }
   * ```
   */
  readonly BLOCK: IDecorators;
  

  /**
   
   
   * ```css
   * .display-INLINE_BLOCK {
   *   display: inline-block;
   * }
   * ```
   */
  readonly INLINE_BLOCK: IDecorators;
  

  /**
   
   
   * ```css
   * .display-INLINE {
   *   display: inline;
   * }
   * ```
   */
  readonly INLINE: IDecorators;
  

  /**
   
   
   * ```css
   * .display-INLINE_FLEX {
   *   display: inline-flex;
   * }
   * ```
   */
  readonly INLINE_FLEX: IDecorators;
  

  /**
   
   
   * ```css
   * .display-TABLE {
   *   display: table;
   * }
   * ```
   */
  readonly TABLE: IDecorators;
  

  /**
   
   
   * ```css
   * .display-TABLE_ROW {
   *   display: table-row;
   * }
   * ```
   */
  readonly TABLE_ROW: IDecorators;
  

  /**
   
   
   * ```css
   * .display-TABLE_CELL {
   *   display: table-cell;
   * }
   * ```
   */
  readonly TABLE_CELL: IDecorators;
  

  /**
   
   
   * ```css
   * .display-GRID {
   *   display: grid;
   * }
   * ```
   */
  readonly GRID: IDecorators;
  

  /**
   
   
   * ```css
   * .display-FLEX {
   *   display: flex;
   * }
   * ```
   */
  readonly FLEX: IDecorators;
  

  /**
   
   
   * ```css
   * .display-HIDDEN {
   *   display: none;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  
    }
  

    
  /**
    * ### table-layout
The table-layout CSS property sets the algorithm used to lay out <table> cells, rows, and columns.
[Mozilla Developer Network: table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout).
    */
    tableLayout: {
      
  /**
   
   
   * ```css
   * .table-layout-AUTO {
   *   table-layout: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .table-layout-FIXED {
   *   table-layout: fixed;
   * }
   * ```
   */
  readonly FIXED: IDecorators;
  
    }
  

    
  /**
    * ### position
The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.
[Mozilla Developer Network: position](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
    */
    position: {
      
  /**
   
   
   * ```css
   * .position-STATIC {
   *   position: static;
   * }
   * ```
   */
  readonly STATIC: IDecorators;
  

  /**
   
   
   * ```css
   * .position-FIXED {
   *   position: fixed;
   * }
   * ```
   */
  readonly FIXED: IDecorators;
  

  /**
   
   
   * ```css
   * .position-ABSOLUTE {
   *   position: absolute;
   * }
   * ```
   */
  readonly ABSOLUTE: IDecorators;
  

  /**
   
   
   * ```css
   * .position-RELATIVE {
   *   position: relative;
   * }
   * ```
   */
  readonly RELATIVE: IDecorators;
  

  /**
   
   
   * ```css
   * .position-STICKY {
   *   position: sticky;
   * }
   * ```
   */
  readonly STICKY: IDecorators;
  
    }
  

    
  /**
    * ### background-attachment
The background-attachment CSS property sets whether a background image's position is fixed within the viewport, or scrolls with its containing block.
[Mozilla Developer Network: background-attachment](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment).
    */
    backgroundAttachment: {
      
  /**
   
   
   * ```css
   * .background-attachment-FIXED {
   *   background-attachment: fixed;
   * }
   * ```
   */
  readonly FIXED: IDecorators;
  

  /**
   
   
   * ```css
   * .background-attachment-LOCAL {
   *   background-attachment: local;
   * }
   * ```
   */
  readonly LOCAL: IDecorators;
  

  /**
   
   
   * ```css
   * .background-attachment-SCROLL {
   *   background-attachment: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### background-color
The background-color CSS property sets the background color of an element.
[Mozilla Developer Network: background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color).
    */
    backgroundColor: {
      
  /**
   
   
   * ```css
   * .background-color-RED {
   *   background-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .background-color-BLUE {
   *   background-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .background-color-GREEN {
   *   background-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .background-color-PURPLE {
   *   background-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### background-position
The background-position CSS property sets the initial position for each background image. The position is relative to the position layer set by background-origin.
[Mozilla Developer Network: background-position](https://developer.mozilla.org/en-US/docs/Web/CSS/background-position).
    */
    backgroundPosition: {
      
  /**
   
   
   * ```css
   * .background-position-BOTTOM {
   *   background-position: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-CENTER {
   *   background-position: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-LEFT {
   *   background-position: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-LEFT_BOTTOM {
   *   background-position: left bottom;
   * }
   * ```
   */
  readonly LEFT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-LEFT_TOP {
   *   background-position: left top;
   * }
   * ```
   */
  readonly LEFT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-RIGHT {
   *   background-position: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-RIGHT_BOTTOM {
   *   background-position: right bottom;
   * }
   * ```
   */
  readonly RIGHT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-RIGHT_TOP {
   *   background-position: right top;
   * }
   * ```
   */
  readonly RIGHT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .background-position-TOP {
   *   background-position: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  
    }
  

    
  /**
    * ### background-repeat
The background-repeat CSS property sets how background images are repeated. A background image can be repeated along the horizontal and vertical axes, or not repeated at all.
[Mozilla Developer Network: background-repeat](https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat).
    */
    backgroundRepeat: {
      
  /**
   
   
   * ```css
   * .background-repeat-REPEAT {
   *   background-repeat: background-repeat:repeat;
   * }
   * ```
   */
  readonly REPEAT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-NO_REPEAT {
   *   background-repeat: background-repeat:no-repeat;
   * }
   * ```
   */
  readonly NO_REPEAT: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_X {
   *   background-repeat: background-repeat:repeat-x;
   * }
   * ```
   */
  readonly REPEAT_X: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_Y {
   *   background-repeat: background-repeat:repeat-y;
   * }
   * ```
   */
  readonly REPEAT_Y: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_ROUND {
   *   background-repeat: background-repeat:repeat-round;
   * }
   * ```
   */
  readonly REPEAT_ROUND: IDecorators;
  

  /**
   
   
   * ```css
   * .background-repeat-REPEAT_SPACE {
   *   background-repeat: background-repeat:repeat-space;
   * }
   * ```
   */
  readonly REPEAT_SPACE: IDecorators;
  
    }
  

    
  /**
    * ### background-size
The background-size CSS property sets the size of the element's background image. The image can be left to its natural size, stretched, or constrained to fit the available space.
[Mozilla Developer Network: background-size](https://developer.mozilla.org/en-US/docs/Web/CSS/background-size).
    */
    backgroundSize: {
      
  /**
   
   
   * ```css
   * .background-size-AUTO {
   *   background-size: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .background-size-COVER {
   *   background-size: cover;
   * }
   * ```
   */
  readonly COVER: IDecorators;
  

  /**
   
   
   * ```css
   * .background-size-CONTAIN {
   *   background-size: contain;
   * }
   * ```
   */
  readonly CONTAIN: IDecorators;
  
    }
  

    
  /**
    * ### border-radius
The border-radius CSS property rounds the corners of an element's outer border edge. You can set a single radius to make circular corners, or two radii to make elliptical corners.
[Mozilla Developer Network: border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius).
    */
    borderRadius: {
      
    }
  

    
  /**
    * ### border-top-left-radius
The border-top-left-radius CSS property rounds the top-left corner of an element.
[Mozilla Developer Network: border-top-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-left-radius).
    */
    borderTopLeftRadius: {
      
    }
  

    
  /**
    * ### border-top-right-radius
The border-top-right-radius CSS property rounds the top-right corner of an element.
[Mozilla Developer Network: border-top-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-right-radius).
    */
    borderTopRightRadius: {
      
    }
  

    
  /**
    * ### border-bottom-right-radius
The border-bottom-right-radius CSS property rounds the bottom-right corner of an element.
[Mozilla Developer Network: border-bottom-right-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-right-radius).
    */
    borderBottomRightRadius: {
      
    }
  

    
  /**
    * ### border-bottom-left-radius
The border-bottom-left-radius CSS property rounds the bottom-left corner of an element.
[Mozilla Developer Network: border-bottom-left-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-left-radius).
    */
    borderBottomLeftRadius: {
      
    }
  

    
  /**
    * ### border-color
The border-color shorthand CSS property sets the color of an element's border.
[Mozilla Developer Network: border-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-color).
    */
    borderColor: {
      
  /**
   
   
   * ```css
   * .border-color-RED {
   *   border-top-color: red;
   * }
.border-color-RED {
   *   border-right-color: red;
   * }
.border-color-RED {
   *   border-bottom-color: red;
   * }
.border-color-RED {
   *   border-left-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-color-BLUE {
   *   border-top-color: blue;
   * }
.border-color-BLUE {
   *   border-right-color: blue;
   * }
.border-color-BLUE {
   *   border-bottom-color: blue;
   * }
.border-color-BLUE {
   *   border-left-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-color-GREEN {
   *   border-top-color: var(--colors-GREEN);
   * }
.border-color-GREEN {
   *   border-right-color: var(--colors-GREEN);
   * }
.border-color-GREEN {
   *   border-bottom-color: var(--colors-GREEN);
   * }
.border-color-GREEN {
   *   border-left-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .border-color-PURPLE {
   *   border-top-color: var(--colors-PURPLE);
   * }
.border-color-PURPLE {
   *   border-right-color: var(--colors-PURPLE);
   * }
.border-color-PURPLE {
   *   border-bottom-color: var(--colors-PURPLE);
   * }
.border-color-PURPLE {
   *   border-left-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### border-top-color
The border-top-color CSS property sets the color of an element's top border. 
[Mozilla Developer Network: border-top-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-color).
    */
    borderTopColor: {
      
  /**
   
   
   * ```css
   * .border-top-color-RED {
   *   border-top-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-color-BLUE {
   *   border-top-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-color-GREEN {
   *   border-top-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-color-PURPLE {
   *   border-top-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### border-right-color
The border-right-color CSS property sets the color of an element's right border. 
[Mozilla Developer Network: border-right-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-color).
    */
    borderRightColor: {
      
  /**
   
   
   * ```css
   * .border-right-color-RED {
   *   border-right-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-color-BLUE {
   *   border-right-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-color-GREEN {
   *   border-right-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-color-PURPLE {
   *   border-right-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-color
The border-bottom-color CSS property sets the color of an element's bottom border. 
[Mozilla Developer Network: border-bottom-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-color).
    */
    borderBottomColor: {
      
  /**
   
   
   * ```css
   * .border-bottom-color-RED {
   *   border-bottom-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-color-BLUE {
   *   border-bottom-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-color-GREEN {
   *   border-bottom-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-color-PURPLE {
   *   border-bottom-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### border-left-color
The border-left-color CSS property sets the color of an element's left border.
[Mozilla Developer Network: border-left-color](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-color).
    */
    borderLeftColor: {
      
  /**
   
   
   * ```css
   * .border-left-color-RED {
   *   border-left-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-color-BLUE {
   *   border-left-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-color-GREEN {
   *   border-left-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-color-PURPLE {
   *   border-left-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### border-width
The border-width shorthand CSS property sets the width of an element's border.
[Mozilla Developer Network: border-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-width).
    */
    borderWidth: {
      
    }
  

    
  /**
    * ### border-top-width
The border-top-width CSS property sets the width of the top border of an element.
[Mozilla Developer Network: border-top-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-width).
    */
    borderTopWidth: {
      
    }
  

    
  /**
    * ### border-right-width
The border-right-width CSS property sets the width of the right border of an element.
[Mozilla Developer Network: border-right-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-width).
    */
    borderRightWidth: {
      
    }
  

    
  /**
    * ### border-bottom-width
The border-bottom-width CSS property sets the width of the bottom border of an element.
[Mozilla Developer Network: border-bottom-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-width).
    */
    borderBottomWidth: {
      
    }
  

    
  /**
    * ### border-left-width
The border-left-width CSS property sets the width of the left border of an element.
[Mozilla Developer Network: border-left-width](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-width).
    */
    borderLeftWidth: {
      
    }
  

    
  /**
    * ### border-style
The border-style shorthand CSS property sets the line style for all four sides of an element's border.
[Mozilla Developer Network: border-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style).
    */
    borderStyle: {
      
  /**
   
   
   * ```css
   * .border-style-SOLID {
   *   border-top-style: solid;
   * }
.border-style-SOLID {
   *   border-right-style: solid;
   * }
.border-style-SOLID {
   *   border-bottom-style: solid;
   * }
.border-style-SOLID {
   *   border-left-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-DASHED {
   *   border-top-style: dashed;
   * }
.border-style-DASHED {
   *   border-right-style: dashed;
   * }
.border-style-DASHED {
   *   border-bottom-style: dashed;
   * }
.border-style-DASHED {
   *   border-left-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-DOTTED {
   *   border-top-style: dotted;
   * }
.border-style-DOTTED {
   *   border-right-style: dotted;
   * }
.border-style-DOTTED {
   *   border-bottom-style: dotted;
   * }
.border-style-DOTTED {
   *   border-left-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-DOUBLE {
   *   border-top-style: double;
   * }
.border-style-DOUBLE {
   *   border-right-style: double;
   * }
.border-style-DOUBLE {
   *   border-bottom-style: double;
   * }
.border-style-DOUBLE {
   *   border-left-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-style-NONE {
   *   border-top-style: none;
   * }
.border-style-NONE {
   *   border-right-style: none;
   * }
.border-style-NONE {
   *   border-bottom-style: none;
   * }
.border-style-NONE {
   *   border-left-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-top-style
The border-top-style CSS property sets the line style of an element's top border.
[Mozilla Developer Network: border-top-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-top-style).
    */
    borderTopStyle: {
      
  /**
   
   
   * ```css
   * .border-top-style-SOLID {
   *   border-top-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-DASHED {
   *   border-top-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-DOTTED {
   *   border-top-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-DOUBLE {
   *   border-top-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-top-style-NONE {
   *   border-top-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-right-style
The border-right-style CSS property sets the line style of an element's right border.
[Mozilla Developer Network: border-right-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-right-style).
    */
    borderRightStyle: {
      
  /**
   
   
   * ```css
   * .border-right-style-SOLID {
   *   border-right-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-DASHED {
   *   border-right-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-DOTTED {
   *   border-right-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-DOUBLE {
   *   border-right-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-right-style-NONE {
   *   border-right-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-bottom-style
The border-bottom-style CSS property sets the line style of an element's bottom border.
[Mozilla Developer Network: border-bottom-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-bottom-style).
    */
    borderBottomStyle: {
      
  /**
   
   
   * ```css
   * .border-bottom-style-SOLID {
   *   border-bottom-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-DASHED {
   *   border-bottom-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-DOTTED {
   *   border-bottom-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-DOUBLE {
   *   border-bottom-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-bottom-style-NONE {
   *   border-bottom-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-left-style
The border-left-style CSS property sets the line style of an element's left border.
[Mozilla Developer Network: border-left-style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-left-style).
    */
    borderLeftStyle: {
      
  /**
   
   
   * ```css
   * .border-left-style-SOLID {
   *   border-left-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-DASHED {
   *   border-left-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-DOTTED {
   *   border-left-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-DOUBLE {
   *   border-left-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-left-style-NONE {
   *   border-left-style: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### border-collapse
The border-collapse CSS property sets whether cells inside a <table> have shared or separate borders.
[Mozilla Developer Network: border-collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/border-collapse).
    */
    borderCollapse: {
      
  /**
   
   
   * ```css
   * .border-collapse-COLLAPSE {
   *   border-collapse: collapse;
   * }
   * ```
   */
  readonly COLLAPSE: IDecorators;
  

  /**
   
   
   * ```css
   * .border-collapse-SEPARATE {
   *   border-collapse: separate;
   * }
   * ```
   */
  readonly SEPARATE: IDecorators;
  
    }
  

    
  /**
    * ### overflow
The overflow shorthand CSS property sets what to do when an element's content is too big to fit in its block formatting context.
[Mozilla Developer Network: overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow).
    */
    overflow: {
      
  /**
   
   
   * ```css
   * .overflow-AUTO {
   *   overflow-x: auto;
   * }
.overflow-AUTO {
   *   overflow-y: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-HIDDEN {
   *   overflow-x: hidden;
   * }
.overflow-HIDDEN {
   *   overflow-y: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-VISIBLE {
   *   overflow-x: visible;
   * }
.overflow-VISIBLE {
   *   overflow-y: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-SCROLL {
   *   overflow-x: scroll;
   * }
.overflow-SCROLL {
   *   overflow-y: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### overflow-x
The overflow-x CSS property sets what shows when content overflows a block-level element's left and right edges. This may be nothing, a scroll bar, or the overflow content.
[Mozilla Developer Network: overflow-x](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-x).
    */
    overflowX: {
      
  /**
   
   
   * ```css
   * .overflow-x-AUTO {
   *   overflow-x: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-x-HIDDEN {
   *   overflow-x: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-x-VISIBLE {
   *   overflow-x: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-x-SCROLL {
   *   overflow-x: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### overflow-y
The overflow-y CSS property sets what shows when content overflows a block-level element's top and bottom edges. This may be nothing, a scroll bar, or the overflow content.
[Mozilla Developer Network: overflow-y](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-y).
    */
    overflowY: {
      
  /**
   
   
   * ```css
   * .overflow-y-AUTO {
   *   overflow-y: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-y-HIDDEN {
   *   overflow-y: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-y-VISIBLE {
   *   overflow-y: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-y-SCROLL {
   *   overflow-y: scroll;
   * }
   * ```
   */
  readonly SCROLL: IDecorators;
  
    }
  

    
  /**
    * ### visibility
The visibility CSS property shows or hides an element without changing the layout of a document. The property can also hide rows or columns in a <table>.
[Mozilla Developer Network: visibility](https://developer.mozilla.org/en-US/docs/Web/CSS/visibility).
    */
    visibility: {
      
  /**
   
   
   * ```css
   * .visibility-VISIBLE {
   *   visibility: visible;
   * }
   * ```
   */
  readonly VISIBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .visibility-HIDDEN {
   *   visibility: hidden;
   * }
   * ```
   */
  readonly HIDDEN: IDecorators;
  
    }
  

    
  /**
    * ### -webkit-overflow-scrolling
The -webkit-overflow-scrolling CSS property controls whether or not touch devices use momentum-based scrolling for a given element.
[Mozilla Developer Network: -webkit-overflow-scrolling](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-overflow-scrolling).
    */
    overflowScrolling: {
      
  /**
   
   
   * ```css
   * .overflow-scrolling-TOUCH {
   *   -webkit-overflow-scrolling: touch;
   * }
   * ```
   */
  readonly TOUCH: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-scrolling-AUTO {
   *   -webkit-overflow-scrolling: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### align-items
The CSS align-items property sets the align-self value on all direct children as a group. In Flexbox, it controls the alignment of items on the Cross Axis. In Grid Layout, it controls the alignment of items on the Block Axis within their grid area.
[Mozilla Developer Network: align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items).
    */
    alignItems: {
      
  /**
   
   
   * ```css
   * .align-items-STRETCH {
   *   align-items: stretch;
   * }
   * ```
   */
  readonly STRETCH: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-START {
   *   align-items: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-CENTER {
   *   align-items: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-END {
   *   align-items: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .align-items-BASELINE {
   *   align-items: baseline;
   * }
   * ```
   */
  readonly BASELINE: IDecorators;
  
    }
  

    
  /**
    * ### flex-direction
The flex-direction CSS property sets how flex items are placed in the flex container defining the main axis and the direction (normal or reversed).
[Mozilla Developer Network: flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction).
    */
    flexDirection: {
      
  /**
   
   
   * ```css
   * .flex-direction-ROW {
   *   flex-direction: row;
   * }
   * ```
   */
  readonly ROW: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-direction-ROW_REVERSE {
   *   flex-direction: row-reverse;
   * }
   * ```
   */
  readonly ROW_REVERSE: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-direction-COLUMN {
   *   flex-direction: column;
   * }
   * ```
   */
  readonly COLUMN: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-direction-COLUMN_REVERSE {
   *   flex-direction: column-reverse;
   * }
   * ```
   */
  readonly COLUMN_REVERSE: IDecorators;
  
    }
  

    
  /**
    * ### flex-wrap
The flex-wrap CSS property sets whether flex items are forced onto one line or can wrap onto multiple lines. If wrapping is allowed, it sets the direction that lines are stacked.
[Mozilla Developer Network: flex-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-wrap).
    */
    flexWrap: {
      
  /**
   
   
   * ```css
   * .flex-wrap-NOWRAP {
   *   flex-wrap: nowrap;
   * }
   * ```
   */
  readonly NOWRAP: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-wrap-WRAP {
   *   flex-wrap: wrap;
   * }
   * ```
   */
  readonly WRAP: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-wrap-WRAP_REVERSE {
   *   flex-wrap: wrap-reverse;
   * }
   * ```
   */
  readonly WRAP_REVERSE: IDecorators;
  
    }
  

    
  /**
    * ### flex-basis
The flex-basis CSS property sets the initial main size of a flex item. It sets the size of the content box unless otherwise set with box-sizing.
[Mozilla Developer Network: flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis).
    */
    flexBasis: {
      
  /**
   
   
   * ```css
   * .flex-basis-AUTO {
   *   flex-basis: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-FILL {
   *   flex-basis: fill;
   * }
   * ```
   */
  readonly FILL: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-MAX_CONTENT {
   *   flex-basis: max-content;
   * }
   * ```
   */
  readonly MAX_CONTENT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-MIN_CONTENT {
   *   flex-basis: min-content;
   * }
   * ```
   */
  readonly MIN_CONTENT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-FIT_CONTENT {
   *   flex-basis: fit-content;
   * }
   * ```
   */
  readonly FIT_CONTENT: IDecorators;
  

  /**
   
   
   * ```css
   * .flex-basis-CONTENT {
   *   flex-basis: content;
   * }
   * ```
   */
  readonly CONTENT: IDecorators;
  
    }
  

    
  /**
    * ### flex-grow
The flex-grow CSS property sets the flex grow factor of a flex item main size. It specifies how much of the remaining space in the flex container should be assigned to the item (the flex grow factor)
[Mozilla Developer Network: flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow).
    */
    flexGrow: {
      
    }
  

    
  /**
    * ### flex-shrink
The flex-shrink CSS property sets the flex shrink factor of a flex item. If the size of all flex items is larger than the flex container, items shrink to fit according to flex-shrink.
[Mozilla Developer Network: flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink).
    */
    flexShrink: {
      
    }
  

    
  /**
    * ### box-shadow
The box-shadow CSS property adds shadow effects around an element's frame. You can set multiple effects separated by commas. A box shadow is described by X and Y offsets relative to the element, blur and spread radius, and color.
[Mozilla Developer Network: box-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/box-shadow).
    */
    boxShadow: {
      
    }
  

    
  /**
    * ### text-shadow
The text-shadow CSS property adds shadows to text. It accepts a comma-separated list of shadows to be applied to the text and any of its decorations. Each shadow is described by some combination of X and Y offsets from the element, blur radius, and color.
[Mozilla Developer Network: text-shadow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-shadow).
    */
    textShadow: {
      
    }
  

    
  /**
    * ### outline
The outline CSS property is a shorthand to set various outline properties in a single declaration: outline-style, outline-width, and outline-color.
[Mozilla Developer Network: outline](https://developer.mozilla.org/en-US/docs/Web/CSS/outline).
    */
    outline: {
      
  /**
   
   
   * ```css
   * .outline-NONE {
   *   outline: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### pointer-events
The pointer-events CSS property sets under what circumstances (if any) a particular graphic element can become the target of pointer events.
[Mozilla Developer Network: pointer-events](https://developer.mozilla.org/en-US/docs/Web/CSS/pointer-events).
    */
    pointerEvents: {
      
  /**
   
   
   * ```css
   * .pointer-events-NONE {
   *   pointer-events: none}
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .pointer-events-AUTO {
   *   pointer-events: auto}
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### resize
The resize CSS property sets whether an element is resizable, and if so, in which directions.
[Mozilla Developer Network: resize](https://developer.mozilla.org/en-US/docs/Web/CSS/resize).
    */
    resize: {
      
  /**
   
   
   * ```css
   * .resize-BOTH {
   *   resize: both;
   * }
   * ```
   */
  readonly BOTH: IDecorators;
  

  /**
   
   
   * ```css
   * .resize-NONE {
   *   resize: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .resize-VERTICAL {
   *   resize: vertical;
   * }
   * ```
   */
  readonly VERTICAL: IDecorators;
  

  /**
   
   
   * ```css
   * .resize-HORIZONTAL {
   *   resize: horizontal;
   * }
   * ```
   */
  readonly HORIZONTAL: IDecorators;
  
    }
  

    
  /**
    * ### user-select
The user-select CSS property controls whether the user can select text. This doesn't have any effect on content loaded as chrome, except in textboxes.
[Mozilla Developer Network: user-select](https://developer.mozilla.org/en-US/docs/Web/CSS/user-select).
    */
    userSelect: {
      
  /**
   
   
   * ```css
   * .user-select-NONE {
   *   user-select: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .user-select-TEXT {
   *   user-select: text;
   * }
   * ```
   */
  readonly TEXT: IDecorators;
  

  /**
   
   
   * ```css
   * .user-select-ALL {
   *   user-select: all;
   * }
   * ```
   */
  readonly ALL: IDecorators;
  

  /**
   
   
   * ```css
   * .user-select-AUTO {
   *   user-select: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### cursor
The cursor CSS property sets the type of cursor, if any, to show when the mouse pointer is over an element.
[Mozilla Developer Network: cursor](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor).
    */
    cursor: {
      
  /**
   
   
   * ```css
   * .cursor-AUTO {
   *   cursor: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-DEFAULT {
   *   cursor: default;
   * }
   * ```
   */
  readonly DEFAULT: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-POINTER {
   *   cursor: pointer;
   * }
   * ```
   */
  readonly POINTER: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-WAIT {
   *   cursor: wait;
   * }
   * ```
   */
  readonly WAIT: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-TEXT {
   *   cursor: text;
   * }
   * ```
   */
  readonly TEXT: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-MOVE {
   *   cursor: move;
   * }
   * ```
   */
  readonly MOVE: IDecorators;
  

  /**
   
   
   * ```css
   * .cursor-NOT_ALLOWED {
   *   cursor: not-allowed;
   * }
   * ```
   */
  readonly NOT_ALLOWED: IDecorators;
  
    }
  

    
  /**
    * ### fill
The fill attribute has two different meanings. For shapes and text it's a presentation attribute that defines the color (or any SVG paint servers like gradients or patterns) used to paint the element; for animation it defines the final state of the animation.
[Mozilla Developer Network: fill](https://developer.mozilla.org/en-US/docs/Web/CSS/fill).
    */
    fill: {
      
  /**
   
   
   * ```css
   * .fill-CURRENT {
   *   fill: currentColor;
   * }
   * ```
   */
  readonly CURRENT: IDecorators;
  
    }
  

    
  /**
    * ### appearance
The appearance CSS property is used to display an element using platform-native styling based on the operating system's theme.
[Mozilla Developer Network: appearance](https://developer.mozilla.org/en-US/docs/Web/CSS/appearance).
    */
    appearance: {
      
  /**
   
   
   * ```css
   * .appearance-NONE {
   *   appearance: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### font-weight
The font-weight CSS property sets the weight (or boldness) of the font. The weights available depend on the font-family you are using.
[Mozilla Developer Network: font-weight](https://developer.mozilla.org/en-US/docs/Web/CSS/font-weight).
    */
    fontWeight: {
      
    }
  

    
  /**
    * ### font-family
The font-family CSS property specifies a prioritized list of one or more font family names and/or generic family names for the selected element.
[Mozilla Developer Network: font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family).
    */
    fontFamily: {
      
    }
  

    
  /**
    * ### color
Sets the foreground color value of an element's text and text decorations, and sets the currentcolor value.
[Mozilla Developer Network: color](https://developer.mozilla.org/en-US/docs/Web/CSS/color).
    */
    color: {
      
  /**
   
   
   * ```css
   * .color-RED {
   *   color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .color-BLUE {
   *   color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .color-GREEN {
   *   color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .color-PURPLE {
   *   color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### text-align
The text-align CSS property sets the horizontal alignment of a block element or table-cell box. This means it works like vertical-align but in the horizontal direction.
[Mozilla Developer Network: text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align).
    */
    textAlign: {
      
  /**
   
   
   * ```css
   * .text-align-LEFT {
   *   text-align: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .text-align-CENTER {
   *   text-align: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .text-align-RIGHT {
   *   text-align: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .text-align-JUSTIFY {
   *   text-align: justify;
   * }
   * ```
   */
  readonly JUSTIFY: IDecorators;
  
    }
  

    
  /**
    * ### font-size
The font-size CSS property sets the size of the font. This property is also used to compute the size of em, ex, and other relative <length> units.
[Mozilla Developer Network: font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size).
    */
    fontSize: {
      
    }
  

    
  /**
    * ### text-decoration-line
The text-decoration-line CSS property sets the kind of decoration that is used on text in an element, such as an underline or overline.
[Mozilla Developer Network: text-decoration-line](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-line).
    */
    textDecorationLine: {
      
  /**
   
   
   * ```css
   * .text-decoration-line-UNDERLINE {
   *   text-decoration-line: underline;
   * }
   * ```
   */
  readonly UNDERLINE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-line-LINE_THROUGH {
   *   text-decoration-line: line-through;
   * }
   * ```
   */
  readonly LINE_THROUGH: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-line-NONE {
   *   text-decoration-line: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-color
The text-decoration-color CSS property sets the color of decorations added to text by text-decoration-line.
[Mozilla Developer Network: text-decoration-color](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-color).
    */
    textDecorationColor: {
      
  /**
   
   
   * ```css
   * .text-decoration-color-RED {
   *   text-decoration-color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-color-BLUE {
   *   text-decoration-color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-color-GREEN {
   *   text-decoration-color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-color-PURPLE {
   *   text-decoration-color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-style
The text-decoration-style CSS property sets the style of the lines specified by text-decoration-line. The style applies to all lines that are set with text-decoration-line.
[Mozilla Developer Network: text-decoration-style](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-style).
    */
    textDecorationStyle: {
      
  /**
   
   
   * ```css
   * .text-decoration-style-SOLID {
   *   text-decoration-style: solid;
   * }
   * ```
   */
  readonly SOLID: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-DOUBLE {
   *   text-decoration-style: double;
   * }
   * ```
   */
  readonly DOUBLE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-DOTTED {
   *   text-decoration-style: dotted;
   * }
   * ```
   */
  readonly DOTTED: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-DASHED {
   *   text-decoration-style: dashed;
   * }
   * ```
   */
  readonly DASHED: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-style-WAVY {
   *   text-decoration-style: wavy;
   * }
   * ```
   */
  readonly WAVY: IDecorators;
  
    }
  

    
  /**
    * ### text-decoration-thickness
The text-decoration-thickness CSS property sets the thickness, or width, of the decoration line that is used on text in an element, such as a line-through, underline, or overline.
[Mozilla Developer Network: text-decoration-thickness](https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration-thickness).
    */
    textDecorationThickness: {
      
  /**
   
   
   * ```css
   * .text-decoration-thickness-AUTO {
   *   text-decoration-thickness: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .text-decoration-thickness-FROM_FONT {
   *   text-decoration-thickness: from-font;
   * }
   * ```
   */
  readonly FROM_FONT: IDecorators;
  
    }
  

    
  /**
    * ### -webkit-font-smoothing
The font-smooth CSS property controls the application of anti-aliasing when fonts are rendered.
[Mozilla Developer Network: -webkit-font-smoothing](https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-font-smoothing).
    */
    fontSmoothing: {
      
  /**
   
   
   * ```css
   * .font-smoothing-ANTIALIASED {
   *   -webkit-font-smoothing: antialiased;-moz-osx-font-smoothing: grayscale;
   * }
   * ```
   */
  readonly ANTIALIASED: IDecorators;
  

  /**
   
   
   * ```css
   * .font-smoothing-SUBPIXEL_ANTIALIASED {
   *   -webkit-font-smoothing: auto;-moz-osx-font-smoothing: auto;
   * }
   * ```
   */
  readonly SUBPIXEL_ANTIALIASED: IDecorators;
  
    }
  

    
  /**
    * ### font-style
The font-style CSS property sets whether a font should be styled with a normal, italic, or oblique face from its font-family.
[Mozilla Developer Network: font-style](https://developer.mozilla.org/en-US/docs/Web/CSS/font-style).
    */
    fontStyle: {
      
    }
  

    
  /**
    * ### text-transform
The text-transform CSS property specifies how to capitalize an element's text. It can be used to make text appear in all-uppercase or all-lowercase, or with each word capitalized. It also can help improve legibility for ruby.
[Mozilla Developer Network: text-transform](https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform).
    */
    textTransform: {
      
  /**
   
   
   * ```css
   * .text-transform-UPPERCASE {
   *   text-transform: uppercase}
   * ```
   */
  readonly UPPERCASE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-transform-LOWERCASE {
   *   text-transform: lowercase}
   * ```
   */
  readonly LOWERCASE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-transform-CAPITALIZE {
   *   text-transform: capitalize}
   * ```
   */
  readonly CAPITALIZE: IDecorators;
  

  /**
   
   
   * ```css
   * .text-transform-NONE {
   *   text-transform: none}
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### vertical-align
The vertical-align CSS property sets vertical alignment of an inline, inline-block or table-cell box.
[Mozilla Developer Network: vertical-align](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align).
    */
    verticalAlign: {
      
  /**
   
   
   * ```css
   * .vertical-align-BASELINE {
   *   vertical-align: baseline;
   * }
   * ```
   */
  readonly BASELINE: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-TOP {
   *   vertical-align: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-MIDDLE {
   *   vertical-align: middle;
   * }
   * ```
   */
  readonly MIDDLE: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-BOTTOM {
   *   vertical-align: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-SUB {
   *   vertical-align: sub;
   * }
   * ```
   */
  readonly SUB: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-SUPER {
   *   vertical-align: super;
   * }
   * ```
   */
  readonly SUPER: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-TEXT_TOP {
   *   vertical-align: text-top;
   * }
   * ```
   */
  readonly TEXT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .vertical-align-TEXT_BOTTOM {
   *   vertical-align: text-bottom;
   * }
   * ```
   */
  readonly TEXT_BOTTOM: IDecorators;
  
    }
  

    
  /**
    * ### height
The height CSS property specifies the height of an element. By default, the property defines the height of the content area. If box-sizing is set to border-box, however, it instead determines the height of the border area.
[Mozilla Developer Network: height](https://developer.mozilla.org/en-US/docs/Web/CSS/height).
    */
    height: {
      
  /**
   
   
   * ```css
   * .height-AUTO {
   *   height: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### white-space
The white-space CSS property sets how white space inside an element is handled.
[Mozilla Developer Network: white-space](https://developer.mozilla.org/en-US/docs/Web/CSS/white-space).
    */
    whitespace: {
      
  /**
   
   
   * ```css
   * .whitespace-NORMAL {
   *   white-space: normal;
   * }
   * ```
   */
  readonly NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-NO_WRAP {
   *   white-space: nowrap;
   * }
   * ```
   */
  readonly NO_WRAP: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-PRE {
   *   white-space: pre;
   * }
   * ```
   */
  readonly PRE: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-PRE_LINE {
   *   white-space: pre-line;
   * }
   * ```
   */
  readonly PRE_LINE: IDecorators;
  

  /**
   
   
   * ```css
   * .whitespace-PRE_WRAP {
   *   white-space: pre-wrap;
   * }
   * ```
   */
  readonly PRE_WRAP: IDecorators;
  
    }
  

    
  /**
    * ### top
The top CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: top](https://developer.mozilla.org/en-US/docs/Web/CSS/top).
    */
    top: {
      
  /**
   
   
   * ```css
   * .top-AUTO {
   *   top: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .top-SPACE_1 {
   *   top: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### overflow-wrap
The overflow-wrap CSS property applies to inline elements, setting whether the browser should insert line breaks within an otherwise unbreakable string to prevent text from overflowing its line box.
[Mozilla Developer Network: overflow-wrap](https://developer.mozilla.org/en-US/docs/Web/CSS/overflow-wrap).
    */
    overflowWrap: {
      
  /**
   
   
   * ```css
   * .overflow-wrap-NORMAL {
   *   overflow-wrap: normal;
   * }
   * ```
   */
  readonly NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .overflow-wrap-BREAK_WORD {
   *   overflow-wrap: break-word;
   * }
   * ```
   */
  readonly BREAK_WORD: IDecorators;
  
    }
  

    
  /**
    * ### word-break
The word-break CSS property sets whether line breaks appear wherever the text would otherwise overflow its content box.
[Mozilla Developer Network: word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break).
    */
    wordBreak: {
      
  /**
   
   
   * ```css
   * .word-break-NORMAL {
   *   word-break: normal;
   * }
   * ```
   */
  readonly NORMAL: IDecorators;
  

  /**
   
   
   * ```css
   * .word-break-BREAK_ALL {
   *   word-break: break-all;
   * }
   * ```
   */
  readonly BREAK_ALL: IDecorators;
  
    }
  

    
  /**
    * ### text-overflow
The text-overflow CSS property sets how hidden overflow content is signaled to users. It can be clipped or display an ellipsis ('…').
[Mozilla Developer Network: text-overflow](https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow).
    */
    textOverflow: {
      
  /**
   
   
   * ```css
   * .text-overflow-CLIP {
   *   text-overflow: clip;white-space: nowrap;overflow: hidden;
   * }
   * ```
   */
  readonly CLIP: IDecorators;
  

  /**
   
   
   * ```css
   * .text-overflow-ELLIPSIS {
   *   text-overflow: ellipsis;white-space: nowrap;overflow: hidden;
   * }
   * ```
   */
  readonly ELLIPSIS: IDecorators;
  
    }
  

    
  /**
    * ### right
The right CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: right](https://developer.mozilla.org/en-US/docs/Web/CSS/right).
    */
    right: {
      
  /**
   
   
   * ```css
   * .right-AUTO {
   *   right: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .right-SPACE_1 {
   *   right: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### left
The left CSS property participates in specifying the horizontal position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: left](https://developer.mozilla.org/en-US/docs/Web/CSS/left).
    */
    left: {
      
  /**
   
   
   * ```css
   * .left-AUTO {
   *   left: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .left-SPACE_1 {
   *   left: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### bottom
The bottom CSS property participates in specifying the vertical position of a positioned element. It has no effect on non-positioned elements.
[Mozilla Developer Network: bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/bottom).
    */
    bottom: {
      
  /**
   
   
   * ```css
   * .bottom-AUTO {
   *   bottom: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .bottom-SPACE_1 {
   *   bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  
/**
  * ### letter-spacing
The letter-spacing CSS property sets the space behavior between text characters.
[Mozilla Developer Network: letter-spacing](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-spacing).
  */
  letterSpacing: {
    
  }


  

    
  /**
    * ### letter-height
The line-height CSS property sets the height of a line box. It's commonly used to set the distance between lines of text. On block-level elements, it specifies the minimum height of line boxes within the element. On non-replaced inline elements, it specifies the height that is used to calculate line box height.
[Mozilla Developer Network: letter-height](https://developer.mozilla.org/en-US/docs/Web/CSS/letter-height).
    */
    lineHeight: {
      
    }
  

    
  /**
    * ### list-style-type
The list-style-type CSS property sets the marker (such as a disc, character, or custom counter style) of a list item element.
[Mozilla Developer Network: list-style-type](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type).
    */
    listStyleType: {
      
  /**
   
   
   * ```css
   * .list-style-type-NONE {
   *   list-style-type: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .list-style-type-DISC {
   *   list-style-type: disc;
   * }
   * ```
   */
  readonly DISC: IDecorators;
  

  /**
   
   
   * ```css
   * .list-style-type-DECIMAL {
   *   list-style-type: decimal;
   * }
   * ```
   */
  readonly DECIMAL: IDecorators;
  
    }
  

    
  /**
    * ### list-style-position
The list-style-position CSS property sets the position of the ::marker relative to a list item.
[Mozilla Developer Network: list-style-position](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-position).
    */
    listStylePosition: {
      
  /**
   
   
   * ```css
   * .list-style-position-INSIDE {
   *   list-style-position: inside;
   * }
   * ```
   */
  readonly INSIDE: IDecorators;
  

  /**
   
   
   * ```css
   * .list-style-position-OUTSIDE {
   *   list-style-position: outside;
   * }
   * ```
   */
  readonly OUTSIDE: IDecorators;
  
    }
  

    
  /**
    * ### float
The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).
[Mozilla Developer Network: float](https://developer.mozilla.org/en-US/docs/Web/CSS/float).
    */
    float: {
      
  /**
   
   
   * ```css
   * .float-RIGHT {
   *   float: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .float-LEFT {
   *   float: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .float-NONE {
   *   float: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  
    }
  

    
  /**
    * ### align-content
The CSS align-content property sets the distribution of space between and around content items along a flexbox's cross-axis or a grid's block axis.
[Mozilla Developer Network: align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content).
    */
    alignContent: {
      
  /**
   
   
   * ```css
   * .align-content-START {
   *   align-content: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-CENTER {
   *   align-content: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-END {
   *   align-content: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-BETWEEN {
   *   align-content: space-between;
   * }
   * ```
   */
  readonly BETWEEN: IDecorators;
  

  /**
   
   
   * ```css
   * .align-content-AROUND {
   *   align-content: space-around;
   * }
   * ```
   */
  readonly AROUND: IDecorators;
  
    }
  

    
  /**
    * ### align-self
The align-self CSS property overrides a grid or flex item's align-items value. In Grid, it aligns the item inside the grid area. In Flexbox, it aligns the item on the cross axis.
[Mozilla Developer Network: align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self).
    */
    alignSelf: {
      
  /**
   
   
   * ```css
   * .align-self-AUTO {
   *   align-self: auto;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-START {
   *   align-self: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-CENTER {
   *   align-self: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-END {
   *   align-self: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .align-self-STRETCH {
   *   align-self: stretch;
   * }
   * ```
   */
  readonly STRETCH: IDecorators;
  
    }
  

    
  /**
    * ### justify-content
The CSS justify-content property defines how the browser distributes space between and around content items along the main-axis of a flex container, and the inline axis of a grid container.
[Mozilla Developer Network: justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content).
    */
    justifyContent: {
      
  /**
   
   
   * ```css
   * .justify-content-START {
   *   justify-content: flex-start;
   * }
   * ```
   */
  readonly START: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-CENTER {
   *   justify-content: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-END {
   *   justify-content: flex-end;
   * }
   * ```
   */
  readonly END: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-BETWEEN {
   *   justify-content: space-between;
   * }
   * ```
   */
  readonly BETWEEN: IDecorators;
  

  /**
   
   
   * ```css
   * .justify-content-AROUND {
   *   justify-content: space-around;
   * }
   * ```
   */
  readonly AROUND: IDecorators;
  
    }
  

    
  /**
    * ### margin
The margin CSS property sets the margin area on all four sides of an element. It is a shorthand for margin-top, margin-right, margin-bottom, and margin-left.
[Mozilla Developer Network: margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin).
    */
    margin: {
      
  /**
   
   
   * ```css
   * .margin-SPACE_1 {
   *   margin-top: 1rem;
   * }
.margin-SPACE_1 {
   *   margin-right: 1rem;
   * }
.margin-SPACE_1 {
   *   margin-bottom: 1rem;
   * }
.margin-SPACE_1 {
   *   margin-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-NEGATIVE_SPACE_1 {
   *   margin-top: -1rem;
   * }
.margin-NEGATIVE_SPACE_1 {
   *   margin-right: -1rem;
   * }
.margin-NEGATIVE_SPACE_1 {
   *   margin-bottom: -1rem;
   * }
.margin-NEGATIVE_SPACE_1 {
   *   margin-left: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-AUTO {
   *   margin-top: auto;;
   * }
.margin-AUTO {
   *   margin-right: auto;;
   * }
.margin-AUTO {
   *   margin-bottom: auto;;
   * }
.margin-AUTO {
   *   margin-left: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-vertical (Classy-UI)
The margin CSS property sets the margin area on vertical sides of an element. It is a shorthand for margin-top and margin-bottom.
null
    */
    marginVertical: {
      
  /**
   
   
   * ```css
   * .margin-vertical-SPACE_1 {
   *   margin-top: 1rem;
   * }
.margin-vertical-SPACE_1 {
   *   margin-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-NEGATIVE_SPACE_1 {
   *   margin-top: -1rem;
   * }
.margin-vertical-NEGATIVE_SPACE_1 {
   *   margin-bottom: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-vertical-AUTO {
   *   margin-top: auto;;
   * }
.margin-vertical-AUTO {
   *   margin-bottom: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-horizontal (Classy-UI)
The margin CSS property sets the margin area on horizontal sides of an element. It is a shorthand for margin-left and margin-right.
null
    */
    marginHorizontal: {
      
  /**
   
   
   * ```css
   * .margin-horizontal-SPACE_1 {
   *   margin-left: 1rem;
   * }
.margin-horizontal-SPACE_1 {
   *   margin-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-NEGATIVE_SPACE_1 {
   *   margin-left: -1rem;
   * }
.margin-horizontal-NEGATIVE_SPACE_1 {
   *   margin-right: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-horizontal-AUTO {
   *   margin-left: auto;;
   * }
.margin-horizontal-AUTO {
   *   margin-right: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### max-height
The max-height CSS property sets the maximum height of an element. It prevents the used value of the height property from becoming larger than the value specified for max-height.
[Mozilla Developer Network: max-height](https://developer.mozilla.org/en-US/docs/Web/CSS/max-height).
    */
    maxHeight: {
      
  /**
   
   
   * ```css
   * .max-height-FULL {
   *   max-height: 100%;
   * }
   * ```
   */
  readonly FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .max-height-SCREEN {
   *   max-height: 100vh;
   * }
   * ```
   */
  readonly SCREEN: IDecorators;
  
    }
  

    
  /**
    * ### max-width
The max-width CSS property sets the maximum width of an element. It prevents the used value of the width property from becoming larger than the value specified by max-width.
[Mozilla Developer Network: max-width](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width).
    */
    maxWidth: {
      
  /**
   
   
   * ```css
   * .max-width-MOBILE {
   *   max-width: 640px;
   * }
   * ```
   */
  readonly MOBILE: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-TABLET {
   *   max-width: 768px;
   * }
   * ```
   */
  readonly TABLET: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-LAPTOP {
   *   max-width: 1024px;
   * }
   * ```
   */
  readonly LAPTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .max-width-DESKTOP {
   *   max-width: 1280px;
   * }
   * ```
   */
  readonly DESKTOP: IDecorators;
  
    }
  

    
  /**
    * ### min-height
The min-height CSS property sets the minimum height of an element. It prevents the used value of the height property from becoming smaller than the value specified for min-height.
[Mozilla Developer Network: min-height](https://developer.mozilla.org/en-US/docs/Web/CSS/min-height).
    */
    minHeight: {
      
    }
  

    
  /**
    * ### min-width
The min-width CSS property sets the minimum width of an element. It prevents the used value of the width property from becoming smaller than the value specified for min-width.
[Mozilla Developer Network: min-width](https://developer.mozilla.org/en-US/docs/Web/CSS/min-width).
    */
    minWidth: {
      
  /**
   
   
   * ```css
   * .min-width-MOBILE {
   *   min-width: 640px;
   * }
   * ```
   */
  readonly MOBILE: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-TABLET {
   *   min-width: 768px;
   * }
   * ```
   */
  readonly TABLET: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-LAPTOP {
   *   min-width: 1024px;
   * }
   * ```
   */
  readonly LAPTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .min-width-DESKTOP {
   *   min-width: 1280px;
   * }
   * ```
   */
  readonly DESKTOP: IDecorators;
  
    }
  

    
  /**
    * ### object-fit
The object-fit CSS property sets how the content of a replaced element, such as an <img> or <video>, should be resized to fit its container.
[Mozilla Developer Network: object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit).
    */
    objectFit: {
      
  /**
   
   
   * ```css
   * .object-fit-CONTAIN {
   *   object-fit: contain;
   * }
   * ```
   */
  readonly CONTAIN: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-COVER {
   *   object-fit: cover;
   * }
   * ```
   */
  readonly COVER: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-FILL {
   *   object-fit: fill;
   * }
   * ```
   */
  readonly FILL: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-NONE {
   *   object-fit: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .object-fit-SCALE_DOWN {
   *   object-fit: scale-down;
   * }
   * ```
   */
  readonly SCALE_DOWN: IDecorators;
  
    }
  

    
  /**
    * ### object-position
The object-position CSS property specifies the alignment of the selected replaced element's contents within the element's box. Areas of the box which aren't covered by the replaced element's object will show the element's background.
[Mozilla Developer Network: object-position](https://developer.mozilla.org/en-US/docs/Web/CSS/object-position).
    */
    objectPosition: {
      
  /**
   
   
   * ```css
   * .object-position-BOTTOM {
   *   object-position: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-CENTER {
   *   object-position: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-LEFT {
   *   object-position: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-LEFT_BOTTOM {
   *   object-position: left bottom;
   * }
   * ```
   */
  readonly LEFT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-LEFT_TOP {
   *   object-position: left top;
   * }
   * ```
   */
  readonly LEFT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-RIGHT {
   *   object-position: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-RIGHT_BOTTOM {
   *   object-position: right bottom;
   * }
   * ```
   */
  readonly RIGHT_BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-RIGHT_TOP {
   *   object-position: right top;
   * }
   * ```
   */
  readonly RIGHT_TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .object-position-TOP {
   *   object-position: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  
    }
  

    
  /**
    * ### opacity
The opacity CSS property sets the opacity of an element. Opacity is the degree to which content behind an element is hidden, and is the opposite of transparency.
[Mozilla Developer Network: opacity](https://developer.mozilla.org/en-US/docs/Web/CSS/opacity).
    */
    opacity: {
      
    }
  

    
  /**
    * ### order
The order CSS property sets the order to lay out an item in a flex or grid container. Items in a container are sorted by ascending order value and then by their source code order.
[Mozilla Developer Network: order](https://developer.mozilla.org/en-US/docs/Web/CSS/order).
    */
    order: {
      
  /**
   
   
   * ```css
   * .order-FIRST {
   *   order: -9999;
   * }
   * ```
   */
  readonly FIRST: IDecorators;
  

  /**
   
   
   * ```css
   * .order-LAST {
   *   order: 9999;
   * }
   * ```
   */
  readonly LAST: IDecorators;
  

  /**
   
   
   * ```css
   * .order-NONE {
   *   order: 0;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_1 {
   *   order: 1;
   * }
   * ```
   */
  readonly ORDER_1: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_2 {
   *   order: 2;
   * }
   * ```
   */
  readonly ORDER_2: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_3 {
   *   order: 3;
   * }
   * ```
   */
  readonly ORDER_3: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_4 {
   *   order: 4;
   * }
   * ```
   */
  readonly ORDER_4: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_5 {
   *   order: 5;
   * }
   * ```
   */
  readonly ORDER_5: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_6 {
   *   order: 6;
   * }
   * ```
   */
  readonly ORDER_6: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_7 {
   *   order: 7;
   * }
   * ```
   */
  readonly ORDER_7: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_8 {
   *   order: 8;
   * }
   * ```
   */
  readonly ORDER_8: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_9 {
   *   order: 9;
   * }
   * ```
   */
  readonly ORDER_9: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_10 {
   *   order: 10;
   * }
   * ```
   */
  readonly ORDER_10: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_11 {
   *   order: 11;
   * }
   * ```
   */
  readonly ORDER_11: IDecorators;
  

  /**
   
   
   * ```css
   * .order-ORDER_12 {
   *   order: 12;
   * }
   * ```
   */
  readonly ORDER_12: IDecorators;
  
    }
  

    
  /**
    * ### padding
The padding CSS property sets the padding area on all four sides of an element. It is a shorthand for padding-top, padding-right, padding-bottom, and padding-left.
[Mozilla Developer Network: padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding).
    */
    padding: {
      
  /**
   
   
   * ```css
   * .padding-SPACE_1 {
   *   padding-top: 1rem;
   * }
.padding-SPACE_1 {
   *   padding-right: 1rem;
   * }
.padding-SPACE_1 {
   *   padding-bottom: 1rem;
   * }
.padding-SPACE_1 {
   *   padding-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### padding-vertical (Classy-UI)
The padding CSS property sets the padding area on the vertical sides of an element. It is a shorthand for padding-top and padding-bottom.
null
    */
    paddingVertical: {
      
  /**
   
   
   * ```css
   * .padding-vertical-SPACE_1 {
   *   padding-top: 1rem;
   * }
.padding-vertical-SPACE_1 {
   *   padding-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### padding-horizontal (Classy-UI)
The padding CSS property sets the padding area on the horizontal sides of an element. It is a shorthand for padding-left and padding-right.
null
    */
    paddingHorizontal: {
      
  /**
   
   
   * ```css
   * .padding-horizontal-SPACE_1 {
   *   padding-left: 1rem;
   * }
.padding-horizontal-SPACE_1 {
   *   padding-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### padding-top
The padding-top CSS property sets the height of the padding area on the top of an element.
[Mozilla Developer Network: padding-top](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-top).
    */
    paddingTop: {
      
  /**
   
   
   * ```css
   * .padding-top-SPACE_1 {
   *   padding-top: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### padding-right
The padding-right CSS property sets the width of the padding area on the right of an element.
[Mozilla Developer Network: padding-right](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-right).
    */
    paddingRight: {
      
  /**
   
   
   * ```css
   * .padding-right-SPACE_1 {
   *   padding-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### padding-bottom
The padding-bottom CSS property sets the height of the padding area on the bottom of an element.
[Mozilla Developer Network: padding-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-bottom).
    */
    paddingBottom: {
      
  /**
   
   
   * ```css
   * .padding-bottom-SPACE_1 {
   *   padding-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### padding-left
The padding-left CSS property sets the width of the padding area on the left of an element.
[Mozilla Developer Network: padding-left](https://developer.mozilla.org/en-US/docs/Web/CSS/padding-left).
    */
    paddingLeft: {
      
  /**
   
   
   * ```css
   * .padding-left-SPACE_1 {
   *   padding-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### margin-top
The margin-top CSS property sets the margin area on the top of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-top](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-top).
    */
    marginTop: {
      
  /**
   
   
   * ```css
   * .margin-top-SPACE_1 {
   *   margin-top: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-NEGATIVE_SPACE_1 {
   *   margin-top: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-top-AUTO {
   *   margin-top: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-right
The margin-right CSS property sets the margin area on the right of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-right](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-right).
    */
    marginRight: {
      
  /**
   
   
   * ```css
   * .margin-right-SPACE_1 {
   *   margin-right: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-NEGATIVE_SPACE_1 {
   *   margin-right: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-right-AUTO {
   *   margin-right: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### margin-bottom
The margin-bottom CSS property sets the margin area on the bottom of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-bottom](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-bottom).
    */
    marginBottom: {
      
  /**
   
   
   * ```css
   * .margin-bottom-SPACE_1 {
   *   margin-bottom: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-NEGATIVE_SPACE_1 {
   *   margin-bottom: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-bottom-AUTO {
   *   margin-bottom: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### ::placeholder
The ::placeholder CSS pseudo-element represents the placeholder text in an <input> or <textarea> element.
[Mozilla Developer Network: ::placeholder](https://developer.mozilla.org/en-US/docs/Web/CSS/::placeholder).
    */
    placeholder: {
      
  /**
   
   
   * ```css
   * .placeholder-RED::placeholder {
   *   color: red;
   * }
   * ```
   */
  readonly RED: IDecorators;
  

  /**
   
   
   * ```css
   * .placeholder-BLUE::placeholder {
   *   color: blue;
   * }
   * ```
   */
  readonly BLUE: IDecorators;
  

  /**
   
   
   * ```css
   * .placeholder-GREEN::placeholder {
   *   color: var(--colors-GREEN);
   * }
   * ```
   */
  readonly GREEN: IDecorators;
  

  /**
   
   
   * ```css
   * .placeholder-PURPLE::placeholder {
   *   color: var(--colors-PURPLE);
   * }
   * ```
   */
  readonly PURPLE: IDecorators;
  
    }
  

    
  /**
    * ### margin-left
The margin-left CSS property sets the margin area on the left of an element. A positive value places it farther from its neighbors, while a negative value places it closer.
[Mozilla Developer Network: margin-left](https://developer.mozilla.org/en-US/docs/Web/CSS/margin-left).
    */
    marginLeft: {
      
  /**
   
   
   * ```css
   * .margin-left-SPACE_1 {
   *   margin-left: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-NEGATIVE_SPACE_1 {
   *   margin-left: -1rem;
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .margin-left-AUTO {
   *   margin-left: auto;;
   * }
   * ```
   */
  readonly AUTO: IDecorators;
  
    }
  

    
  /**
    * ### stroke
The stroke attribute is a presentation attribute defining the color (or any SVG paint servers like gradients or patterns) used to paint the outline of the shape.
[Mozilla Developer Network: stroke](https://developer.mozilla.org/en-US/docs/Web/CSS/stroke).
    */
    stroke: {
      
  /**
   
   
   * ```css
   * .stroke-CURRENT {
   *   stroke: currentColor;
   * }
   * ```
   */
  readonly CURRENT: IDecorators;
  
    }
  

    
  /**
    * ### width
The width attribute defines the horizontal length of an element in the user coordinate system.
[Mozilla Developer Network: width](https://developer.mozilla.org/en-US/docs/Web/CSS/width).
    */
    width: {
      
  /**
   
   
   * ```css
   * .width-auto {
   *   width: auto;
   * }
   * ```
   */
  readonly auto: IDecorators;
  

  /**
   
   
   * ```css
   * .width-MOBILE {
   *   width: 640px;
   * }
   * ```
   */
  readonly MOBILE: IDecorators;
  

  /**
   
   
   * ```css
   * .width-TABLET {
   *   width: 768px;
   * }
   * ```
   */
  readonly TABLET: IDecorators;
  

  /**
   
   
   * ```css
   * .width-LAPTOP {
   *   width: 1024px;
   * }
   * ```
   */
  readonly LAPTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .width-DESKTOP {
   *   width: 1280px;
   * }
   * ```
   */
  readonly DESKTOP: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_2 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_1_2: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_3 {
   *   width: 33.333333%;
   * }
   * ```
   */
  readonly SPAN_1_3: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_3 {
   *   width: 66.666667%;
   * }
   * ```
   */
  readonly SPAN_2_3: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_4 {
   *   width: 25%;
   * }
   * ```
   */
  readonly SPAN_1_4: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_4 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_2_4: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_4 {
   *   width: 75%;
   * }
   * ```
   */
  readonly SPAN_3_4: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_5 {
   *   width: 20%;
   * }
   * ```
   */
  readonly SPAN_1_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_5 {
   *   width: 40%;
   * }
   * ```
   */
  readonly SPAN_2_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_5 {
   *   width: 60%;
   * }
   * ```
   */
  readonly SPAN_3_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_4_5 {
   *   width: 80%;
   * }
   * ```
   */
  readonly SPAN_4_5: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_6 {
   *   width: 16.666667%;
   * }
   * ```
   */
  readonly SPAN_1_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_6 {
   *   width: 33.333333%;
   * }
   * ```
   */
  readonly SPAN_2_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_6 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_3_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_4_6 {
   *   width: 66.666667%;
   * }
   * ```
   */
  readonly SPAN_4_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_5_6 {
   *   width: 83.333333%;
   * }
   * ```
   */
  readonly SPAN_5_6: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_1_12 {
   *   width: 8.333333%;
   * }
   * ```
   */
  readonly SPAN_1_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_2_12 {
   *   width: 16.666667%;
   * }
   * ```
   */
  readonly SPAN_2_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_3_12 {
   *   width: 25%;
   * }
   * ```
   */
  readonly SPAN_3_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_4_12 {
   *   width: 33.333333%;
   * }
   * ```
   */
  readonly SPAN_4_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_5_12 {
   *   width: 41.666667%;
   * }
   * ```
   */
  readonly SPAN_5_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_6_12 {
   *   width: 50%;
   * }
   * ```
   */
  readonly SPAN_6_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_7_12 {
   *   width: 58.333333%;
   * }
   * ```
   */
  readonly SPAN_7_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_8_12 {
   *   width: 66.666667%;
   * }
   * ```
   */
  readonly SPAN_8_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_9_12 {
   *   width: 75%;
   * }
   * ```
   */
  readonly SPAN_9_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_10_12 {
   *   width: 83.333333%;
   * }
   * ```
   */
  readonly SPAN_10_12: IDecorators;
  

  /**
   
   
   * ```css
   * .width-SPAN_11_12 {
   *   width: 91.666667%;
   * }
   * ```
   */
  readonly SPAN_11_12: IDecorators;
  
    }
  

    
  /**
    * ### z-index
The z-index CSS property sets the z-order of a positioned element and its descendants or flex items. Overlapping elements with a larger z-index cover those with a smaller one.
[Mozilla Developer Network: z-index](https://developer.mozilla.org/en-US/docs/Web/CSS/z-index).
    */
    zIndex: {
      
    }
  

    
  /**
    * ### gap
The grid-gap CSS property sets the gaps (gutters) between rows and columns. It is a shorthand for row-gap and column-gap.
[Mozilla Developer Network: gap](https://developer.mozilla.org/en-US/docs/Web/CSS/gap).
    */
    gridGap: {
      
  /**
   
   
   * ```css
   * .grid-gap-SPACE_1 {
   *   grid-row-gap: 1rem;
   * }
.grid-gap-SPACE_1 {
   *   grid-column-gap: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### grid-row-gap
The row-gap CSS property sets the size of the gap (gutter) between an element's grid rows.
[Mozilla Developer Network: grid-row-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-row-gap).
    */
    gridRowGap: {
      
  /**
   
   
   * ```css
   * .grid-row-gap-SPACE_1 {
   *   grid-row-gap: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### grid-column-gap
The column-gap CSS property sets the size of the gap (gutter) between an element's grid columns.
[Mozilla Developer Network: grid-column-gap](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-gap).
    */
    gridColumnGap: {
      
  /**
   
   
   * ```css
   * .grid-column-gap-SPACE_1 {
   *   grid-column-gap: 1rem;
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  
    }
  

    
  /**
    * ### grid-template-columns
The grid-template-columns CSS property defines the line names and track sizing functions of the grid columns.
[Mozilla Developer Network: grid-template-columns](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-columns).
    */
    gridTemplateColumns: {
      
    }
  

    
  /**
    * ### grid-column
The grid-column CSS property is a shorthand property for grid-column-start and grid-column-end specifying a grid item's size and location within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the inline-start and inline-end edge of its grid area.
[Mozilla Developer Network: grid-column](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column).
    */
    gridColumn: {
      
    }
  

    
  /**
    * ### grid-column-start
The grid-column-start CSS property specifies a grid item’s start position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement. This start position defines the block-start edge of the grid area.
[Mozilla Developer Network: grid-column-start](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-start).
    */
    gridColumnStart: {
      
    }
  

    
  /**
    * ### grid-column-end
The grid-column-end CSS property specifies a grid item’s end position within the grid column by contributing a line, a span, or nothing (automatic) to its grid placement, thereby specifying the block-end edge of its grid area.
[Mozilla Developer Network: grid-column-end](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-column-end).
    */
    gridColumnEnd: {
      
    }
  

    
  /**
    * ### transform-origin
The transform-origin CSS property sets the origin for an element's transformations.
[Mozilla Developer Network: transform-origin](https://developer.mozilla.org/en-US/docs/Web/CSS/transform-origin).
    */
    transformOrigin: {
      
  /**
   
   
   * ```css
   * .transform-origin-CENTER {
   *   transform-origin: center;
   * }
   * ```
   */
  readonly CENTER: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-TOP {
   *   transform-origin: top;
   * }
   * ```
   */
  readonly TOP: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-TOP_RIGHT {
   *   transform-origin: top right;
   * }
   * ```
   */
  readonly TOP_RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-RIGHT {
   *   transform-origin: right;
   * }
   * ```
   */
  readonly RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-BOTTOM_RIGHT {
   *   transform-origin: bottom right;
   * }
   * ```
   */
  readonly BOTTOM_RIGHT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-BOTTOM {
   *   transform-origin: bottom;
   * }
   * ```
   */
  readonly BOTTOM: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-BOTTOM_LEFT {
   *   transform-origin: bottom left;
   * }
   * ```
   */
  readonly BOTTOM_LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-LEFT {
   *   transform-origin: left;
   * }
   * ```
   */
  readonly LEFT: IDecorators;
  

  /**
   
   
   * ```css
   * .transform-origin-TOP_LEFT {
   *   transform-origin: top left;
   * }
   * ```
   */
  readonly TOP_LEFT: IDecorators;
  
    }
  

    
  /**
    * ### transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[Mozilla Developer Network: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
    */
    scale: {
      
  /**
   
   
   * ```css
   * .scale-NONE {
   *   transform:scale(0);
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_50 {
   *   transform:scale(.5);
   * }
   * ```
   */
  readonly SCALE_50: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_75 {
   *   transform:scale(.75);
   * }
   * ```
   */
  readonly SCALE_75: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_90 {
   *   transform:scale(.9);
   * }
   * ```
   */
  readonly SCALE_90: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_95 {
   *   transform:scale(.95);
   * }
   * ```
   */
  readonly SCALE_95: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_100 {
   *   transform:scale(1);
   * }
   * ```
   */
  readonly SCALE_100: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_105 {
   *   transform:scale(1.05);
   * }
   * ```
   */
  readonly SCALE_105: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_110 {
   *   transform:scale(1.1);
   * }
   * ```
   */
  readonly SCALE_110: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_125 {
   *   transform:scale(1.25);
   * }
   * ```
   */
  readonly SCALE_125: IDecorators;
  

  /**
   
   
   * ```css
   * .scale-SCALE_150 {
   *   transform:scale(1.5);
   * }
   * ```
   */
  readonly SCALE_150: IDecorators;
  
    }
  

    
  /**
    * ### transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[Mozilla Developer Network: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
    */
    rotate: {
      
  /**
   
   
   * ```css
   * .rotate-NEGATIVE_DEG_180 {
   *   transform:rotate(-180deg);
   * }
   * ```
   */
  readonly NEGATIVE_DEG_180: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-NEGATIVE_DEG_90 {
   *   transform:rotate(-90deg);
   * }
   * ```
   */
  readonly NEGATIVE_DEG_90: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-NEGATIVE_DEG_45 {
   *   transform:rotate(-45deg);
   * }
   * ```
   */
  readonly NEGATIVE_DEG_45: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-NONE {
   *   transform:rotate(0);
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-DEG_45 {
   *   transform:rotate(45deg);
   * }
   * ```
   */
  readonly DEG_45: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-DEG_90 {
   *   transform:rotate(90deg);
   * }
   * ```
   */
  readonly DEG_90: IDecorators;
  

  /**
   
   
   * ```css
   * .rotate-DEG_180 {
   *   transform:rotate(180deg);
   * }
   * ```
   */
  readonly DEG_180: IDecorators;
  
    }
  

    
  /**
    * ### transform
The transform CSS property lets you rotate, scale, skew, or translate an element. It modifies the coordinate space of the CSS visual formatting model.
[Mozilla Developer Network: transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform).
    */
    translate: {
      
  /**
   
   
   * ```css
   * .translate-SPACE_1 {
   *   transform:translate(1rem);
   * }
   * ```
   */
  readonly SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEGATIVE_SPACE_1 {
   *   transform:translate(-1rem);
   * }
   * ```
   */
  readonly NEGATIVE_SPACE_1: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEG_FULL {
   *   transform:translate(-100%);
   * }
   * ```
   */
  readonly NEG_FULL: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-NEG_HALF {
   *   transform:translate(-50%);
   * }
   * ```
   */
  readonly NEG_HALF: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-HALF {
   *   transform:translate(50%);
   * }
   * ```
   */
  readonly HALF: IDecorators;
  

  /**
   
   
   * ```css
   * .translate-FULL {
   *   transform:translate(100%);
   * }
   * ```
   */
  readonly FULL: IDecorators;
  
    }
  

    
  /**
    * ### transition-property
The transition-property CSS property sets the CSS properties to which a transition effect should be applied.
[Mozilla Developer Network: transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property).
    */
    transitionProperty: {
      
  /**
   
   
   * ```css
   * .transition-property-NONE {
   *   transition-property: none;
   * }
   * ```
   */
  readonly NONE: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-ALL {
   *   transition-property: all;
   * }
   * ```
   */
  readonly ALL: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-DEFAULT {
   *   transition-property: background-color, border-color, color, opacity, transform;
   * }
   * ```
   */
  readonly DEFAULT: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-COLORS {
   *   transition-property: background-color, border-color, color;
   * }
   * ```
   */
  readonly COLORS: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-OPACITY {
   *   transition-property: opacity;
   * }
   * ```
   */
  readonly OPACITY: IDecorators;
  

  /**
   
   
   * ```css
   * .transition-property-TRANSFORM {
   *   transition-property: transform;
   * }
   * ```
   */
  readonly TRANSFORM: IDecorators;
  
    }
  

    
  /**
    * ### transition-timing-function
The transition-timing-function CSS property sets how intermediate values are calculated for CSS properties being affected by a transition effect.
[Mozilla Developer Network: transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function).
    */
    transitionTimingFunction: {
      
    }
  

    
  /**
    * ### transition-duration
The transition-duration CSS property sets the length of time a transition animation should take to complete. By default, the value is 0s, meaning that no animation will occur.
[Mozilla Developer Network: transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration).
    */
    transitionDuration: {
      
    }
  

    
  /**
    * ### utils (Classy-UI)
A set of utility tokens, you're welcome :-)
null
    */
    utils: {
      
  /**
   
   
   * ```css
   * .utils-CLEARFIX::after{
   *   content: "";
   *   display: table;
   *   clear: both;
   * }
   * ```
   */
  readonly CLEARFIX: IDecorators;
  

  /**
   
   
   * ```css
   * .utils-SCREEN_READER{
   *   position:absolute;
   *   width:1px;
   *   height:1px;
   *   padding:0;
   *   margin:-1px;
   *   overflow:hidden;
   *   clip:rect(0,0,0,0);
   *   white-space:nowrap;
   *   border-width:0;
   * }
   * ```
   */
  readonly SCREEN_READER: IDecorators;
  

  /**
   
   
   * ```css
   * .utils-NOT_SCREEN_READER{
   *   position:static;
   *   width:auto;
   *   height:auto;
   *   padding:0;
   *   margin:0;
   *   overflow:visible;
   *   clip:auto;
   *   white-space:normal;
   * }
   * ```
   */
  readonly NOT_SCREEN_READER: IDecorators;
  
    }
  
  }

  export const themes: {
    dark: Themes.dark
  };
  export const group: TGroup;
  export const compose: TCompose;
  export const tokens: TTokens;

  
    /**
     * ```css
     * \@media (min-width: 640px) {
      $token
}
     * ```
     */
    export const mobile: TCompose;
  

    /**
     * ```css
     * \@media (min-width: 768px) {
      $token
}
     * ```
     */
    export const tablet: TCompose;
  

    /**
     * ```css
     * \@media (min-width: 1024px) {
      $token
}
     * ```
     */
    export const laptop: TCompose;
  

    /**
     * ```css
     * \@media (min-width: 1280px) {
      $token
}
     * ```
     */
    export const desktop: TCompose;
  

}
declare module 'classy-ui/macro' {
  export * from 'classy-ui'
}
