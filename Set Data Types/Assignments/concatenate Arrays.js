console.log(`======= assignment Seven ======`);

let numsOne = [1, 2, 3]; // Needed Output
let numsTwo = [4, 5, 6]; // [1, 2, 3, 4, 5, 6]

/* concatenate Arrays */
let allArrayes = [...numsOne, ...numsTwo];
let allArrayesTwo = numsOne.concat(numsTwo)

numsOne.push(...numsTwo)
console.log(numsOne)

console.log(allArrayes);
console.log(allArrayesTwo);