//Arrow function that calculates the product of all its parameters
const multiplyParameters = (...numbers: number[]) =>
  numbers.reduce((total, number) => total * number, 1);
console.log(multiplyParameters(2, 3, 4)); //outputs: 24

//This function uses the rest parameter syntax to take any number of a arguments, then multiplies them together.
