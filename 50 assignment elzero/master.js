/* ===== assignment #1 ===== */
let fileName = "Elzero.php";
/* *=====* example one *=====* */
console.log(fileName.split('.')[0]);
console.log(fileName.split('.')[1]);
/* *=====* example Two *=====* */
console.log(fileName.split('.').slice(0, -1).toString());
console.log(fileName.split('.').slice(-1).toString());
/**===================================================================================**/
/* ===== assignment #2 ===== */
const addEl = (str) => {
  if(str === "") {
    return str;
  } else if(str.startsWith("El")) {
    return str;
  } else {
    return  `El${str}`;
  }
}
console.log(addEl(''));
console.log(addEl('Elzero'));
console.log(addEl('zero'));
/**===================================================================================**/
/* ===== assignment #3 ===== */
let myString = "Hello Elzero Web School @ We Love Programming@ @#!@#$%%^&*";
/* *=====* example one *=====* */
let reg = myString.replace(/(@[^@]*@).*/, "$1").slice(0, -1);
/* ===== assignment #2 ===== */
let result = "";
let atCount = 0;
for (i = 0; i < myString.length; i++) {
  if (myString[i] == "@") {
    atCount++;
    if (atCount == 2) {
      break;
    }
  }
  result += myString[i];
}
/**===================================================================================**/
/* ===== assignment #4 ===== */
function checkRange(n1, n2, n3, n4, n5) {
  if (n1 >= n4 && n1 <= n5 && n2 >= n4 && n2 <= n5 && n3 >= n4 && n3 <= n5) {
    return "Yes All Numbers In Range";
  } else {
    return "Not All Numbers Is In Range";
  }
}
console.log(checkRange(5, 10, 15, 5, 50)); // Yes All Numbers In Range
console.log(checkRange(8, 4, 20, 2, 50)); // Yes All Numbers In Range
console.log(checkRange(10, 15, 20, 5, 18)); // Not All Numbers Is In Range
/**===================================================================================**/
/* ===== assignment #5 ===== */
function replaceFirstWithLast(word) {
  let wordArray = word.split('');
  let firstChar = wordArray.shift();
  let lastChar = wordArray.pop();
  return lastChar + wordArray.join('') + firstChar;
}
console.log(replaceFirstWithLast("olzerE")); // Elzero
console.log(replaceFirstWithLast("Hello")); // oelloH
/**===================================================================================**/
/* ===== assignment #6 ===== */
function checkBiggestNum(word) {
  return Math.max(...word.match(/\d+/g)); // example one
  return Math.max(...word); // example two
}
// let numArray = Math.max(...word.split('').map(Number)); // example three

console.log(checkBiggestNum("1500654")); // 6
console.log(checkBiggestNum("8509507")); // 9
/**===================================================================================**/
/* ===== assignment #7 ===== */
let arrNUmbers = [20, 100, 50, 10, 15, -20, 30];
let sort_arr = arrNUmbers.sort((x, y) => y - x);
console.log(sort_arr.slice(0,2)); // solution => [100, 50];
/**===================================================================================**/
/* ===== assignment #8 ===== */
let nums = [10, 80, 85, 25, 30, 88, 15];
let goal = 100;

for (let i = 0; i < nums.length; i++) {
  if (goal - nums[i] < goal - nums[1]) {
    num = nums[i];
  }
}
console.log(`Closest Number Is ${num}`);
















































// assignmnet #39
let arr = ["a", "d", "f"];
// for (let i = 0; i < arr.length; i++) {
//   if (arr.length >= arr.length) {
//     break;
//   }
//   arr.push("x");
// }
// let newArr = arr.concat(Array(5).fill("x"));
// newArr.push('a')
// console.log(arr);
