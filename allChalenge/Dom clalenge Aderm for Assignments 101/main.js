const add = document.querySelector(".classes-to-add");
const remove = document.querySelector(".classes-to-remove");
const Current = document.querySelector("[title='Current']")
const divout = document.querySelector(".classes-list div")

// function
function addAndRemove() {
    /* remove All element At Starting */
    document.querySelectorAll("span").forEach(element => element.remove());

    // add And remove Classes
    for (i = 0; i < this.value.trim().split(" ").length; i++) {
        if (add.value) {
            Current.classList.add(add.value.toLowerCase().trim().split(" ")[i]);
        }

        if (remove.value) {
            Current.classList.remove(remove.value.toLowerCase().trim().split(" ")[i]);
        }
    }
    this.value = "";

    // add && remove Element
    if (Current.classList.length) {
        [...Current.classList].sort().forEach(el => {
            const span = document.createElement("span");
            span.textContent = el;
            divout.append(span)
        })
    } else divout.textContent = "No Class Avalid"
}

add.onblur = addAndRemove
remove.onblur = addAndRemove