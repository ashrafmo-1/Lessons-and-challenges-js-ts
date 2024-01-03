/*
    Function
    # What Is Function ?
    # User-Defined vs Built In
    # Syntax + Basic Usage
    # Example From Real Life
    # Parameter + Argument
    # Practical Example
*/

function sayWelcome(userName) {
    console.log(`Welcome ${userName}`);
}

sayWelcome('ashraf')
sayWelcome('shenoo')



// ==========================================================

function sayHello(userName, age) {
    if (age < 18) {
        console.log(`App is Not Avalibale For You`);
    } else {
        console.log(`Hello ${userName} Your Age is ${age}`);
    }
}

sayHello('Ashraf', 21)
sayHello('Ali', 17)

// ==========================================================

function generateYears(start, end, notPrint) {
    for (let i = start; i <= end; i++) {
    if (i === notPrint) {
        continue;
    }
    console.log(i);
    }
}


generateYears(1982, 2000, 1999);

// arrrow functions
const arrow = (name) => {
    console.log(`hello ${name}`);
}

arrow('ahraf')

const sum = (n1, n2) => {
    console.log('#'.repeat(20));
    console.log(n1 + n2);
}

sum(10, 2)

const returnFun = (numOne, numTwo) =>  numOne - numTwo;
console.log(returnFun(10, 2));

// start fumction with return
function sumExampleTwo(nOne , nTwo) {
    return nOne + nTwo
}

console.log(sumExampleTwo(100, 50));