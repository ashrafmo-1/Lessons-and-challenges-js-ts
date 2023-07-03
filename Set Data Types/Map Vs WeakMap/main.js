/*
map VS weaknap
map => key can be Anything
weakMap => can be object only

*/

let myObject = { theName: "Ash" }
let myMap = new Map()
myMap.set(myObject, "value")

myObject = null;

console.log(myMap)

console.log(`#`.repeat(20)) // ###########################################

let myMapObj = { theName: "ashraf" }
let mywMap = new WeakMap()
mywMap.set(myMapObj, "value")

myMapObj = null;

console.log(mywMap)