// Construcot Function

/* we Will Make object */

/* synaks Constructor Function

(1)Modern Functon
(2) tupe name fuction From First Name big
*/

/*
// Old Examble
function User(name, id, salary) {
    this.n = name;
    this.i = id;
    this.sal = salary + 5000; // add Reward Mony
}; */

class User {
    constructor(name, id, salary) {
        this.n = name;
        this.i = id;
        this.sal = salary + 5000; // add Reward Mony
    }
};

let userOne = new User("Ashraf", 313, 10000);
let userTwo = new User("Osama", 314, 20000);
let userThree = new User("Zahran", 315, 30000);

console.log(userOne.n);
console.log(userOne.i);
console.log(userOne.sal);

console.log(userTwo.n);
console.log(userTwo.i);
console.log(userTwo.sal);

console.log(userThree.n);
console.log(userThree.i);
console.log(userThree.sal);

/* To Chick */

console.log(userOne instanceof User);
console.log(userOne.constructor === User);