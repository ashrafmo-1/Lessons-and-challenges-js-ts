/*
    - Help Write A Reusable Code
    - Allow To Pass Type As A Parameter To Another Type
    - You Will Be Able To Deal With Multiple Types Without Using ": Any Type"
    - We Can Create:
    --- Generic Classes
    --- Generic Functions
    --- Generic Methods
    ---   Interfaces
*/

/* part one */

// bad code dinamic
function stringType(value:string): string {
    return value
}
function numberType(value:number): number {
    return value
}
function booleanType(value:boolean): boolean {
    return value
}

// medile code dinamic
function types(values: string | number | boolean): string | number | boolean {
    return values
}

// good code dinamic
function dataTypes<Generic>(val: Generic): Generic {
    return val
}

console.log(dataTypes<number>(1));
console.log(dataTypes<string>('str'));
console.log(dataTypes<boolean>(true));
console.log(dataTypes<number[]>([0, 1]));
console.log(dataTypes<string[]>(['one', 'two']));


/* part one */ // arrow function; and Multiple Types

// examle one
let type = <Generic>(val: Generic): Generic => {
    return val
}

// examle two
let type1 = <Generic>(val: Generic): Generic => val


// Not necessarily use Generic one return function
function info<Generic1, Generic2>(valOne: Generic1, valTwo: Generic2): string {
    return `value one is name is ${valOne} and type is ${typeof valOne}, value two is ${valTwo} and type is ${typeof valTwo}`
}

console.log(info<string, number>('ashraf', 21));
console.log(info<string, number>('ali', 30));

/* Generics */ // part three => Classes

class Types <Generics = number> {
    constructor(public userName: Generics) {}
    msg(value: Generics) {
        console.log(`name is ${this.userName} message is ${value}`);
    }
}

let one = new Types('ashraf');
console.log(one.userName);
one.msg('hello ASH');


/* Generics */ // part four => Interfaces

interface books {
    title: string,
    mrg3: number,
    done: boolean
}

interface games {
    name: string,
    level: number,
    TFT: number,
    price: number
}

class Colection <type> {
    public data: type[] = [];
    addition(items: type) {
        this.data.push(items);
    };
}

let ItemOne = new Colection<books>();
ItemOne.addition({title: 'zekola earth section one', mrg3: 11, done: true});
ItemOne.addition({title: 'zekola earth Two', mrg3: 12, done: false});
console.log(ItemOne);
let ItemTwo = new Colection<games>();
ItemTwo.addition({name: 'lol', level: 21 , TFT: 6, price: 0});
console.log(ItemTwo);