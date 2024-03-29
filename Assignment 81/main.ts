function logObjectPropertise(obj: object) {
  for (let property in obj) {
    console.log(`${property}: ${obj[property]}`);
  }
}
logObjectPropertise({
  make: "Toyota",
  model: "Corolla",
  year: 2021,
  color: "blue",
});
