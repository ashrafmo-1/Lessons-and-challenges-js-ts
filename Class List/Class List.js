let ele = document.querySelector("#myDIv")
console.log(ele.classList)
console.log(typeof ele.classList) // object
console.log(ele.classList.contains("ash")) // to search if name is valed or no
console.log(ele.classList.contains("one")) // to search if name is valed or no

console.log(ele.classList.item("0")) // to search by index (0) => one

document.onclick = function () {
    ele.classList.add("ten", "asg") // to add class
    ele.classList.remove("one") // to remove class
    ele.classList.toggle("tow") // to remove && add class
}