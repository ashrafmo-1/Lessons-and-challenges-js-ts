/*
    Object Meta Data And Descriptor
    - Define Multiple Properties
    - Check Descriptors
*/

const myObject = {
    a: 0,
    b: 1,
    c: 2,
}

Object.defineProperties(myObject, {
    'd': {
        configurable: true,
        value: 3
    },
    'e': {
        configurable: true,
        value: 4
    }
})

console.log(myObject);
console.log(Object.getOwnPropertyDescriptor(myObject, 'd'));
console.log(Object.getOwnPropertyDescriptors(myObject));