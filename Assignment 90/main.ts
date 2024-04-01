// This function checks if a value is Not a number (NaN)

function isValueNaN(value: any): boolean {
    return isNaN(value);
}
console.log(isValueNaN("hello"));
console.log(isValueNaN(123));
