class Person {
    // static properties can class only make access on this properties
    static count = 0
    constructor(username, age, haveX) {
        // porperties
        this.u = username;
        this.a = age;
        this.x = haveX;
        Person.count++;
    }
        // static methods can class only make access on this methods
        static helloPro() {
            return `hi programming`
        }
        static usersLegth() {
            return `${this.count} users`
        }
}

let userOne = new Person('ash', 22, true);
let userTwo = new Person('ashraf', 21, false);

console.log(Person.count);
console.log(Person.helloPro());
console.log(Person.usersLegth());