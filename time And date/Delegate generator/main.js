// Delegate generator
function* generatorNum() {
    yield 1;
    yield 2;
    yield 3;
}

function* generatorLetters() {
    yield "A";
    yield "B";
    yield "C";
}

function* generatorAll() {
    yield* generatorNum()
    yield* generatorLetters()
    yield*[4, 5, 6, 7]
}

let generator = generatorAll()

console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())
console.log(generator.return("End")) // close yield
console.log(generator.next())
console.log(generator.next("hi"))
console.log(generator.next())