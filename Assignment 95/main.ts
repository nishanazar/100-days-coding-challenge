// This function filters an array, keeping only numbers greater than 10

function filterGreaterThanTen(numbers: number[]): number[] {
    return numbers.filter(number => number > 10);
}
const numbers: number[] = [5, 10, 15, 20, 25];
console.log(filterGreaterThanTen(numbers));
