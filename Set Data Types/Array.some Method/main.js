// make new  Array
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let myn = 11

// let chick = numbers.some(function(e) {
//     console.log(`hi`)
//     return e > 9
// });

/* for Arrow Function*/
// let chick = numbers.some((e) => e > 9);


let chick = numbers.some(function(e) {
    console.log(this)
    return e >= this
}, myn);
console.log(chick)

// make advanced Function For chick
function textchick(Array, value) {
    return Array.some(function(ele) {
        return ele === value
    });
};
console.log(textchick(numbers, 5));

// make Object
let Range = {
    min: 10,
    max: 20
}
let chickFromObj = numbers.some(function(e) {
    return e >= this.min || e <= this.max
}, Range);
console.log(chickFromObj)