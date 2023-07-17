/* make request from Api */
let req = new XMLHttpRequest();

req.open("Get", "../what is json/apiGithupMyAccount copy.js");
req.send();
console.log(req);

req.onreadystatechange = function() {
    // to get data
    if (this.readyState === 4 && this.status === 200) {
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
        };
    };
};