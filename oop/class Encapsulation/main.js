/*
Encapsulation
- Class Fields Are Public By Default
- Guards The Data Against Illegal Access. (حمايه البيانات من الوصول اليها)
- Helps To Achieve The Target Without Revealing Its Complex Details.
- Will Reduce Human Errors.
- Make The App More Flexible And Manageable.
- Simplifies The App
*/

class User {
    // private property
    // fack private property
    _id;
    constructor(name, contry, id) {
        this.n = name;
        this.c = contry;
        this._id = id
    }
    CaughtId() {
        return parseInt(this._id)
    }
}

// Example experiment from Encapsulation

class Admin extends User {
    constructor(name, contry, id, age) {
        super(name, contry, id);
        this.a = age
    }
}

let userOne = new User("Ashraf", "KSA", "313 EGP")
let adminOne = new Admin("Osama", "EG", "313 EGP", 21)

console.log(userOne.n);
console.log(userOne.c);
console.log(userOne.CaughtId() * 0.3);

console.log(adminOne.CaughtId() * 0.3);
console.log(adminOne.a);



// let adminOne = new Admin(100, "Osama", "8000 Gneh", 1);
// console.log(adminOne.getSalary() * 0.3); // 2400