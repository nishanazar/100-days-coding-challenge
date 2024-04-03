//Calculates how many days are left until new year's day

function daysUntilNewYear(): number{
    const today = new Date();
    const newyear = new Date(today.getFullYear() + 1, 0, 1)
    const diff = newyear.getTime() - today.getTime();
    const days = Math.ceil(diff /(1000 * 60 * 60 * 24));
    return days;
}
console.log(daysUntilNewYear() +" "+ "days until New year.");