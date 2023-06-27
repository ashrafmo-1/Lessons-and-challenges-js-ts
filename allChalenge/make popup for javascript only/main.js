const divElement = document.createComment("div");
const h1Element = document.createElement("h1");
const pElement = document.createElement("p")
const btn = document.createElement("button")

function timepopup() {
    // add class for all Element

    // Add Text Content
    h1Element.textContent = "Welcom"
    divElement.textContent = "Welcom"

    h1Element.className = "head"
    divElement.className = "All div"
    document.body(divElement)

}