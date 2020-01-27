import { writeFileSync } from 'fs';
import { join } from 'path';

export default () => {
  console.log('I AM RUNNING!!!!', process.cwd());
  // writeFileSync(join(process.cwd(), 'styles.css'), '');
  return {};
};
