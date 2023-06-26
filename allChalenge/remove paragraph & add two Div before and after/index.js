const start = document.createElement("div")
const end = document.createElement("div")
const elementD = document.querySelector(".our-element")
const reParagraph = document.querySelector("p")

/*to remove any thing for page */
reParagraph.remove()

/*  add any thing to page  [Examble One] */
start.className = "start"
start.title = "Start Element"
start.setAttribute("data-value", "start")
start.textContent = "Start"

end.className = "end"
end.title = "end Element"
end.setAttribute("data-value", "end")
end.textContent = "end"

document.body.append(start)
document.body.append(end)
start.after(elementD)