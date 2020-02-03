import { IClasses, IEvaluatedConfig } from '../types';
import { generateShortName, getClassesFromConfig } from '../utils';

export const transform = (config: IEvaluatedConfig): IClasses => {
  let cssPropertyCount = 0;

  return Object.keys(config.classnames).reduce((aggr, key) => {
    return {
      ...aggr,
      ...getClassesFromConfig(
        key,
        config,
        (labelIndex: number) => `${generateShortName(cssPropertyCount++)}-${generateShortName(labelIndex)}`,
      ),
    };
  }, {} as IClasses);
};
