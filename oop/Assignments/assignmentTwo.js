class Phone {
    static count = 0;
    constructor(name, serial, price) {
        this.name = name;
        this.serial = serial;
        this.price = price;
    }
}

class Tablet extends Phone {
    constructor(name, serial, price, size) {
        super(name, serial, price);
        this.size = size || "Unknown";
        Tablet.count++
    }
    fullDetails() {
        return `${Tablet.count} ${this.name} Serial is ${this.serial} And ${this.size}`
    }
}

// Write Tablet Class Here

let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9, );
let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
let TabletThree = new Tablet("LG", 250450650, 650);
let TabletFour = new Tablet("redmi", 250452250, 650, 9);

console.log(`${TabletOne.fullDetails()}`); // iPad Serial is 100200300 And Size Is 12.9
console.log(`${TabletTwo.fullDetails()}`); // Nokia Serial is 350450650 And Size Is 10.5
console.log(`${TabletThree.fullDetails()}`); // LG Serial is 250450650 And Size Is Unknown
console.log(`${TabletFour.fullDetails()}`); // LG Serial is 250450650 And Size Is Unknown