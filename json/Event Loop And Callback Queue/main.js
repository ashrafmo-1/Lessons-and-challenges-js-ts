// Learn JavaScript In Arabic 2021 - #175 - Event Loop And Callback Queueconsole.log("one")

// console.log("one")
// console.log("two")
// setTimeout(() => {
//     console.log("four")
// }, 0);
// setTimeout(() => {
//     console.log("five")
// }, 0);


setTimeout(() => { // الكود دا مش بيتنفز فوقتها هو بيعمل loop ولما يلاقي المتغيرات بتاعته يبددا يشتغل
    console.log(myvar)
}, 0);

let myvar = 100;
myvar += 100