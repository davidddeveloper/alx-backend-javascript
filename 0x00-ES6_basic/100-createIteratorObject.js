export default function createIteratorObject(report) {
  const array = [];
  Object.values(report.allEmployees).forEach((value) => array.push(...value));
  return array;
}
