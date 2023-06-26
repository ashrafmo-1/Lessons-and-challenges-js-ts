// const div = document.querySelector("div")
// const span = document.querySelector("span")
// const p = document.querySelector("p")
// const article = document.querySelector("article")
// const section = document.querySelector("section")

// div.onclick = function () {
//     console.log("my div")
// }
// span.onclick = function () {
//     console.log("my span")
// }
// p.onclick = function () {
//     console.log("my paragraph")
// }
// article.onclick = function () {
//     console.log("my article")
// }
// section.onclick = function () {
//     console.log("my section")
// }


/* dinamoc Examble */
// make Array 
[...document.body.children].forEach(function (element) {
    element.onclick = _ => console.log(`this is ${element.localName}`)
})











/* to chick for element */
// console.log(div)
// console.log(span)
// console.log(p)
// console.log(article)
// console.log(section)