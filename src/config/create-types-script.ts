import { writeFileSync } from 'fs';
import { join } from 'path';

import { evaluateConfig } from '../utils';
import { transform as transformClassesToTypes } from './transform-classes-to-types';
import { transform as transformConfigToClasses } from './transform-config-to-classes';

const config = evaluateConfig({
  variables: {},
  classnames: {},
  screens: {},
});
const classes = transformConfigToClasses(config);

if (process.env.NODE_ENV !== 'test') {
  const esTypesPath = join(process.cwd(), 'es', 'classy-ui.d.ts');
  const libTypesPath = join(process.cwd(), 'lib', 'classy-ui.d.ts');
  const types = transformClassesToTypes(classes, config);
  writeFileSync(esTypesPath, types);
  writeFileSync(libTypesPath, types);
}
