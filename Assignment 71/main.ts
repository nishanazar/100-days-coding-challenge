// Using 'let' for a variable that can be reassigned

let age = 25;
age = 26;
console.log(age)  // shows 26

// trying to reassign a 'const' - declared variable

const name = "Alice";
try{
    name = "Bob"; // This line will cause an error
} catch (error){
    console.log("Error: can't reassign a 'const' - declared variable.");
}
// This example illustrates that 'const' prevents changing the variable once it's set.