// Defines an object with a name property and a method to return its name
var person = {
    name: "Alice",
    getName: function () {
        return this.name;
    },
};
console.log(person.getName()); //Outputs: Alice
//This method correctly identifies and returns the object's "name" property using "this".
