// make request from API
let requestAssignmentOne = new XMLHttpRequest();

// Get JEON File
requestAssignmentOne.open("GET", "../what is json/apiGithupMyAccount copy.js", true);
requestAssignmentOne.send();
console.log(requestAssignmentOne)

requestAssignmentOne.onreadystatechange = function() {
    // print JSON file in js file
    if (this.readyState === 4 && this.status === 200) {
        setTimeout(function() {
            console.log("Data Loaded")
        }, 0);
        // show JSON file on console
        console.log(this.responseText);
    }
};