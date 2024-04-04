// /* Get And Set Accessors */


class User {
    constructor(public name: string, public adderss: string, private _age: number) {
    }
    get age(): number {
        return this._age
    }
    set age(val: number) {
        this._age = val
    }
}
let person = new User('ashraf', 'alx', 21);

console.log(person.age);
person.age = 22
console.log(person.age);