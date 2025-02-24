// This array of numbers will be filtered

const numbers: number[]=[1,2,3,4,5,6,7,8,9,10];

// uses .filter()with a callback function to filter out numbers greater than 5

const filterNumbers: number[]= numbers.filter((number) => number > 5);
console.log(filterNumbers);

// The callback function here checks each number, and .filter() creates a new array with numbers that meet the criteria

