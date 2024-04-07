// Checks the current hour and logs "Good Morning" if it's before 12 PM
var currentTime = new Date();
if (currentTime.getHours() < 12) {
    console.log("Good Morning"); // it's morning if before 12 PM
}
//This simple checks helps us greet users appropriately based on the time og day
