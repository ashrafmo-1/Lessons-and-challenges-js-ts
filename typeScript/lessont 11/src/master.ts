// learn type annotation with arrow, anonymous functions

// anonymous functions
const anonymousSum = function(nOne: number, nTwo: number): number {
    return nOne + nTwo;
}
console.log(anonymousSum(10, 10));

const arrowSum = (nOne: number, nTwo: number): number  => nOne + nTwo;
console.log(`arrowSum ${arrowSum(10, 10)}`);
