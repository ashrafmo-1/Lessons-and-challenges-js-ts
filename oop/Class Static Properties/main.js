/*
for class only
- static Properties And Methods
*/

class Car {
    // counter = 0;
    /* static Property */
    static counter = 0;
    constructor(color, model, count) {
            this.c = color;
            this.m = model;
            this.count = count;
            Car.counter++; // for count objects OnlyS
        }
        /* static Methods */
    static sayHello() {
        return `Hello property`
    }
    static counterCars() {
        return `${this.counter} cars avaled Now`
    }
}

let carOne = new Car("red", 2024, 1000000);
let carTwo = new Car("blue", 2022, 100000);
let carthree = new Car("black", 2022, 100000);
let carFour = new Car("white", 2022, 100000);

console.log(Car.counter)
console.log(carOne.c)
console.log(carTwo.c)
console.log(carTwo.counter)
console.log(Car.counter); // undefined Becaiuc property Is not static

console.log(Car.sayHello());
console.log(Car.counterCars())