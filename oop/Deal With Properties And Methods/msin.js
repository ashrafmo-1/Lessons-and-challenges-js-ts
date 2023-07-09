class Users {
    constructor(userName, country, phone, salary) {
            // properties
            this.u = userName || "Ashraf";
            this.c = country;
            this.p = phone;
            this.s = salary < 5000 ? salary + 1000 : salary;
            // add properties And to Print Any Message
            this.msg = function() {
                return `Hello ${this.u} Your Salary Is ${this.s}`;
            };
        }
        // Adding Methods
    message() {
        return `Hello ${this.u} Your Salary Is ${this.s} Iam live in ${this.c}`;
    }
}

let userMy = new Users("sasa", "eg", 10, 4000);
let userMy2 = new Users("mama", "ksa", 12, 8000);

console.log(userMy.u)
console.log(userMy.s)

console.log(userMy.msg())
console.log(userMy.message())

console.log(userMy2.msg) // native Code
console.log(userMy2.msg) // native Code