let promesOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("this is Promise One");
    }, 5000);
});

let promesTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is Promise Two");
    }, 1000);
});

let promesThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("this is Promise Three");
    }, 2000);
});

// if All = resove => printAll
// Else one = reject => print Rejected Only
/* All */
Promise.all([promesOne, promesTwo, promesThree]).then(
    (resovedValu) => console.log(resovedValu),
    (rejectValu) => console.log(`rejected ${rejectValu}`)
);

/* if All resolve will print All promise Else reject print rejected only */
Promise.race([promesOne, promesTwo, promesThree]).then(
    (resovedValu) => console.log(resovedValu),
    (rejectValu) => console.log(`rejected ${rejectValu}`)
);

/* print All resolved And rejected */
Promise.allSettled([promesOne, promesTwo, promesThree]).then(
    (resovedValu) => console.log(resovedValu),
    (rejectValu) => console.log(`rejected ${rejectValu}`)
);