// Destructuring
/* Destructuring Array => Swapping variables */

let dog = "Nooo";
let cat = "3ooo";

/*

[past Swapping]
let box = dog
dog = cat
cat = box

*/


[dog, cat] = [cat, dog]// Swapping destructuring

document.write(`<h1>Dog say => ${dog}</h1>`);
document.write(`<h1>Cat say => ${cat}</h1>`);