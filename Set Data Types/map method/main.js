/*

=> Map Data Type
=> methods
- set
- get
- delete
- clear
- has

=> propertise
- size

*/

let myMap = new Map();

// -set
myMap.set("one", "ashraf");
myMap.set("tow", "mohamed");
myMap.set(true, "avalied");
myMap.set(false, "not avalied");
myMap.set("z", "zhran");
myMap.set(function newfun(ele) {}, "function");

console.log(myMap);

// -get
console.log(myMap.get(true))
console.log(myMap.get(false))
console.log(myMap.get("one"))

// -delete
console.log(myMap.delete("one"))

console.log(myMap);
// -has
console.log(myMap.has("tow"))

// -clear
myMap.clear()
console.log(myMap);