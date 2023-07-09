class Car {
    constructor(name, model, price) {
        this.n = name;
        this.m = model;
        this.p = price;
    }
    run() {
        return `Car Is Running Now`
    }
    stop() {
        return `Car Is Stopped`
    }
}

let carOne = new Car("MG", 2022, 420000);
let carTwo = new Car("Bmw", 2024, 1000000);
let carThree = new Car("verna", 2024, 100000);

console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
console.log(carOne.run());

// Needed Output
"Car One Name Is MG And Model Is 2022 And Price Is 420000"
"Car Is Running Now"