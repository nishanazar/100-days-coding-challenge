// Demonstrating block scope
{
    var blocklet = "visible inside the block";
    var blockConst = "also only inside the block";
    console.log(blocklet); // works fine here
    console.log(blockConst); // also works fine here
}
try {
    // console.log(blockLet);  // this will fail
}
catch (eror) {
    console.log("`blockLet` is not accessible outside the block.");
}
try {
    // console.log(blockConst);  // this will also fail
}
catch (error) {
    console.log("`blockConst` is not accessible outside the block.");
}
