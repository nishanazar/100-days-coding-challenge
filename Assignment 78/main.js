// function declaration for squaring a number
function squaringDeclaration(number) {
    return number * number;
}
var squaringExpression = function (number) {
    return number * number;
};
// Using both functions to square the number 4
console.log(squaringDeclaration(4));
console.log(squaringExpression(4));
