const {createServer} = require("node:http");

const port = 1245;
const host = '127.0.0.1';

const app = createServer((req, res) => {
    if (req.url == '/') {
        res.write("Hello Holberton School!");
    }

    if (req.url == '/students') {
        res.write("This is the list of our students");
    }

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    res.end("Hello Holberton School!")
})

app.listen(port, host, () => {
    process.stdout.write("Hello Holberton School!\n")
})

module.exports = app;
