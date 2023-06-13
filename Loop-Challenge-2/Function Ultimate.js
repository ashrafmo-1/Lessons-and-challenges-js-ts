function shoeInformation(userName = "unKnow", age = "unKnow", rate = 0, show = "yes", ...skills) {
    document.write(`<div>`)
        document.write(`<h1>Wellcom ${userName}</h1>`)
        document.write(`<h2>Age:- ${age}</h2>`)
        document.write(`<h3>Hour Rate:- ${rate} hours</h3>`)
        
    if (show === "yes") {
        if (skills.length > 0) {
            document.write(`<p>SKILLS IS:- ${skills.join(" || ")} </p>`)
        }else {
            document.write(`<p> SKILLS:- No Skills </p>`)
        }
    } else {
        document.write(`<p> Skills Is Heddin </p>`)
    }
    document.write(`</div>`)
}

shoeInformation("Ashraf", 21, 6, "yes", "html", "css", "js", "react");