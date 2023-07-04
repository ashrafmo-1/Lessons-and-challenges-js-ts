const newSet = new Set([10])

// Answer
console.log(newSet)
console.log(newSet.add(20).size)


console.log(`======= assignment Two ======`)

let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// Answer
const newEditArrat = new Set(myFriends.sort())
console.log(newEditArrat)
    // Needed Output
    // (4) ['Ahmed', 'Mahmoud', 'Osama', 'Sayed']

console.log(`======= assignment THree ======`)

let myInfo = {
    username: "Osama",
    role: "Admin",
    country: "Egypt",
};

// Answer one
const changeToMap = Object.entries(myInfo)
    // console.log(changeToMap)
const myMap = new Map(changeToMap)
console.log(myMap)
    // Answer Two
console.log(myMap.size)
console.log(myMap.has('country'))

// Needed Output
// Map(3) { 'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt' }
// 3
// true

console.log(`======= assignment Four ======`)

let theNumber = 100020003000;


console.log(+Array.from(new Set(theNumber.toString())).sort().slice(true).join(""))
    // Spread Operator
console.log(+[...new Set(theNumber.toString())].sort().slice(true).join(""))

// Needed Output
// 123

console.log(`======= assignment Five ======`)

let theName = "Elzero";
// Answer
console.log(Array.from(theName))
    // Needed Output
    // ['E', 'l', 'z', 'e', 'r', 'o']