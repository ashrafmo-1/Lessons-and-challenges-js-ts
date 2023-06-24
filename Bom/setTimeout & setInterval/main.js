// setTimeout(function () {
//     console.log("hi time out");
//     document.write("welcom")
// }, 2000)


// setTimeout(sayMessage, 4000)
// function sayMessage() {
//     document.write(`<h3> message time </h3>`)
// }


// setTimeout(sayMessagePramas, 5000, "Ashraf", 21, "Google")
// function sayMessagePramas(user, age, work) {
//     document.write(`<h1> message time ${user} age is: ${age} Word As ${work}</h1>`);
// };


// const timer = setTimeout(stopTime, 3000)
// function stopTime() {
//     console.log(`<h1> Stop time </h1>`);
// };


// const btnStop = document.querySelector("button")
// btnStop.onclick = function () {
//     clearTimeout(1)
// }


// =====        =========== setInterval ====           ============

// setInterval(function () {
//     console.log("hi time out");
// }, 2000)


// setInterval(sayMessage, 4000)
// function sayMessage() {
//     console.log(`<h3> message time </h3>`)
// }


// setInterval(sayMessagePramas, 5000, "Ashraf", 21, "Google")
// function sayMessagePramas(user, age, work) {
//     console.log(`<h1> message time ${user} age is: ${age} Word As ${work}</h1>`);
// };


// const timer = setInterval(stopTime, 3000)
// function stopTime() {
//     console.log(`<h1> Stop time </h1>`);
// };


// const btnStop = document.querySelector("button")
// btnStop.onclick = function () {
//     clearInterval(timer)
// }

let counterDwon = document.querySelector("div")

function down() {
    counterDwon.innerHTML -= 1
    if (counterDwon.innerHTML === "0") {
        clearInterval(countlow)
    }
}
let countlow = setInterval(down, 1000)