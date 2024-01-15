class Jaguar {
    constructor(id, t3m, mony, count) {
        this.i = id;
        this.t = t3m;
        this.m = mony;
        this.c = count;
    }
}

const jaguarOne = new Jaguar(0, 'burger', 5, 3)
console.log(typeof jaguarOne);
console.log(jaguarOne.i);
console.log(jaguarOne.t);
console.log(jaguarOne.m);
console.log(jaguarOne.c);