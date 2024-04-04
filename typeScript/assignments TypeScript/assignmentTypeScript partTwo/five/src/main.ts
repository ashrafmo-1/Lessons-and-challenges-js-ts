type custom = string | boolean;

function isHeOld(age: number | string) : custom | number {
  return typeof age === 'number' ? (age > 40 ? true : false) : "Error";
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"