/* make request from Api */
let req = new XMLHttpRequest();

req.open("Get", "../what is json/apiGithupMyAccount.json");
req.send();
console.log(req);

req.onreadystatechange = function() {
    // chick
    // console.log(req.readyState);
    // console.log(req.status);
    // to get data
    if (this.readyState === 4 && this.status === 200) {
        console.log(this.responseText);
    };
};
console.log(this.responseText);