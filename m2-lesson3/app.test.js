const MathOperations = require('./app');

describe('MathOperations', () => {
  describe('sum', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(MathOperations.sum(1, 2)).toBe(3);
    });
  });

  describe('subtract', () => {
    test('subtracts 2 - 1 to equal 1', () => {
      expect(MathOperations.subtract(2, 1)).toBe(1);
    });
  });

  describe('multiply', () => {
    test('multiplies 2 * 3 to equal 6', () => {
        expect(MathOperations.multiply(2, 3)).toBe(6);
    });
  });

  describe('divide', () => {
    test('divides 6 / 2 to equal 3', () => {
      expect(MathOperations.divide(6, 2)).toBe(3);
    })

    test('divides 6 / 2 to equal 3', () => {
      expect(MathOperations.divide(6, 2)).toBe(3);
    })
  })
});