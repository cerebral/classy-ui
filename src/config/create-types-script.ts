import { writeFileSync } from 'fs';
import { join } from 'path';

import { config as baseConfig } from '../config/base.config';
import { getUserConfig, mergeConfigs } from '../utils';
import { transform as transformClassesToTypes } from './transform-classes-to-types';
import { transform as transformConfigToClasses } from './transform-config-to-classes';

const config = mergeConfigs(baseConfig, getUserConfig());
const classes = transformConfigToClasses(config);

if (process.env.NODE_ENV !== 'test') {
  const esTypesPath = join(process.cwd(), 'es', 'classy-ui.d.ts');
  const libTypesPath = join(process.cwd(), 'lib', 'classy-ui.d.ts');
  const types = transformClassesToTypes(classes.defaults, config);
  writeFileSync(esTypesPath, types);
  writeFileSync(libTypesPath, types);
}
