// synatxs fetch

/* to get link from API */
fetch("https://api.github.com/users/ashrafmo-1/repos")
    .then((result) => {
        console.log(result); // back Response, Back(Entire Http Response All)
        let myresult = result.json(); // convert json Object to js Object
        console.log(myresult)
        return myresult
    }).then((myresult) => {
        // myresult.length = 20;
        return myresult
    }).then((myresult) => {
        console.log(myresult[18].name)
    })