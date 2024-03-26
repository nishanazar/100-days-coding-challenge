// This function swaps the values of two variables
function swapValues() {
    var a = 5, b = 10; // initially, a is 5 and b is 10
    console.log("Before swap:a =", a, "b =", b);
    var temp = a;
    // temporarily stores the value of a
    a = b; // sets a to b's value
    b = temp; // sets b to a's value
    // original value stored in temp
    console.log("After swap: a =", a, "b =", b);
}
swapValues();
