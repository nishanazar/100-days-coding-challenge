var _this = this;
//Demonstrating 'this' in traditional vs. arrow function
var traditionalVaArrow = {
    value: "traditionalVsArrow value",
    traditionalFunction: function () {
        console.log("Traditional function:", this.value); //'this' refers to traditionalvsArrow object    
    },
    arrowFunction: function () {
        console.log("Arrow function:", _this.value);
        //'this' is not bound to traditionalvsArrow object but to the scope in which traditionalvsArrow defined
    },
};
traditionalVaArrow.traditionalFunction(); //logs "traditionalvsArrow value"
traditionalVaArrow.arrowFunction(); //likely undefined depending on the outer scope's'this .value'
// this code snippet illustrates the difference in how 'this' is determined in traditional function
//versus arrow function
