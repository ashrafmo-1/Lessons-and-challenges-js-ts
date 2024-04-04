"use strict";
let UserName = 'ashraf';
let x;
x = 10;
x = 12;
let informationProgramming = (val) => {
    console.log(`programming information => user Name is ${val.name}`);
    console.log(`programming information => age ${val.age}`);
    console.log(`programming information => working ${val.work}`);
};
informationProgramming({ name: 'ashraf', age: 21, work: true });
