import { IClasses, IEvaluatedConfig } from '../types';
import { generateShortName, getClassesFromConfig } from '../utils';

export const transform = (config: IEvaluatedConfig): IClasses => {
  return Object.keys(config.classnames).reduce((aggr, key, index) => {
    return {
      ...aggr,
      ...getClassesFromConfig(
        key,
        config,
        (labelIndex: number) => `${generateShortName(index)}_${generateShortName(labelIndex)}`,
      ),
    };
  }, {} as IClasses);
};
