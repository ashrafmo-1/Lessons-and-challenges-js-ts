class Name {
    constructor(id, name) {
        this.i = id;
        this.n = name;
    }
}

const name1 = new Name(0, 'ashraf');
const name2 = new Name(1, 'mohamed');

console.log(name1.i);
console.log(name1.n);
console.log(name2.i);
console.log(name2.n);

console.log(name1 instanceof Name);
console.log(name2.constructor === Name);