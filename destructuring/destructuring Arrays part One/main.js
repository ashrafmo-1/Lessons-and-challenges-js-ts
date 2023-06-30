/*
Destructuring
Take Data From Objects, Arrays, maps And Add TO New Var & Distribution As you Like
*/

let myFaceFrinds = ["Ahmed", "Ali", "Eslam", "Khaled"];

// Extract Data For Array
let = [A = "A", B, C, D, E = "Ashraf"] = myFaceFrinds; // Destructuring

console.log(A);
console.log(B);
console.log(C);
console.log(D);
console.log(E);

// to Remove Any Element From Array
let [X, Y, , Z] = myFaceFrinds; // Make Empty For Location
console.log(X);
console.log(Y);
console.log(Z);