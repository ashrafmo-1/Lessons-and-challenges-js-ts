/*
Encapsulation
- Class Fields Are Public By Default
- Guards The Data Against Illegal Access. (حمايه البيانات من الوصول اليها)
- Helps To Achieve The Target Without Revealing Its Complex Details.  (يعمل  بدول ما يظخرلك اي بيانات)
- Will Reduce Human Errors.
- Make The App More Flexible And Manageable.
- Simplifies The App
*/

class User {
    // private proprty
    _s;
    constructor(name, contry, id, salary) {
        this.n = name;
        this.c = contry;
        this.id = id;
        this._s = salary;
    };
    CaughtSalary() {
        return parseInt(this._s);
    }
}

// Example experiment from Encapsulation
class Admin extends User {
    constructor(name, contry, id, age) {
        super(name, contry, id);
        this.a = age
    }
}

let userOne = new User("Ashraf", "KSA", "313 EGP");
let adminOne = new Admin("Osama", "EG", "313 EGP", 21);


console.log(userOne.n);
console.log(userOne.CaughtSalary() * 0.3);

console.log(adminOne.CaughtSalary() * 0.3);
console.log(adminOne.a);