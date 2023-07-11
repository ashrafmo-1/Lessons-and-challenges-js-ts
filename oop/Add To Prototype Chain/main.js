/*
protoTye
- Add To Prototype Chain
- Extend Built in constructors Featuers
*/

class UserNmae {
    constructor(id, name) {
        this.i = id;
        this.n = name;
    }
    sayHello() {
        return `Hello ${this.n}`
    }
}

let userOne = new UserNmae("313", "Asharf")
console.log(userOne.n)
console.log(UserNmae.prototype) // from class master
console.log(userOne);

// make newmethod
UserNmae.prototype.sayHi = function() {
    return `hi ${this.n}`
}

//to Add possibilities boilt in constructor
Object.prototype.love = "zaza"

String.prototype.underScroeBeforeAndAfter = function(value) {
    return `_${this}_`
}
let str = "Ashraf";
console.log(str.underScroeBeforeAndAfter())