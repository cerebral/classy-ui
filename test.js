const { spawn } = require('child_process');
const storybook = spawn('npm', ['run', 'test:storybook']);

console.log('Starting storybook...');
let cypress;
storybook.stdout.on('data', data => {
  if (data.includes('started')) {
    console.log('Storybook started, starting cypress...');
    cypress = spawn('npm', ['run', 'test:cypress'], { stdio: 'inherit' });
    cypress.on('close', code => {
      process.exit(code);
    });
  }
});

storybook.on('close', code => {
  console.log(`Storybook process exited with code ${code}`);
});

process.on('exit', () => {
  storybook.kill();
  cypress && cypress.kill();
});
