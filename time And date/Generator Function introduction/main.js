/*
run code only yuoer need
=> Generators. (عمليه الانتاجيه)
    -> generator Function Run Its code When Requird
    -> generator Function Reuter Special Object [Generator Object]
    -> generator Are iterable
*/

function* genetatNum() {
    yield 1;
    // alert("hello");
    yield 2;
    yield 3;
    yield 4;
};

let generator = genetatNum()
console.log(generator)
console.log(typeof generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let val of genetatNum()) {
    console.log(val)
}