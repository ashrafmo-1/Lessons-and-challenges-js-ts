class jaguar {
    constructor(id, name, t3m, count, mony){
        // Properties
        this.i = id;
        this.n = name;
        this.t = t3m || undefined;
        this.c = count || 'alotOF';
        this.m = mony < 500 ? mony + 100: mony;
        this.message = function() {
            return `wilcom ${this.n} your t3m is ${this.t} and mony is ${this.m}`
        }
    }
    // methods
    msg(){
        return `wilcom ${this.n} your t3m is ${this.t} and mony is ${this.m}`
    }
}

const jaguarOne = new jaguar(0, 'jaguar', '', 3, 400);
const jaguarTwo = new jaguar(1, 'jaguar', 'burger', '', 500);
console.log(jaguarOne);
console.log(jaguarOne.i);
console.log(jaguarOne.n);
console.log(jaguarOne.t);
console.log(jaguarOne.c);
console.log(jaguarOne.m);
console.log(jaguarOne.message());
console.log(jaguarOne.msg());
console.log(`=====Jaguar One=====`);
console.log(jaguarTwo.i);
console.log(jaguarTwo.n);
console.log(jaguarTwo.t);
console.log(jaguarTwo.c);
console.log(jaguarTwo.m);
console.log(jaguarTwo.message());
console.log(jaguarTwo.msg());