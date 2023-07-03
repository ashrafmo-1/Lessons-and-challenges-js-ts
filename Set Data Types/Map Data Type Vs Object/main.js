// object => has An Default Keys
let myObj = {};
let myEmptyObj = Object.create(null);

let myMap = new Map()

console.log(myObj)
console.log(myEmptyObj) // default keys
console.log(myMap) // default keys

let OnjTEST = {
    10: "Hello",
    "10": "WElcom",
};

const length = Object.keys(OnjTEST).length
console.log(`length => ${length}`)

console.log(OnjTEST[10]);
console.log(OnjTEST["10"]);


let myMapTEST = new Map()
myMapTEST.set(10, "Ashraf")
myMapTEST.set("10", "d3bs")
myMapTEST.set(true, "haha")
myMapTEST.set({ 1: 2, 5: 2 }, "obj")
myMapTEST.set(function anything(ga) {}, "fun")


console.log(myMapTEST.get(10));
console.log(myMapTEST.get("10"));

console.log(OnjTEST);
console.log(myMapTEST.size);