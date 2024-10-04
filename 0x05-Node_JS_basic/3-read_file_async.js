const fs = require('fs');

async function countStudents (path) {
  fs.readFile(path, 'utf-8', async (err, data) => {
    if (err) {
      throw Error('Cannot load the database');
    }

    const sweStudents = [];
    const csStudents = [];

    data = await data.split('\r\n').slice(1);
    await data.forEach((item) => {
      if (item.endsWith('CS')) {
        csStudents.push(item);
      }
      if (item.endsWith('SWE')) {
        sweStudents.push(item);
      }
    });
    await console.log(`Number of students: ${data.length - 1}`);

    await process.stdout.write(`Number of students in CS: ${csStudents.length}. `);
    await process.stdout.write('List: ');
    await csStudents.forEach((student, idx) => {
      if (idx === (csStudents.length - 1)) {
        process.stdout.write(`${student.split(',')[0]}`);
      } else {
        process.stdout.write(`${student.split(',')[0]}, `);
      }
    });

    await console.log();
    await process.stdout.write(`Number of students in SWE: ${sweStudents.length}. `);
    await process.stdout.write('List: ');
    await sweStudents.forEach((student, idx) => {
      if (idx === (sweStudents.length - 1)) {
        process.stdout.write(`${student.split(',')[0]}`);
      } else {
        process.stdout.write(`${student.split(',')[0]}, `);
      }
    });
  });
}

module.exports = countStudents;
