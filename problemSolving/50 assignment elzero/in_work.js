// test casses
// let arr = [1,32,10,3,4];
// console.log(Math.max(...arr));

// // Your Code Here
// let sortArr = nums.sort((x, y) => y - x);
// function getNumber(x) {
//   for (let i = 0; i <= sortArr.length; i++) {
//     if (sortArr[i] <= goal) {
//       return i;
//     }
//   }
// }
// // console.log(getNumber(nums));
// // Closest Number Is 88


// let closest = nums.reduce((prev, curr) => {
//   return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
// });
// console.log(`Closest Number Is ${closest}`);


// String.prototype.elzeroRepeat = function(times) {
//   let result = '';
//   for (let i = 0; i < times; i++) {
//     result += this;
//   }
//   return result;
// };

// String.prototype.elzeroRepeat = function(n) {
//   return this.repeat(n);
// };


// console.log("Elzero ".elzeroRepeat(3)); // Elzero Elzero Elzero


// // Define elzeroRepeat function

// // Test the function
// console.log("Hello ".elzeroRepeat(3)); // Output: Hello Hello Hello


let myMoney = 5301503206;
let myMoneyString = "";
let myMoneyArray = myMoney.toString().split("").reverse();
// console.log(myMoneyArray);
for (let i = 0; i < myMoneyArray.length; i++) {
  if (i % 3 === 0 && i !== 0) {
    myMoneyString = "," + myMoneyString;
  }
  myMoneyString = myMoneyArray[i] + myMoneyString;
}
console.log(myMoneyString);
console.log(myMoney.toLocaleString());