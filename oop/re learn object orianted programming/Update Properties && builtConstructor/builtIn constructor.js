let str1 = 'hello world';
let str2 = new String('hello world');

console.log(typeof str1);
console.log(typeof str2);

console.log(str1 instanceof String);
console.log(str2 instanceof String);
console.log(str1.constructor === String);
console.log(str2.constructor === String);

let n1 = 21;
let n2 = new Number(21);

console.log(n1 instanceof Number);
console.log(n2 instanceof Number);
console.log(n1.constructor === Number);
console.log(n2.constructor === Number);
