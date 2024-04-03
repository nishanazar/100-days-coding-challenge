//Calculates how many days are left until new year's day
function daysUntilNewYear() {
    var today = new Date();
    var newyear = new Date(today.getFullYear() + 1, 0, 1);
    var diff = newyear.getTime() - today.getTime();
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() + " " + "days until New year.");
