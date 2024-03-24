// Creating a custom a type (type alias) for shapes that could be circle or rectangles
// Describing a circle using our shape type
var circle = {
    kind: "circle",
    radius: 5,
};
// Describing a rectangle using our shape type
var rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle); // Here's the circle
console.log(rectangle); // And here's the rectangle
