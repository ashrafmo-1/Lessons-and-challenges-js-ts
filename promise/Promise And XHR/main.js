// Promise And XHR
// AJAX code
let myRequest = new XMLHttpRequest();
myRequest.onreadystatechange = function() {
    // convert JSON Ogject to js object
    if (this.readyState === 4 && this.status === 200) {
        let jsObj = JSON.parse(this.responseText);
        for (i = 0; i < jsObj.length; i++) {
            let div = document.createElement("div");
            let reposname = document.createTextNode(jsObj[i].full_name)
            div.appendChild(reposname)
            document.body.appendChild(div)
        }
    }
};
// get JSON link
myRequest.open("GET", "https://api.github.com/users/ashrafmo-1/repos");
myRequest.send();


// Making the  plan in a way promise

let getData = function(getAPI) {
    return new Promise(function(resolve, reject) {
        let myRequest = new XMLHttpRequest();
        myRequest.onload = function() {
            if (this.readyState === 4 && this.status === 200) {
                resolve(JSON.parse(this.responseText))
            } else {
                reject(Error(`not valed data in API`))
            }
        };
        // get JSON link
        myRequest.open("GET", getAPI);
        myRequest.send();
    })
}

// Api link
getData('https://api.github.com/users/ashrafmo-1/repos').then(
        (result) => {
            // Operation One
            result.length = 10
            return result
        } // Operation Two
    ).then((result) => console.log(result[0].name))
    .catch((rejec) => console.log(rejec))