export default function iterateThroughObject(reportWithIterator) {
  let employees = '';
  reportWithIterator.forEach((value, idx) => { employees += `${idx !== 0 && idx !== (employees.length - 1) ? ' | ' : ''}${value}`; });
  return employees;
}
