// This function divides two numbers and finds the quotientand remainder
function divideAndRemainder(dividened, divisor) {
    // Calculates the quotient and remainder
    var quotient = Math.floor(dividened / divisor);
    var remainder = dividened % divisor;
    // Return both in an object
    return { quotient: quotient, remainder: remainder };
}
// Trying with 10 divided by 3
console.log(divideAndRemainder(10, 3));
