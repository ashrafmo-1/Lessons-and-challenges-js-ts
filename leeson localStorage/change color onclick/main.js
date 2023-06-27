// to select All Color
let AllLis = document.querySelectorAll("ul li")
let ex = document.querySelector('.experiment')

/* to clear All localStorage */
// window.localStorage.clear()

/* step two */
if (window.localStorage.getItem("color"))
    /* Is the color present in localStorage */
    /* [One] add color to Div Element */
    ex.style.backgroundColor = window.localStorage.getItem("color");
/* [two] remove active class for all whin click to any Element */
AllLis.forEach(function (remmoveActive) {
    remmoveActive.classList.remove('active')
})
/* [three] add class Active to click targit Element  */
document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active")

/* step [One] */
AllLis.forEach(function (li) {
    li.addEventListener("click", function (ele) {
        /* to chick all activ li */
        console.log(ele.currentTarget.dataset.color)
        // remove active class for all whin click to any Element
        AllLis.forEach(function (remmoveActive) {
            remmoveActive.classList.remove('active')
        })
        // add class Active to click targit Element 
        ele.currentTarget.classList.add('active')
        // add color name Only to localStorage
        window.localStorage.setItem("color", ele.currentTarget.dataset.color);
        // Edit bgc Element
        ex.style.backgroundColor = ele.currentTarget.dataset.color;
    })
})