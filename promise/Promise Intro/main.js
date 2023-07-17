let myPromise = new Promise((resolveFun, rejectFun) => {
    let connection = true;
    if (connection) {
        resolveFun("Done Connection");
    } else {
        rejectFun(Error("Connection failed"));
    }
})

console.log(myPromise);

myPromise.then(
    /* Arrow Function */
    (resolveVal) => console.log(`${resolveVal}`),
    (rejectVal) => console.log(` Bad${rejectVal}`),
);

let resolveer = (resolveVal) => console.log(`${resolveVal}`);
let rejecter = (rejectVal) => console.log(` Bad${rejectVal}`);
myPromise.then(resolveer, rejecter);

// myPromise.then(
//     (rejectVal) => setTimeout(() => {
//         console.log(`hi`)
//     }, 1000),
// );

// let h1 = document.createElement("h1")
// h1.textContent = "hi Ashraf"
// myPromise.then(
//     document.body.appendChild(h1)
// );