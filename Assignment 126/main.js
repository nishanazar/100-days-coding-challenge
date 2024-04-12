//Demonstrates 'this' behavior change in a nested function
var myObject = {
    property: "value",
    outerMethod: function () {
        var _this = this;
        console.log(this.property); //works as expected, logs "value"
        var innerMethod = function () {
            console.log(_this.property);
        };
        innerMethod();
    },
};
myObject.outerMethod();
//This example shows that using an arrow function for the inner method preserve the 
//'this'context from the outer method.
