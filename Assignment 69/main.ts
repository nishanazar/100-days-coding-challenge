// This function divides two numbers and finds the quotientand remainder
function divideAndRemainder(dividened: number, divisor: number):
{ quotient: number; remainder: number } {

    // Calculates the quotient and remainder
let quotient = Math.floor(dividened / divisor);
let remainder = dividened % divisor;

// Return both in an object
return { quotient, remainder};
}

// Trying with 10 divided by 3
console.log(divideAndRemainder(10, 3)); // { quotient: 3, remainder: 1 }