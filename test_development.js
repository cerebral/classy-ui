const { spawn } = require('child_process');
const storybook = spawn('npm', ['run', 'test:storybook:development']);

let cypress;
storybook.stdout.on('data', data => {
  console.log(data.toString());
  if (data.includes('started')) {
    // Hold on for a second, want to make sure storybook is running
    setTimeout(() => {
      cypress = spawn('npm', ['run', 'test:cypress:development'], { stdio: 'inherit' });
      cypress.on('close', code => {
        process.exit(code);
      });
    }, 1000);
  }
});

storybook.on('close', code => {
  console.log(`Storybook process exited with code ${code}`);
});

process.on('exit', () => {
  storybook.kill();
  cypress && cypress.kill();
});
