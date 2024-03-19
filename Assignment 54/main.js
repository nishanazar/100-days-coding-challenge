// A way to make a flexible list function
function createObjectWithDynamicKey(key, value) {
    var dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
console.log(createObjectWithDynamicKey);
// Using the flexible list setup for a user's preference
var userPreference = createObjectWithDynamicKey("theme", "dark");
// // Showing the user's choice
// console.log(userPreference);
