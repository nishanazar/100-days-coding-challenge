//This program makes a function that adds a specific number

function makeAdder(valueToAdd: number): (number) => number {
  //This is a magic box. it takes a number and add your special number to it
  return function (number: number): number {
    return number + valueToAdd;
  };
}
// Making a magic box that adds 5 
let addFive = makeAdder(5);
console.log(addFive); //If we put 10 in the box, it gives us 15

// we made a function (magic box) that adds 5 to any number
