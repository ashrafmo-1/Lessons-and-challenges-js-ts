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
console.log(UserNmae.prototype)
console.log(userOne)