class User {
    constructor(name, country, salary) {
            this.n = name;
            this.co = country;
            this.sa = salary;
        }
        // to updating name
    newChange(newName) {
        this.n = newName
    };
}

let userOne = new User("Ashraf", "KSA", 50);
console.log(userOne.n);

// to updating name
userOne.newChange("shref");
console.log(userOne.n);

// Built In Constructors
let stringOne = "Ashraf";
let stringTwo = new String("Ashraf");

console.log(typeof stringOne);
console.log(typeof stringTwo);

console.log(stringOne instanceof String); // false
console.log(stringTwo instanceof String); // true

console.log(stringOne.constructor === String); // true
console.log(stringTwo.constructor === String); // true

let numeOne = 10;
let numTwo = new Number(10);

console.log(typeof numeOne);
console.log(typeof numTwo);

console.log(numeOne instanceof Number);
console.log(numTwo instanceof Number);

console.log(numeOne.constructor === Number)
console.log(numTwo.constructor === Number)