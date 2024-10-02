process.stdin.on('data', (name) => {
    console.log(`Your name is: ${name}`);
});

console.log(`Welcome to Holberton School, what is your name?`);

process.on('SIGINT', () => {
    console.log("This important software is now closing");
});
