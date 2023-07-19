// onreadystatechange
// onload
// readyState
// status

let req = new XMLHttpRequest()
req.open("get", "./main.json")
req.send()
console.log(req) // from testing And Get some data(onreadystatechange, onload, readyState, status)

req.onreadystatechange = function() {
    // make condition
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText); // test from JSON OBJECT
        let jsObject = JSON.parse(this.responseText)
        console.log(jsObject) // test from js object
        for (let i = 0; i < jsObject.length; i++) {
            jsObject.length = 5
            let div = document.createElement("div")
            let h3 = document.createElement("h3")
            let p = document.createElement("p")
            let title = document.createTextNode(jsObject[i].title)
            let description = document.createTextNode(jsObject[i].description)
            h3.appendChild(title)
            p.appendChild(description)
            document.body.appendChild(div)
            div.appendChild(h3)
            div.appendChild(p)
        }
    }
}