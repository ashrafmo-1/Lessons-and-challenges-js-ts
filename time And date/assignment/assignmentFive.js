let strat = new Date()

// Operations
for (let index = 0; index < 10000; index++) {
    let loop = document.createElement("div");
    loop.appendChild(document.createTextNode(index))
    document.body.appendChild(loop)
}

let end = new Date()

let duration = end - strat;
console.log(`Loop Took ${duration} Milliseconds.`)

// Needed Output
// "Loop Took 1921 Milliseconds."