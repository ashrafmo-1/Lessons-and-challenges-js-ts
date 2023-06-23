let elNum = document.getElementsByName("elements")[0];
form = document.forms;
type = document.querySelector("select");
text = document.getElementsByName("texts")[0];
results = document.querySelector(".results");


// chick for all Element
// console.log(numElement)
// console.log(textElement)
// console.log(selectElement)
// console.log(form)


form[0].onsubmit = function (element) {
    element.preventDefault() // off relode Or remove site

    //set class && remove past element & add new element
    document.querySelectorAll(".box").forEach(element => element.remove())

    // add element to site
    for (let i = 1; i <= elNum.value; i++) {

        // to create element
        const El = document.createElement(type.value);
        const textEl = document.createTextNode(text.value);

        // attr in element
        El.className = "box"
        El.title = "Element"
        El.id = `id-${i}`;

        // element style
        El.style.display = "inline-block";
        El.style.width = "150px";
        El.style.margin = "1rem";
        El.style.padding = "1rem";
        El.style.backgroundColor = "rgb(255, 172, 170)";
        El.style.color = "black";
        El.style.textAlign = "center";
        El.style.borderRadius = ".5rem";

        El.appendChild(textEl)
        results.appendChild(El)
    }
};


// styling value input
const inputAll = document.querySelectorAll(".input")
const submitBtn = document.querySelector("[type='submit']")
const classBox = document.querySelectorAll(".box")

for (index = 0; index < inputAll.length; index++) {
    inputAll[index].style.display = "block"
    inputAll[index].style.boxSizing = "border-box"
    inputAll[index].style.width = "400px"
    inputAll[index].style.padding = "1rem"
    inputAll[index].style.margin = "1rem auto"
    inputAll[index].style.border = "1px solid red"
    inputAll[index].style.borderRadius = "10px"
    inputAll[index].style.outline = "none"
}

submitBtn.style.display = "block"
submitBtn.style.margin = "1rem auto"
submitBtn.style.width = "400px"
submitBtn.style.borderRadius = "10px"
submitBtn.style.padding = "10px"
submitBtn.style.border = "none"
submitBtn.style.backgroundColor = "black"
submitBtn.style.color = "red"
submitBtn.style.fontSize = "30px"
submitBtn.style.cursor = "pointer"