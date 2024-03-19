let pricessSet1 = [1200,1500,1100];
let pricessSet2 =[1000, 1300, 1600];
let combinedPrices = [...pricessSet1,...pricessSet2].sort((a,b)=> a -b);
console.log(combinedPrices);