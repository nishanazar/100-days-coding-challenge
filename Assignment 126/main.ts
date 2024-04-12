//Demonstrates 'this' behavior change in a nested function
const myObject = {
    property: "value",
    outerMethod: function() {
        console.log(this.property);  //works as expected, logs "value"
        const innerMethod = () => {
        console.log(this.property);    
        };
        innerMethod();
    },
};
myObject.outerMethod();
//This example shows that using an arrow function for the inner method preserve the 
//'this'context from the outer method.
