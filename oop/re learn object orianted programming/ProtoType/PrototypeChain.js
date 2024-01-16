class Frinds {
    constructor(name, age, location) {
        this.n = name
        this.a = age
        this.l = location
    }
    sayA7a() {
        return 'a7a'
    }
}

let Frinds1 = new Frinds("ahmed", 22, "SHARKIA")
console.log(Frinds1.sayA7a());
console.log(Frinds.prototype);

console.log(String.prototype);

console.log(Frinds1);


Frinds.prototype.sayWelcom = function(sp) {
    return `welcom: ${this.n}`
}

Frinds.prototype.lovers = 'ASH-Education1'

String.prototype.addHashBefore = function(value) {
    return `# ${this}`
}
let x = '2'