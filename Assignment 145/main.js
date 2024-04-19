// This function accepts q callback function and invokes it with given arguments
function executeCallback(callback, arg1, arg2) {
    callback(arg1, arg2); //Invokes the callback with the specified arguments
}
// Example callback function that adds two numbers
var add = function (a, b) {
    console.log(a + b);
};
executeCallback(add, 5, 3);
