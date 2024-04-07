// This function checks if a number is divisible by both 2 and 3
function isDivisibleByTwoAndThree(number) {
    // uses the module operator to check for no remainder
    return number % 2 === 0 && number % 3 === 0;
}
console.log(isDivisibleByTwoAndThree(12));
console.log(isDivisibleByTwoAndThree(14));
// logical operators help us verify the number's divisibility by both 2 and 3.
