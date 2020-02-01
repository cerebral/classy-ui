import { IClasses, IConfig, IEvaluatedConfig, TCssClasses } from '../types';
import { generateShortName, getClassesFromConfig } from '../utils';

const cssClasses: TCssClasses = {
  padding: ['padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
  margin: ['margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left'],
  placeholderColor: [],
  gap: ['gap'],
  rowGap: ['row-gap'],
  columnGap: ['column-gap'],
  gridTemplateColumns: ['grid-template-columns'],
  gridColumnStart: ['grid-column-start'],
  gridColumnEnd: ['grid-column-end'],
  gridTemplateRows: ['grid-template-rows'],
  gridRow: ['grid-row'],
  gridRowStart: ['grid-row-start'],
  gridRowEnd: ['grid-row-end'],
  transformOrigin: ['transform-origin'],
  scale: ['scale'],
  rotate: ['rotate'],
  translate: ['translate'],
  skew: ['skew'],
  transitionProperty: ['transition-property'],
  transitionTimingFunction: ['transition-timing-function'],
  transitionDuration: ['transition-duration'],
  gridColumn: ['grid-column'],
  width: ['width'],
  borderWidth: ['border-width', 'border-top-width', 'border-right-width', 'border-bottom-width', 'border-left-width'],
  borderColor: ['border-color', 'border-bottom-color', 'border-top-color', 'border-left-color', 'border-right-color'],
  borderRadius: [
    'border-radius',
    'border-top-left-radius',
    'border-top-right-radius',
    'border-bottom-right-radius',
    'border-bottom-left-radius',
  ],
  fontSize: ['font-size'],
  fontWeight: ['font-weight'],
  fontFamily: ['font-family'],
  letterSpacing: ['letter-spacing'],
  lineHeight: ['line-height'],
  boxShadow: ['box-shadow', 'text-shadow'],
  zIndex: ['z-index'],
  backgroundPosition: ['background-position'],
  backgroundSize: ['background-size'],
  cursor: ['cursor'],
  fill: ['fill'],
  flex: ['flex'],
  inset: ['inset'],
  listStyleType: ['list-style-type'],
  objectPosition: ['object-position'],
  opacity: ['opacity'],
  order: ['order'],
  stroke: ['stroke'],
  strokeWidth: ['stroke-width'],
  backgroundColor: ['background-color'],
  container: [],
  flexGrow: ['flex-grow'],
  flexShrink: ['flex-shrink'],
  height: ['height'],
  maxHeight: ['max-height'],
  maxWidth: ['max-width'],
  minHeight: ['min-height'],
  minWidth: ['min-width'],
  color: ['color'],
};

export const transform = (config: IEvaluatedConfig): { defaults: IClasses; themes: { [name: string]: boolean } } => {
  const keys = Object.keys(cssClasses) as Array<keyof TCssClasses>;
  let cssPropertyCount = 0;
  const defaults = keys.reduce((aggr, key) => {
    return {
      ...aggr,
      ...getClassesFromConfig(
        key,
        config,
        cssClasses[key],
        (labelIndex: number) => `${generateShortName(cssPropertyCount++)}-${generateShortName(labelIndex)}`,
      ),
    };
  }, {} as IClasses);

  return {
    defaults,
    themes: Object.keys(config.themes || {}).reduce((aggr, theme) => {
      aggr[`themes-${theme}`] = true;

      return aggr;
    }, {} as any),
  };
};
