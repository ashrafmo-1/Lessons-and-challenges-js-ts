/*
Object Meta Data And Descriptor
- writable
- enumerable
- configurable [Cannot Delete Or Reconfigure]
*/

const myObject = {
    a: 10,
    b: 11
}


Object.defineProperty(myObject, 'c', {
    // if you not type this property the default value is false
    writable: false,  // rename value
    enumerable: true, // not can make loop
    configurable: false, // control or remove value or redefine
    value: 12
})

myObject.c = 100
console.log(delete myObject.c);

for(let x in myObject) {
    console.log(x, myObject[x]);
}
console.log(myObject);