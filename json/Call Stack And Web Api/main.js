setTimeout(() => {
    return console.log("hi API")
}, 0)

function one() {
    console.log("one")
}

function two() {
    one()
    console.log("two")
}

function three() {
    two()
    console.log("three")
}
three()

/* stack
====================================
    console.log("one")
====================================
function one() {
    console.log("one")
}
====================================
function two() {
    one()
    console.log("two")
}
====================================
function three() {
    two()
    console.log("three")
}
====================================
*/

console.log("one")
console.log("two")
console.log("three")