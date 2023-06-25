// Set
window.localStorage.setItem("color", "black")
window.localStorage.backGroundClor = "blue"
window.localStorage['bgi'] = "avater"

console.log(window.localStorage)

// Get
window.localStorage.getItem("color")

console.log(window.localStorage.getItem("color"))
console.log(window.localStorage.backGroundClor)
console.log(window.localStorage['bgi'])

/* remove item */
// window.localStorage.removeItem("color")

/* clear all items */
// window.localStorage.clear()

// get Kay
console.log(window.localStorage.key(1))

// set style in page
document.body.style.backgroundColor = window.localStorage.backGroundClor