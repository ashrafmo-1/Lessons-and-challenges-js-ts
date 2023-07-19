// Making the  plan py promise
// first Step get Api
let getDate = function(getAPI) {
    return new Promise(function(resolvedFunction, rejectedFunction) {
        // request to xml
        let myRequest = new XMLHttpRequest()
            // console.log(myRequest) // test
        myRequest.onload = function() {
            // add condition
            if (this.readyState === 4 && this.status === 200) {
                // create resoved function
                resolvedFunction(JSON.parse(this.responseText));
                // console.log(this.responseText) //from testing
            } else {
                rejectedFunction(Error(`API not Valedation`))
            }
        }
        myRequest.open("get", getAPI); // add parameter
        myRequest.send()
    })
}
getDate('./main.json')
    .then((re) => {
        re.length = 5
        return re
    }).then((re) => {
        for (i = 0; i < re.length; i++) {
            // add Element to page
            let div = document.createElement("div");
            let h3 = document.createElement("h3");
            let title = document.createTextNode(re[i].title);
            h3.appendChild(title);
            let p = document.createElement("p");
            let description = document.createTextNode(re[i].description);
            p.appendChild(description);
            div.appendChild(h3);
            div.appendChild(p);
            document.body.appendChild(div);
        }; // make reject Error
    }).catch((rej) => console.log(rej));