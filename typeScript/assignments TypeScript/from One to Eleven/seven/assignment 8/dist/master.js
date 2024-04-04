"use strict";
const printInConsole = (...value) => {
    for (const arg of value) {
        console.log(`The Value Is ${arg} And Type Is ${typeof arg}`);
    }
    console.log("Done");
};
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
