import { writeFileSync } from 'fs';
import { join } from 'path';

import { evaluateConfig } from '../utils';

import { transform as transformClassesToTypes } from './transform-classes-to-types';

const config = evaluateConfig({});

if (process.env.NODE_ENV !== 'test') {
  const libTypesPath = join(process.cwd(), 'lib', 'classy-ui.d.ts');
  const types = transformClassesToTypes(config);
  writeFileSync(libTypesPath, types);
}
