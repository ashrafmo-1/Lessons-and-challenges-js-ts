"use strict";
// /* Get And Set Accessors */
class User {
    constructor(name, adderss, _age) {
        this.name = name;
        this.adderss = adderss;
        this._age = _age;
    }
    get age() {
        return this._age;
    }
    set age(val) {
        this._age = val;
    }
}
let person = new User('ashraf', 'alx', 21);
console.log(person.age);
person.age = 22;
console.log(person.age);
