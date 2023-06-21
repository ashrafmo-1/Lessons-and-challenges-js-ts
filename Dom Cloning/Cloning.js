/*
[Dom Cloning]
- cloneNode  نسخ العنصر في مكان اخر
*/

let desc = document.querySelector("p").cloneNode(true)
let deve = document.querySelector("div")

// edit clone class
desc.id = `${desc.id}-new`
deve.appendChild(desc)