import { IClasses, IEvaluatedConfig } from '../types';
import { generateShortName, getClassesFromConfig } from '../utils';

export const transform = (config: IEvaluatedConfig): IClasses => {
  return Object.keys(config.classnames).reduce((aggr, key, index) => {
    return {
      ...aggr,
      ...getClassesFromConfig(
        key,
        config,
        (labelIndex: number) => `${generateShortName(1 + index)}_${generateShortName(1 + labelIndex)}`,
      ),
    };
  }, {} as IClasses);
};
