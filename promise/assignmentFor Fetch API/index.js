// added dev to page by Fetch
async function fetchData() {
    try {
        let Data = await fetch("../assignmentForPromise/main.json")
        let jsObject = await Data.json()
        jsObject.length = 5
        console.log(jsObject)
        for (let i = 0; i < jsObject.length; i++) {
            let div = document.createElement("div")
            let h3 = document.createElement("h3")
            let p = document.createElement("p")
            let title = document.createTextNode(jsObject[i].title)
            h3.appendChild(title)
            let description = document.createTextNode(jsObject[i].description)
            p.appendChild(description)
            document.body.appendChild(div)
            div.appendChild(h3)
            div.appendChild(p)
        }
    } catch {
        console.log(`Error Fetch`)
    } finally {
        console.log(`Welcom Assignmant Fetch`)
    }
};
fetchData()