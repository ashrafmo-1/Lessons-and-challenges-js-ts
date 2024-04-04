// type in variables

let Fname: string = 'type'
let num: number = 10
let boo: boolean = false

if(num >= 10) {
    console.log(Fname, boo);
}

// type in variables
function sun(num1: number, num2: number) {
    return num1 + num2
}
sun(2, 2)
// sun(2, '2') // error message

// type in arrays

let arr: string[] = ['name']

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i].repeat(3));
}