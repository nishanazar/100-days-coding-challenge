"use strict";
// This function generates a random hexadecimal color code
Object.defineProperty(exports, "__esModule", { value: true });
function getRandomHexColor() {
    const color = `#` +
        Math.floor(Math.random() * 0xFFFFFF)
            .toString(16)
            .padStart(6, `0`);
    return color;
}
console.log(getRandomHexColor());
