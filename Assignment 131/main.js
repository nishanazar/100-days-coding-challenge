"use strict";
//In another file:
Object.defineProperty(exports, "__esModule", { value: true });
var person_1 = require("./person");
var alice = new person_1.Person("Alice");
alice.greet(); //outputs: Hello my name is Alice
//This snippet imports the person class and uses it to create an instance.
