let request = new XMLHttpRequest()
request.open("get", "../assignmentOne/assignmentOne.json");
request.send();
request.onreadystatechange = function() {
    // Verified Conditions 
    if (this.readyState === 4 && this.status === 200) {
        // convert JSONObject To jsObject
        let jsObject = JSON.parse(this.responseText);
        //master data div
        let masterDiv = document.createElement("div");
        masterDiv.id = "data";
        document.body.appendChild(masterDiv);
        // loop from JSONObject
        for (index = 0; index < jsObject.length; index++) {
            // added id in h1
            let h1 = document.createElement("h1");
            let idHeader = document.createTextNode(`myID is :- ${jsObject[index].id}`);
            h1.appendChild(idHeader);
            // add name to paragraph
            let paragraphNmae = document.createElement("p");
            let nmae = document.createTextNode(jsObject[index].name);
            paragraphNmae.appendChild(nmae);
            // add section to paragraph
            let paragraphSection = document.createElement("p");
            let section = document.createTextNode(jsObject[index].section);
            paragraphSection.appendChild(section);
            // add address to paragraph
            let paragraphAddress = document.createElement("p");
            let address = document.createTextNode(jsObject[index].address);
            paragraphAddress.appendChild(address);
            // add Article to paragraph
            let paragraphArticle = document.createElement("p");
            let article = document.createTextNode(jsObject[index].Article);
            paragraphArticle.appendChild(article);
            // all data append to page
            let dataDiv = document.createElement("div");
            dataDiv.appendChild(h1);
            dataDiv.appendChild(paragraphNmae);
            dataDiv.appendChild(paragraphSection);
            dataDiv.appendChild(paragraphAddress);
            dataDiv.appendChild(paragraphArticle);
            masterDiv.appendChild(dataDiv)
            document.body.appendChild(dataDiv);
        };
    };
};