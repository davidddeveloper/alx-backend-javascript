console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.toString().trim();
  process.stdout.write(`Your name is: ${name}\r`);
});

process.on('SIGINT', () => {
  // console.log('This important software is now closing');
  process.exit();
});

process.on('exit', () => {
  console.log('This important software is now closing');
  process.exit(); // End the process
});
