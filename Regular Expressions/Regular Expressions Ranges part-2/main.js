let myString = "AjksaqwPKDkbDBCokk^%(*&(c%$6444654sFX"
    /****************************************************/
let atozSmall = /[a-z]/g;
let notAtozSmall = /[^a-z]/g;
let atozcapetal = /[A-Z]/g;
let notAtozcapetal = /[^A-Z]/g;
let abc = /[abc]/g;
let notabc = /[^abc]/g;
let ABC = /[ABC]/g;
let notABC = /[ABC]/g;
let abcAbc = /[a-zA-Z]/g;
let notabcAbc = /[^a-zA-Z]/g;
let specials = /[^a-z^A-Z1-9]/g;

console.log(myString.match(atozSmall));
console.log(myString.match(notAtozSmall));
console.log(myString.match(atozcapetal));
console.log(myString.match(notAtozcapetal));
console.log(myString.match(abc));
console.log(myString.match(notabc));
console.log(myString.match(ABC));
console.log(myString.match(notABC));
console.log(myString.match(abcAbc));
console.log(myString.match(notabcAbc));
console.log(myString.match(specials));

//