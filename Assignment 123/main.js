"use strict";
// This function iterates through a stringand logs each character until it finds a vowel
Object.defineProperty(exports, "__esModule", { value: true });
function logUntilVowel(str) {
    const vowels = "aeiouAEIOU";
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(`First vowel found: ${char}`);
            break;
        }
        console.log(char); // logs each character until a vowel is encountered
    }
}
logUntilVowel("syzygy"); // logs "s", "y", "z", "y"and then "first vowel found : y"
// demonstrates iterating through a string and shopping at the first vowel.
