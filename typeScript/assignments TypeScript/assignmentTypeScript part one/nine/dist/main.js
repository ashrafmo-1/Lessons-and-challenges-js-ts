"use strict";
function printInConsole(...values) {
    for (let i = 0; i < values.length; i++) {
        console.log(`The Value ${values[i]} And Type of ${typeof values[i]}`);
    }
    values.forEach((val) => {
    });
    return 'done';
}
console.log(printInConsole(1, 2, 3, 4, 5));
console.log(printInConsole("A", "B", "C"));
console.log(printInConsole(true, false, false, true, true));
