//Function that uses a callback pattern, including error handling
function fetchData(callback) {
    var error = new Error("Failed to fetch data");
    var data = "Some data";
    // Simulate fetching data with a chance of error 
    if (Math.random() > 0.5) {
        callback(null, data); //No error, data is fetched successfully
    }
    else {
        callback(error); // passes error to the callback
    }
}
// using the fetchData function with error handling in the callback
fetchData(function (error, data) {
    if (error) {
        console.log(error.message); // handles the error   
    }
    else {
        console.log(data); // processes the data 
    }
});
// Demonstrates a callback pattern where errors are handled gracefuly
