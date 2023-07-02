// set => can store Any data valiues
// weakSet => colection Of Object Only

// set => have A size Properties
// weakSet => Does not have A size Properties


/* modern Set */
// typyOf data
const newSet = new Set([1, 2, 2, 3, "z", "z"])
console.log(newSet)

// size
console.log(`size of Element of this => ${newSet.size}`)

// values + keys Alias
let iterator = newSet.values();

console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next().value)
console.log(iterator.next())
console.log(iterator.next())

// forEach
newSet.forEach(function (el) {
    console.log(el)
})

/* weakSet */
// typyOf data
// const newWeakSet = new WeakSet([1, 2, 2, 3, "z", "z"]) // an Error When nead an Object
const newWeakSet = new WeakSet([{ Ashraf: 1, Nadieh: 2 }])
console.log(newWeakSet)

/* weakSet not valed size Properties */

// values + keys Alias

// search from WeakSet Use Cases


// Learn JavaScript In Arabic 2021 - #125 - 