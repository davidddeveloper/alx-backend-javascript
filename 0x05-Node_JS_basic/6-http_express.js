const express = require('express');

const port = 1245;
const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
  res.end();
});

app.listen(port, () => {});

module.exports = app;
