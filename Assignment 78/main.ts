// function declaration for squaring a number

function squaringDeclaration(number: number): number {
    return number * number;
}
const squaringExpression = 
function(number: number): number {
    return number * number;
};
// Using both functions to square the number 4

console.log(squaringDeclaration(4));
console.log(squaringExpression(4));