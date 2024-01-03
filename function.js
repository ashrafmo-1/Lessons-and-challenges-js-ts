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