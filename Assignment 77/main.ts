// This function greets a user by name, or greets an anonymous user if no name is provided

function greetUser(name: string = "anonymous"){
    console.log(`Hello, ${name}!`);
}
greetUser("Alice");     // Hello, Alice!
greetUser()             // Hello, anonymous
