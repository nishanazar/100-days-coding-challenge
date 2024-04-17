//Demonstrates using a try-catch block to handle errors

try {
    //Intentionally cause an error

throw new Error("Something went wrong");

} catch (error){
    console.log(error.message); // logs the error message   
}

// This code tries to execute a block that throwa an error, and the catch block handles the error gracefully.