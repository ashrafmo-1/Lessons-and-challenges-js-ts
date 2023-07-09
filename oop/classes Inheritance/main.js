/* 
class 
-> Inheritance

المميذات
"dont reapet your self"
reuseed
*/

// parent Class
class User {
    constructor(name, contry, wName) {
        this.n = name;
        this.c = contry;
        this.w = wName
    }
    static sayHello() {
        return `hello ${this.n}`
    }
}

// Derived class
class Admin extends User {
    constructor(name, contry, wName, age, email) {
        super(name, contry, wName)
        this.a = age;
        this.e = email
    }
}

class SuperclassCopy extends Admin {
    constructor(name, contry, wName, age, email, height) {
        super(name, contry, wName, age, email, height)
        this.h = height
    }
}

let userOne = new User("Ashraf", "KSa");
let adminOne = new Admin("Ashraf", "ksa", "programmer", 21, "aashraf9919")
let SuperclassCopyOne = new SuperclassCopy("Ashraf", "ksa", "programmer", 21, "aashraf9919", 192)

console.log(userOne.n)
console.log(`##################`)
console.log(adminOne.n)

console.log(SuperclassCopyOne.n)

console.log(adminOne.c)
console.log(adminOne.w)
console.log(adminOne.a)
console.log(adminOne.e)
console.log(Admin.sayHello())

console.log(SuperclassCopyOne.h)