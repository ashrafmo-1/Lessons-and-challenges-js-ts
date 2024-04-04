"use strict";
// noImplicitAny
let message = true;
function info(name, age, salary) {
    const hello = 100;
    if (message) {
        return `my name is ${name}, my age is ${age}, my salary is ${salary}, test variabble ${hello}`;
    }
    return `no data found`;
}
console.log(info('ashraf', 40, 5000));
// my test example.
let learn = 'typeScript';
const sayWelcome = (userName, age, learn) => {
    if (learn === 'string') {
        return `Welcome ${userName}, your age is ${age} and you learn ${learn}`;
    }
    return 'done condition';
};
console.log(sayWelcome('ashraf', 21, learn));
