/* 
prototype (نموزج)
- Introduction
- Prototypes are the mechanism by which JavaScript objects
    inherit features from one another.
*/

class User {
    constructor(name, id, age) {
        this.n = name;
        this.i = id;
        this.a = age;
    }
    sayhello() {
        return `hello ${this.m}`
    }
}

let userOne = new User("ashraf", 313, 21);
console.log(userOne.n);

console.log(User.prototype)
let stringOne = "ashraf"
console.log(String.prototype)