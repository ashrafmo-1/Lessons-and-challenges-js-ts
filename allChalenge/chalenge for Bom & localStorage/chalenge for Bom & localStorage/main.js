/* select All Element */
let allColors = document.querySelectorAll(".colorsBox p");
let boxChange = document.querySelector(".output")

if (window.localStorage.getItem('colorChange')) {
    // step One
    /* add color to element ## save color to localStorage */
    boxChange.style.backgroundColor = window.localStorage.getItem('colorChange');
    // step two
    /* remove Acvtive Class for All Element for All */
    allColors.forEach(function (removeActive) {
        removeActive.classList.remove('active')
    })
    // step three
    /* add classes to any element Onclick */
    document.querySelector(`[data-color="${window.localStorage.getItem('colorChange')}"]`).classList.add('active')
};

/* colors */ // step [one]
allColors.forEach(function (co) {
    co.addEventListener("click", function (ele) {
        // for chick only
        console.log(ele.currentTarget.dataset.color)
        // remove Acvtive Class for All Element for All
        allColors.forEach(function (removeActive) {
            removeActive.classList.remove('active')
        })
        // add class Active onclick targit element
        ele.currentTarget.classList.add('active')
        // add color name to localStorage
        window.localStorage.setItem("colorChange", ele.currentTarget.dataset.color);
        // change location Color
        boxChange.style.backgroundColor = ele.currentTarget.dataset.color;
    });
});



let allFonts = document.querySelector("#font");
let sizeBox = document.querySelector("#sizeBox");


// edit on box only /* font family */
allFonts.onchange = function () {
    window.localStorage.setItem("fontchange", allFonts.value)
    boxChange.style.fontFamily = allFonts.value
}
// add dato to localStorage
boxChange.style.fontFamily = window.localStorage.getItem('fontchange')
// to pin select && never ralod changer
allFonts.value = window.localStorage.getItem('fontchange')


// edit on box only /* font size */
sizeBox.onchange = function () {
    window.localStorage.setItem("fontSize", sizeBox.value)
    boxChange.style.fontSize = sizeBox.value
}
// add all data to localStorage
boxChange.style.fontSize = window.localStorage.getItem("fontSize")
// pin valu in box
sizeBox.value = window.localStorage.getItem("fontSize")