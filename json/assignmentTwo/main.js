// make request from API
let requestAssignmentOne = new XMLHttpRequest();

// Get JEON File
requestAssignmentOne.open("GET", "../what is json/apiGithupMyAccount copy.js", true);
requestAssignmentOne.send();

requestAssignmentOne.onreadystatechange = function() {
    // print JSON file in js file
    if (this.readyState === 4 && this.status === 200) {

        // show JSON file on console
        console.log(this.responseText);

        // convert JSON file to js file
        let jsData = JSON.parse(this.responseText)
        console.log(jsData)

        // loop on data
        for (i = 0; i < jsData.length; i++) {
            let div = document.createElement("div");
            let repoName = document.createTextNode(jsData[i].id)
            div.appendChild(repoName)
            document.body.appendChild(div)
        }
    }
};