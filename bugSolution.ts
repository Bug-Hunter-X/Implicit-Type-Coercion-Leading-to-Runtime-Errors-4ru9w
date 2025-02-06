function add(a: number, b: number): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers');
  }
  return a + b;
}

const result = add(5, 5); // Correct usage
console.log(result); // Output: 10

//const result2 = add("hello", 5); // This will throw an error at runtime