/*
=> Array of Methods 
- Array.from(iterable, MapFunction, This)

variable
StringNumber
Set
Using The Map Function
Arrow Function
Shorten The Method + Use Arguments

*/



let theName = "Ashraf";
// convert String To Array
console.log(Array.from(theName));

console.log(Array.from("Osama"))
    // for Modern Function
console.log(Array.from("12345", function(num) {
        return +num + +num
    }))
    // for Arrow Function
console.log(Array.from("12345", (num) => +num + +num));

// questions
let myArr = [1, 0, 0, 0, 2, 0, 0, 0, 3, 0, 0, 0]

const set = new Set(myArr)
console.log((set))
    // Convert Set to Array
console.log(Array.from(set))

// make Sprit Opirator for Future
console.log([...new Set(myArr)])

function AfR() {
    return Array.from(arguments)
}
console.log(AfR(100020003000))