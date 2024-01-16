class Jaguars {
    // private property
    #price
    constructor(id, t3m, phone, price) {
        this.id = id;
        this.t = t3m;
        this.p = phone;
        this.#price = price;
    }
    // make method to get a private property "price"
    ShowPrice() {
        return parseInt(this.#price);
    }
}

class Company extends Jaguars {
    constructor(id, t3m, phone, price, name) {
        super(id, t3m, phone, price);
        this.name = name;
    }
}


let jaguar0 = new Jaguars(0, 'tometo', 503130273, '100000 EG');
let companyOne = new Company(1, 'burger', 2720, 5, 'jaguar')

console.log(jaguar0);
// console.log(jaguar0.#price);
console.log(jaguar0.ShowPrice());
// company test private properties
console.log(companyOne.ShowPrice());