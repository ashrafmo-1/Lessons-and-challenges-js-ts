const obj = {
    a: 1,
    b: 2,
    c: 3,
};

// Add New Property
Object.defineProperty(obj, "d", {
    writable: true, // you can Edit For This
    enumerable: false, // you can not make looping For This
    // If it were true = you can Edit And Can redefine property && If it were false = you cannot Edit And Cannot redefine property
    configurable: true,
    value: 4
});


// edit property [d]
obj.d = 50
    // looping from 
for (let property in obj) {
    console.log(property, obj[property])
}
// delect item
console.log(delete obj.d)
console.log(obj);