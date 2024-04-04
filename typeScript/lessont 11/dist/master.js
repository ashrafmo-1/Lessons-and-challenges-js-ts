"use strict";
// learn type annotation with arrow, anonymous functions
// anonymous functions
const anonymousSum = function (nOne, nTwo) {
    return nOne + nTwo;
};
console.log(anonymousSum(10, 10));
const arrowSum = (nOne, nTwo) => nOne + nTwo;
console.log(`arrowSum ${arrowSum(10, 10)}`);
