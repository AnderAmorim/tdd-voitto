test('sum adds two numbers approximately', () => {
    const result = sum(0.1, 0.2);
    expect(result).toBeCloseTo(0.3, 5);
  });
  
  test('string matches using regex pattern', () => {
    const pattern = /^hello/i;
    const str = 'Hello, world!';
    expect(str).toMatch(pattern);
  });
  
  test('array contains a specific value', () => {
    const array = [1, 2, 3, 4, 5];
    const value = 3;
    expect(array).toContain(value);
  });
  
  test('object has a specific property', () => {
    const obj = {
      name: 'John',
      age: 30,
    };
    expect(obj).toHaveProperty('name');
});