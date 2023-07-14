// start time
let start = new Date();

// Operations
for (let i = 0; i < 10000; i++) {
    // document.write(`<div>${i}</div>`);
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(i));
    document.body.append(div);
}
// end time
let end = new Date();

// Operations duration;
let duration = end - start;
console.log(duration);