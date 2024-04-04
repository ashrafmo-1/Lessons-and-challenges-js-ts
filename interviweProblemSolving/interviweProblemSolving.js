// solve the problem
let arr = [1,2,3,4,5,6,7,8,9]; // [2,4,6,8,1,3,5,7,9]
// F example "Bad solution"
// let even = [], odd = [], result = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//         even.push(arr[i]);
//     } else {
//         odd.push(arr[i]);
//     }
// }
// for (let i = 0; i < even.length; i++) {
//     result.push(even[i]);
// }
// for (let i = 0; i < odd.length; i++) {
//     result.push(odd[i]);
// }
// arr = result;
// console.log(arr);


// "nice solution <3"
let track = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] % 2 === 0) {
    [arr[track], arr[i]] = [arr[i], arr[track]];
    track++;
  }
}
let oddIndex = track; // بداية الأرقام الفردية في المصفوفة
for (let i = oddIndex; i < arr.length - 1; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[i] > arr[j]) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
}
// console.log(arr);
console.log(arr);