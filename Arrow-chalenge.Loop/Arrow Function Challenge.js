/* Arrow Function Challenge ==[1]== */
// [1] One Sattment In Function
// [2] Convert TO Arrow Function
// [3] Print The Output [Argument May Change]

/*
let names = function (...NamesAll) {
    return `String [${NamesAll.join("],[")}] => Done !!`
};
*/

let names = (...NamesAll) => `String [${NamesAll.join("], [")}] => Done !! 😊`


console.log(names("Ashraf", "MOhamed", "Elsaeed", "MOhamed"))
// String [Ashraf], [Osama], [Ali], [Nada] => Done !!


/* Arrow Function Challenge ==[2]== */
// [1] Replace ??? in Return statment To Get The Output
// [2] Create The Same Function With Reguler Syntax
// [3] Use Array Ibside The Arguments T Git The OutPut
let myNumbers = [20, 50, 10, 60];

// ==================== Exambel One ====================
/* let calc = (one, tow, ...numbers) => numbers[+(Array.isArray(myNumbers))] + one; */
let calc = function (one, tow, ...numbers) {
    return numbers[+(Array.isArray(myNumbers))] + one;
}

// ==================== Exambel Tow ====================

// let calc = (one, tow, ...numbers) => numbers[+(!Array.isArray(myNumbers))] + one + tow;
// let calc = function (one, tow, ...numbers) {
//     return numbers[+(!Array.isArray(myNumbers))] + one + tow;
// }

console.log(calc(20, 50, 10, 60));