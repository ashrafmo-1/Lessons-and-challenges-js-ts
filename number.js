// make control on number
let num = 10
let num2 = 15.8
let strNum = '15'

// ## => 1 convert string to number (float number)
// let convert = parseInt(strNum); // num will be 123

// ## => 1 convert string to number (float number)
let convert = parseFloat("123.45"); // num will be 123.45
console.log(convert);

// conver any str num to num
let numberMethod = Number("123"); // num will be 123
console.log(numberMethod);

// return true from the string 😂😂
let d7k = isNaN("hello"); // returns true
console.log(d7k);

// Reverse the negative signal
let reverse = Math.abs(-500); // returns 5
console.log(reverse);

// let roundMethod = Math.round(4.5); // returns 5
let roundMethod = Math.round(4.4); // returns 4
console.log(roundMethod);

// remove the decimal number
let floorMethod = Math.floor(num2); // returns 15
console.log(floorMethod);

// 
let ceilMethod = Math.ceil(4.1); // returns 5
console.log(ceilMethod);

let randomNum = Math.random(1, 100); // randomNum will be a random value between 0 (inclusive) and 1 (exclusive)
console.log(randomNum);

let rundomNumber = (max) => Math.floor(Math.random() * max)
console.log(`randomNum: ${+rundomNumber(100)}`)

// get max number of arrays
let arr = [1, 20, 30, 40, 50, 60, 70, 80, 110]
console.log(`max number of arrays: '${Math.max(...arr)}'`);
console.log(`min number of arrays: '${Math.min(...arr)}'`);