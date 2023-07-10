class Inp {
    #e;
    constructor(name, id, eSalary) {
        this.n = name;
        this.i = id;
        this.#e = eSalary;
    }
    getSalary() {
        return parseInt(this.#e)
        }
}

class User extends Inp {
    constructor(name, id, eSalary) {
        super(name, id, eSalary)
    }
}

let inpOne = new Inp("as", 1313, "1 b ha")
let userOne = new User("Osama", 313, 1000)

console.log(inpOne.getSalary() * 0.3)
console.log(userOne.getSalary() * 0.3)