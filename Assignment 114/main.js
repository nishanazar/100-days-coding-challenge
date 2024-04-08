"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Creates a Map to store student IDs (keys) and names (values)
const students = new Map();
students.set(1, "Alice");
students.set(2, "Bob");
students.set(3, "Charlie");
// iterates over the Map and logs each student ID and name
students.forEach((name, id) => {
    console.log(`Student ID: ${id}, Name: ${name}`);
});
// this loop goes through each student and logs their ID and name.
