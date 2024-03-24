// Creating a custom a type (type alias) for shapes that could be circle or rectangles

type Shape = {
    kind: "circle" | "rectangle";
    radius?: number;  // only for circles
    width?: number;   // only for rectangles
    height?: number;  // only for rectangles
};

// Describing a circle using our shape type
let circle: Shape = {
    kind: "circle",
    radius: 5,
};

// Describing a rectangle using our shape type
let rectangle: Shape = {
    kind: "rectangle",
    width: 10,
    height: 20
};
// Showing what we described
console.log(circle);    // Here's the circle
console.log(rectangle); // And here's the rectangle.