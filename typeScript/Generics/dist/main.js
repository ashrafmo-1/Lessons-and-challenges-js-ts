"use strict";
function stringType(value) {
    return value;
}
function numberType(value) {
    return value;
}
function booleanType(value) {
    return value;
}
function types(values) {
    return values;
}
function dataTypes(val) {
    return val;
}
console.log(dataTypes(1));
console.log(dataTypes('str'));
console.log(dataTypes(true));
console.log(dataTypes([0, 1]));
console.log(dataTypes(['one', 'two']));
let type = (val) => {
    return val;
};
let type1 = (val) => val;
function info(valOne, valTwo) {
    return `value one is name is ${valOne} and type is ${typeof valOne}, value two is ${valTwo} and type is ${typeof valTwo}`;
}
console.log(info('ashraf', 21));
console.log(info('ali', 30));
class Types {
    constructor(userName) {
        this.userName = userName;
    }
    msg(value) {
        console.log(`name is ${this.userName} message is ${value}`);
    }
}
let one = new Types('ashraf');
console.log(one.userName);
one.msg('hello ASH');
class Colection {
    constructor() {
        this.data = [];
    }
    addition(items) {
        this.data.push(items);
    }
}
let ItemOne = new Colection();
ItemOne.addition({ title: 'zekola earth section one', mrg3: 11, done: true });
ItemOne.addition({ title: 'zekola earth Two', mrg3: 12, done: false });
console.log(ItemOne);
let ItemTwo = new Colection();
ItemTwo.addition({ name: 'lol', level: 21, TFT: 6, price: 0 });
console.log(ItemTwo);
