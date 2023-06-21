// Old experiment

const pargraph = document.querySelector("p")

// event on click Element
// pargraph.onclick = one;
// pargraph.onclick = tow;

// function one() {
//     console.log("hi Scripting Ashraf for onClick One")
// };

// function tow() {
//     console.log("hi Scripting Ashraf for onClick Tow")
// };



// // AddEventListener { New experiment

// // Examble One
// pargraph.addEventListener("click", function () {
//     console.log("hi Scripting Ashraf for addEventListener")
// })

// // Examble One
// pargraph.addEventListener("click", one);
// pargraph.addEventListener("click", tow);


pargraph.onclick = function () {
    let NEwP = pargraph.cloneNode(true)
    NEwP.className = `newcopy`
    document.body.appendChild(NEwP)
}

// prent text 
// let colone = document.querySelector(".newcopy") // An Error
// .newcopy.onclick = function () {

// }

document.addEventListener("click", function (e) {
    if (e.target.className === 'newcopy') {
        console.log("ash")
    }
});

const hoho = document.getElementsByClassName("hello")

// document.addEventListener("click", function (ele) {
//     if (ele.target.className === 'hello') {

//         console.log("ashraf Welcom")
//     }
// })