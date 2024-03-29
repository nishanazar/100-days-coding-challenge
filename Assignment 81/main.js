function logObjectPropertise(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
logObjectPropertise({
    make: "Toyota",
    model: "Corolla",
    year: 2021,
    color: "blue",
});
