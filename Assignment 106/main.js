// This function checks if a year is a leap year
function isLeapYear(year) {
    // checks the condition for a leap year
    return (year % 4 === 0 && year % 100 == 0) || year % 400 === 0;
}
console.log(isLeapYear(2020)); // true
console.log(isLeapYear(1900)); // false
// by using comparism operators, we can easily determine if a yearis a leap yearor not.
