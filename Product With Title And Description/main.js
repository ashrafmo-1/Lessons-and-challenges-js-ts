for (let i = 1; i <= 100; i++) {
    const newSite = document.createElement("section");
    const heading = document.createElement("h1");
    const description = document.createElement("p");
    const texthead = document.createTextNode("Prouct One " + [i])
    const textDescription = document.createTextNode("lapTop Asus Tuf Gaming " + [i])
    // classes name 
    newSite.className = "myMainsection"
    heading.className = "title";
    description.className = "desc"
    // add text to all element
    heading.appendChild(texthead);
    description.appendChild(textDescription);
    // add heading & descrition to main section
    newSite.appendChild(heading);
    newSite.appendChild(description);
    // add main section 
    document.body.appendChild(newSite);
}