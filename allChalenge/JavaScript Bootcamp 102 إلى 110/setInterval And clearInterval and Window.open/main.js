const myDiv = document.querySelector("div")
function Down() {
    myDiv.innerHTML -= 1
    if (myDiv.innerHTML === "0") clearInterval(countLow)
    if (myDiv.innerHTML === "0") open("https://elzero.org/javascript-bootcamp-assignments-lesson-from-102-to-110/")
    if (myDiv.innerHTML === "5") open("https://elzero.org", "", "width=400, height=400")
}
const countLow = setInterval(Down, 1000);