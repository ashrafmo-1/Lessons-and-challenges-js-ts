// Object Meta Data And Descriptor
// define multiple Properties
// Chick Descriptors

/*
All properties defult True

enumerable: True
writable: True
configurable: True
*/
let Object1 = {
    a: 1,
    b: 2,
}

// you musy type all properties
Object.defineProperties(Object1, {
    c: {
        configurable: true,
        value: 3,
    },
    d: {
        configurable: true,
        value: 4,
    },
    e: {
        configurable: true,
        value: 5,
    },
    f: {
        configurable: true,
        value: 6,
    },
});

console.log(Object1); // to show all items
console.log(Object.getOwnPropertyDescriptor(Object1, "c"))
console.log(Object.getOwnPropertyDescriptors(Object1))