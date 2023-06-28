/* select All Element */
let allFonts = document.querySelectorAll(".fontBox p");
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
    })
});