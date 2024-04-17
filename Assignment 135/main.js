// Reusing the person object from Question 133
var person = {
    name: "Alice",
    age: 30,
    city: "Wonderland",
};
// converts the object into a JSON string with indentation
var jsonString = JSON.stringify(person, null, 2);
// The 2 specifies the number of space to use as white space
console.log(jsonString);
//shows how adding indentation to the JSON string make it easier to read.
