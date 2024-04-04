
// noImplicitAny



let message = true

function info(name: string, age: number, salary: number): string {
    const hello = 100;
    if(message){
        return `my name is ${name}, my age is ${age}, my salary is ${salary}, test variabble ${hello}`;
    }
    return `no data found`
}

console.log(info('ashraf', 40, 5000));


// my test example.
let learn: string = 'typeScript'
const sayWelcome = (userName: string, age: number, learn: string) => {
    if(learn === 'string') {
        return `Welcome ${userName}, your age is ${age} and you learn ${learn}`;
    }
    return 'done condition'
}

console.log(sayWelcome('ashraf', 21, learn));
