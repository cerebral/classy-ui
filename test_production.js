const { spawn, spawnSync } = require('child_process');
const storybook = spawn('npm', ['run', 'test:storybook:production']);

let cypress;
storybook.stdout.on('data', data => {
  if (data.includes('Hit CTRL-C to stop the server')) {
    // Hold on for a second, want to make sure storybook is running
    setTimeout(() => {
      cypress = spawn('npm', ['run', 'test:cypress:production'], { stdio: 'inherit' });
      cypress.on('close', code => {
        process.exit(code);
      });
    }, 1000);
  }
});
storybook.stderr.on('data', () => {});
storybook.on('close', code => {
  console.log(`Storybook process exited with code ${code}`);
});

process.on('exit', () => {
  spawnSync('pkill', ['http-server']);
  storybook.kill();
  cypress && cypress.kill();
});
