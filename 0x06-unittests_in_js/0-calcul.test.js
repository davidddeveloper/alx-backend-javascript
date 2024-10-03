const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 5', function () {
    assert(calculateNumber(2, 3), 5);
  });

  it('should return 5', function () {
    assert(calculateNumber(1, 3.7), 5);
  });

  it('should be rounded', function () {
    assert(calculateNumber(2.3, 3.5), 6);
  });

  it('should return 6', function () {
    assert(calculateNumber(1.5, 3.7), 6);
  });
});
