export default function createIteratorObject(report) {
  const array = [];
  Object.values(report).forEach((value) => array.push(...value));
  return array;
}
