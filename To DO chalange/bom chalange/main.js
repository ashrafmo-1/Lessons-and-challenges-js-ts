let inp = document.querySelector(".input")
let btnSubmet = document.querySelector(".add")
let tasksDiv = document.querySelector(".tasks")
let newAray = [];

/* to run Text */
if (localStorage.getItem("tasks"))
    newAray = JSON.parse(localStorage.getItem("tasks"))
getdata()

btnSubmet.onclick = function () {
    if (inp.value !== "") {
        addTaskToAray(inp.value);
        inp.value = ""
    }
};

// remove btn task
tasksDiv.addEventListener("click", function (el) {
    // btn remove Ny class list
    if (el.target.classList.contains("remove")) {
        // remove for localstorage
        delLOcal(el.target.parentElement.getAttribute("data-id"))
        // remve ele from page
        el.target.parentElement.remove()
    }

    // tasking El
    if (el.target.classList.contains("task")) {
        // statuselement
        statusELe(el.target.getAttribute("data-id"))
        // done class
        el.target.classList.toggle("done")
    }
})

// take text for input to array
function addTaskToAray(TaskText) {
    // task data
    let task = {
        id: Date.now(),
        title: TaskText,
        completed: false,
    };
    /* push task TO array */
    newAray.push(task);
    // add Element to page
    addElementTOPage(newAray);
    // add Data to localStorage
    localStData(newAray)
}

function addElementTOPage(newAray) {
    // take Element for array End Set to Page
    /* remove tasks Div */
    tasksDiv.innerHTML = "";
    // add text to page
    newAray.forEach(function (tasks) {
        /* create New Div */
        let div = document.createElement("div")
        div.className = "task"
        // chick if function is done
        if (tasks.completed === true) {
            div.className = "task done"
        }
        div.setAttribute("data-id", tasks.id)
        div.appendChild(document.createTextNode(tasks.title))

        // add btn remove 
        let removeSpan = document.createElement("span")
        removeSpan.className = "remove"
        removeSpan.appendChild(document.createTextNode("del"))
        // append btn to Div
        div.appendChild(removeSpan)
        console.log(div)
        // add tasks div to section page
        tasksDiv.appendChild(div);
    });
}

/* Add Data to localStorage */
function localStData(newAray) {
    window.localStorage.setItem("tasks", JSON.stringify(newAray));
}
// get localstorage Data
function getdata() {
    let data = window.localStorage.getItem("tasks");
    if (data) {
        let tasks = JSON.parse(data);
        addElementTOPage(tasks);
    }
}

function delLOcal(tasks) {
    newAray = newAray.filter(task => task.id != tasks);
    localStData(newAray)
}

function statusELe(tasks) {
    for (i = 0; i < newAray.length; i++) {
        if (newAray[i].id == tasks) {
            newAray[i].completed == false ? (newAray[i].completed = true) : (newAray[i].completed = false)
        }
    }
    localStData(newAray)
}