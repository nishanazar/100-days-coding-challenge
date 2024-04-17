// Example use of the "await" redserved word in asynchronous javaScript

async function fetchData() {
  // Assuming fetchSomething return a promise
  const data = await fetchData();
  console.log(data);
  //the "await" keyword pauses the execution untill the promise settles,
}
console.log(
  `The 'await' keyword allows asynchronous, promise-based behavior to be written in a cleaner, more linear fashion.`
);
