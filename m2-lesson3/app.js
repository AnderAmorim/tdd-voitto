class MathOperations {
    static sum(a, b) {
      return a + b;
    }
  
    static subtract(a, b) {
      return a - b;
    }
  
    static multiply(a, b) {
      return a * b;
    }
  
    static divide(a, b) {
      if (b === 0) {
        return 0
      }
      return a / b;
    }
  }
  
  module.exports = MathOperations;