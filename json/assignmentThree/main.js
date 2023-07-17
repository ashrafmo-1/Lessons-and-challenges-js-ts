let request = new XMLHttpRequest()
request.open("get", "../assignmentOne/assignmentOne.json");
request.send();
console.log(request); //for chick only

request.onreadystatechange = function() {
    // Verified Conditions 
    if (this.readyState === 4 && this.status === 200) {
        // for chick only
        console.log(this.readyState); // done
        console.log(this.status); // done
        console.log(this.responseText); // done

        // convert JSONObject To jsObject
        let jsObject = JSON.parse(this.responseText);
        console.log(jsObject); // done
        console.log(typeof jsObject); // done [object]

        // loop to change assignment
        for (i = 0; i < jsObject.length; i++) {
            jsObject[i].id = 1;
            jsObject[i].section = "Assignment";
            jsObject[i].name = "Ali";
        }
        console.log(jsObject);

        // convert jsObject To JSONObject
        let convertJsToJSON = JSON.stringify(jsObject);
        console.log(convertJsToJSON);
        console.log(typeof convertJsToJSON);
    };
};