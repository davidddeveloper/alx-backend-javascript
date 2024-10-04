const fs = require('fs');

const countStudents = (path) => {
  try {
    let data = fs.readFileSync(path, 'utf-8');
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
  } catch (e) {
    throw Error('Cannot load the database');
  }
};

countStudents('database.csv');
