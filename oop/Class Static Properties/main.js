/*
class
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
            Car.counter++;
        }
        /* static Methods */
    static sayHello() {
        return `Hello property`
    }
    static counters() {
        return `${this.counter} cars avaled`
    }
}

let carOne = new Car("red", 2024, 1000000)
let carTwo = new Car("blue", 2022, 100000)
let carthree = new Car("black", 2022, 100000)

console.log(carOne.c)
console.log(carTwo.c)
console.log(carTwo.counter)
console.log(Car.counter); // undefined Becaiuc property Is not static

console.log(Car.sayHello());

console.log(Car.counters())