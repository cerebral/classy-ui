import { IClasses, IEvaluatedConfig } from '../types';
import { getClassesFromConfig } from '../utils';

export const transform = (config: IEvaluatedConfig): IClasses => {
  return Object.keys(config.classnames).reduce((aggr, key) => {
    return {
      ...aggr,
      ...getClassesFromConfig(key, config),
    };
  }, {} as IClasses);
};
