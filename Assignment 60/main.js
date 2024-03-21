// This profile sets itself up and can share into about the user
var userProfile = (function () {
    // The user's details are kept inside
    var name = "Ibrahim";
    var age = 20;
    // This part shares the user's details
    return {
        displayInfo: function () {
            console.log("Name: ".concat(name, ", Age: ").concat(age));
        }
    };
})();
// Asking the profile to tell us about the user
userProfile.displayInfo();
// it says the user's name and age 
// We made a self-setup profile that can about the user.
