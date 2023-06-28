/* select All Element */
let allColors = document.querySelector("#color");
let allFonts = document.querySelector("#font");
let sizeChange = document.querySelector("#size")

allColors.onchange = function () {
    window.localStorage.setItem("colorChange", allColors.value)
    document.body.style.color = allColors.value
}

allFonts.onchange = function () {
    window.localStorage.setItem("fontchange", allFonts.value)
    document.body.style.fontFamily = allFonts.value
}

sizeChange.onchange = function () {
    window.localStorage.setItem("sizeChange", sizeChange.value)
    document.body.style.fontSize = sizeChange.value
}

document.body.style.color = window.localStorage.getItem('colorChange')
document.body.style.fontFamily = window.localStorage.getItem("fontchange")
document.body.style.fontSize = window.localStorage.getItem('sizeChange')

allColors.value = window.localStorage.getItem('colorChange')
allFonts.value = window.localStorage.getItem("fontchange")
sizeChange.value = window.localStorage.getItem('sizeChange')