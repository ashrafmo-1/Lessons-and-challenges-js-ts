const chickForAlt = document.querySelectorAll("img")

console.log(chickForAlt) //for chick all items

for (index = 0; index < chickForAlt.length; index++) {
    if (chickForAlt[index].hasAttribute("alt")) {
        chickForAlt[index].alt = "old"
    } else {
        chickForAlt[index].alt = "Elzero New"
    }
}