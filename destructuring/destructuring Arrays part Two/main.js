/*
Destructuring
get Element in var For Aver there Location
*/

let myFaceFrinds = ["Ahmed", "Ali", "Eslam", ["Khaled", "Nada", ["Ashraf", "Zeyad", "zenat"]]];

// get Ali, Nada, Ashraf
let [, A, , [, B, [C, ,]]] = myFaceFrinds

console.log(A, B, C)