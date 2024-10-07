const fs = require('fs');

function countStudents(path) {
  try {
    let data = fs.readFileSync(path, 'utf-8');
    const sweStudents = [];
    const csStudents = [];
    const makeString = (list) => {
      let string = '';
      list.forEach((item, idx) => {
        if (idx === (list.length - 1)) {
          string += item;
        } else {
          string += `${item}, `;
        }
      });

      return string;
    };

    data = data.split('\n');
    data = data.slice(1);

    data.forEach((item) => {
      if (item.endsWith('CS')) {
        csStudents.push(item.split(',')[0]);
      }
      if (item.endsWith('SWE')) {
        sweStudents.push(item.split(',')[0]);
      }
    });
    console.log(`Number of students: ${data.length}`);

    console.log(`Number of students in CS: ${csStudents.length}. List: ${makeString(csStudents)}`);

    console.log(`Number of students in SWE: ${sweStudents.length}. List: ${makeString(sweStudents)}`);
  } catch (e) {
    console.log(e);
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
