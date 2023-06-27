let allEl = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");
let btn = document.createElement("button");

function mkPopup() {
    // add text content
    h1.textContent = "welcom"
    p.textContent = "welcom Ashraf Mohamed"
    btn.textContent = "x"

    // add element in page
    allEl.append(h1, p, btn);
    document.body.append(allEl)

    // add style popup
    document.body.style.cssText = "font-family: 'Roboto', sans-serif;"
    allEl.style.cssText = "text-align: center; font-size: 22px; background-color: red; width: fit-content; margin: auto; padding: 10px 80px; border-radius: 15px; position: relative;"
    btn.style.cssText = "position: absolute; top: -5px; right: -5px; border-radius: 50%; border: none; font-size: 19px; cursor: pointer;"

    btn.addEventListener("click", function () {
        btn.parentElement.remove()
    })
}

// to run element in page
setTimeout(mkPopup, 2000)