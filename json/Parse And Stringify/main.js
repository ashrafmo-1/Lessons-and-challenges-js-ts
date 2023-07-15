/* JSON
JSON.parse -> convert Text Data to js Object.
JSON.stringfy -> convert js Object to JSON
*/

let JSONObject = `{ "name": "ashraf", "Id": "313" }`
console.log(typeof JSONObject);
console.log(JSONObject);

// convert JSON to jsObject
let jsObject = JSON.parse(JSONObject)
console.log(typeof jsObject);
console.log(jsObject);

jsObject["name"] = "zaza";
jsObject["Id"] = 712;

// convert jsObject TO JSONObject
let JSObject = JSON.stringify(jsObject);
console.log(typeof JSObject)
console.log(JSObject)