let element = document.querySelector("#body");
let headerName = document.querySelector("#head");
const removeDesc = document.querySelector("#desc")

// type style in sheet javascript
element.style.margin = "0px"
element.style.padding = "0px"
headerName.style.color = "red"

element.style.cssText = "background-color: yellow; color: red; font-weight: bold"

// set and remove any style by sheet javascript  
headerName.style.setProperty("font-size", "100px", "important");
headerName.style.removeProperty("font-size");

// set & remove style
document.styleSheets[0].rules[0].style.setProperty("font-size", "50px");
document.styleSheets[0].rules[0].style.removeProperty("text-decoration");

removeDesc.remove()

// Document Object Model
// محتوي الدرس
/* 
Before => Element || String
After => Element || String
append => Element || String
prepend => Element || String
remove
*/

let createEl = document.createElement("p")

element.before("hi clint"); // قبل العنصر
element.after(createEl); // بعد العنصر
document.append(createEl)
document.prepend(createEl)