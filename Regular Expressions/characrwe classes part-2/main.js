/*[\b] => */
/*[\B] => */

let names = "Ashraf 1Spam 2Spam 3Spam Osama Spam4 Spam5 Ahmed Ali Nada Aspamo"
    // spam name for Start Character
let namedRe = /\bspam/ig
    // spam name for End Character
let namedReBack = /spam\b/ig
    // spam name for First Or End
let namedReForEv = /(\bspam|spam\b)/ig
console.log(names.match(namedRe))
console.log(names.match(namedReBack))
console.log(names.match(namedReForEv))

/* test method*/
console.log(namedReForEv.test(names))
console.log(/(\bspam|spam\b)/ig.test("1Spam"))
console.log(/(\bspam|spam\b)/ig.test("Ashraf"))
console.log(/(\bspam|spam\b)/ig.test("Spam55"))