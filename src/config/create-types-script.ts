import { writeFileSync } from 'fs';
import { join } from 'path';

import { evaluateConfig, getUserConfig } from '../utils';
import { transform as transformClassesToTypes } from './transform-classes-to-types';

const config = evaluateConfig({});

if (process.env.NODE_ENV !== 'test') {
  const esTypesPath = join(process.cwd(), 'es', 'classy-ui.d.ts');
  const libTypesPath = join(process.cwd(), 'lib', 'classy-ui.d.ts');
  const types = transformClassesToTypes(config);
  writeFileSync(esTypesPath, types);
  writeFileSync(libTypesPath, types);
}
