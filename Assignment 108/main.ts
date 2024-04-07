// This function compares two strings, ignoring case sensitivity 

function areStringEqualIgnoreCase(str1: string, str2: string): boolean {

// Converts both strings to lowercase before comparison
    return str1.toLowerCase() === str2.toLowerCase();

}
console.log(areStringEqualIgnoreCase("hello", "Hello"));
console.log(areStringEqualIgnoreCase("world", "World"));

// We make both strings lowercase to ensure the comparison ignores case difference.
