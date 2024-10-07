const { createServer } = require('node:http');
const fs = require('node:fs');

const databaseFile = process.argv.slice(2)[0];

const app = createServer((req, res) => {
  if (req.url === '/') {
    res.write('Hello Holberton School!');
    res.end();
  }

  if (req.url === '/students') {
    res.write('This is the list of our students');
    const read = (res) => {
      fs.readFile(databaseFile, 'utf-8', function (err, data) {
        if (err) {
          throw Error('Cannot load the database');
        }

        const sweStudents = [];
        const csStudents = [];

        data = data.split('\r\n').slice(1);
        data.forEach((item) => {
          if (item.endsWith('CS')) {
            csStudents.push(item);
          }
          if (item.endsWith('SWE')) {
            sweStudents.push(item);
          }
        });
        res.write(`Number of students: ${data.length - 1}`);

        res.write(`Number of students in CS: ${csStudents.length}. `);
        res.write('List: ');
        csStudents.forEach((student, idx) => {
          if (idx === (csStudents.length - 1)) {
            res.write(`${student.split(',')[0]}`);
          } else {
            res.write(`${student.split(',')[0]}, `);
          }
        });
      });
    };
    read(res);
    res.end();
  }
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello Holberton School!');
});

app.listen(1245, '127.0.0.1', () => {
});

module.exports = app;
