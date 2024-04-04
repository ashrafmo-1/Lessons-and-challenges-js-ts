// lesson one form type ailas
type str = string;
type num = number;

let UserName:str = 'ashraf';
let x: num;
x = 10;
x = 12;

// lesson two from type ailas
type Mix = {
    name: string,
    age: number,
    work: boolean,
}

let informationProgramming = (val: Mix) => {
    console.log(`programming information => user Name is ${val.name}`);
    console.log(`programming information => age ${val.age}`);
    console.log(`programming information => working ${val.work}`);
}

informationProgramming({name: 'ashraf', age: 21, work: true});