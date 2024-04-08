"use strict";
// Q112
// creates a new Map to store countries and their capitals
const countries = new Map();
countries.set("USA", "Washington, D.C."); // Adds USA to the Map
countries.set("france", "paris"); // Adds france to the Map
countries.set("japan", "tokyo"); // Adds japan to the Map
console.log(countries);
// logs the Map with the countries and their capitals.
// Q113
// This function checks for "canada" in the Map and logs its capital
function logCapitalOfCanada(countries) {
    if (countries.has("Canada")) {
        console.log(`This capital of Canada is ${countries.get("Canada")}`);
    }
    else {
        console.log("Canada is not in the Map.");
    }
}
// Assuming countries Map from Question 112
logCapitalOfCanada(countries);
// checks if canada is in our Map and capital if it exists.
