// Intializes the counter at 10
var counter = 10;
// This while loop counts down from 10 to 1 and stops at 5
while (counter > 0) {
    if (counter === 5) {
        break;
    }
    console.log(counter);
    counter--; // decrements the counter
}
// logs the countdown from 10 but stops abrupty when it hits 5.tsc main
