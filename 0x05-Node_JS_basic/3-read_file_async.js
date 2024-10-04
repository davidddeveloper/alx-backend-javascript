const fs = require('fs');

function countStudents (path) {
  fs.readFile(path, 'utf-8', (err, data) => {
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
    console.log(`Number of students: ${data.length - 1}`);

    process.stdout.write(`Number of students in CS: ${csStudents.length}. `);
    process.stdout.write('List: ');
    csStudents.forEach((student, idx) => {
      if (idx === (csStudents.length - 1)) {
        process.stdout.write(`${student.split(',')[0]}`);
      } else {
        process.stdout.write(`${student.split(',')[0]}, `);
      }
    });

    console.log();
    process.stdout.write(`Number of students in SWE: ${sweStudents.length}. `);
    process.stdout.write('List: ');
    sweStudents.forEach((student, idx) => {
      if (idx === (sweStudents.length - 1)) {
        process.stdout.write(`${student.split(',')[0]}`);
      } else {
        process.stdout.write(`${student.split(',')[0]}, `);
      }
    });
  });
}

module.exports = countStudents;
