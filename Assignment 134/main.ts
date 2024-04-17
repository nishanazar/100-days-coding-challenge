// Defines a JSON string

const jsonString = `{"name": "Alice", "age": 30, "city": "wonderland"}`;

//Parses the JSON string back into a javaScript object

const person = JSON.parse(jsonString);

console.log(person); //outputs the original object

// This snippet shows how to take a JSON string and convert it back into a javaScript object.
