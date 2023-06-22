// querySelector Four times only
const querySelectorOne = document.querySelector("div");
const querySelectorTOw = document.querySelector("#elzero");
const querySelectorThree = document.querySelector(".element");
const querySelectorFour = document.querySelector("[name='js']");

// querySelectorAll Four times only
const querySelectorAllOne = document.querySelectorAll("div")[0];
const querySelectorAllTow = document.querySelectorAll("#elzero")[0];
const querySelectorAllThree = document.querySelectorAll(".element")[0];
const querySelectorAllfour = document.querySelectorAll("[name='js']")[0];

// Other times
const getElementById = document.getElementById("elzero")
const getElementsByClassName = document.getElementsByClassName("element")[0];
const getElementsByName = document.getElementsByName("js")[0]
const getElementsByTagName = document.getElementsByTagName("div")[0];
const firstChild = document.body.firstElementChild;
const children = document.body.children[0];
const childNodes = document.body.childNodes[1];


// querySelector Four times only
console.log(querySelectorOne);
console.log(querySelectorTOw);
console.log(querySelectorThree);
console.log(querySelectorFour);
console.log(`########### Other times ###########`);
// querySelectorAll Four times only
console.log(querySelectorAllOne);
console.log(querySelectorAllTow);
console.log(querySelectorAllThree);
console.log(querySelectorAllfour);
console.log(`########### Other times ###########`);
// Other times
console.log(getElementById);
console.log(getElementsByClassName);
console.log(getElementsByName);
console.log(getElementsByTagName);
console.log(`########### Other times ###########`);
console.log(firstChild);
console.log(children);
console.log(childNodes);
