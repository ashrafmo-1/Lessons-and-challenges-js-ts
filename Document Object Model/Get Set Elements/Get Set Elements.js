/* edit in first div FOr innerHTML, textContent */

let myElement = document.querySelector(".js")

console.log(myElement.innerHTML)
console.log(myElement.textContent)

myElement.innerHTML = "We Love JavaScript <span> For Free </span> "
myElement.textContent = "We Love JavaScript <span> For Free </span> "


/* 
edit in secound image
Add indormation in image 
Edit attr
*/

document.images[0].src = ''
document.images[0].alt = 'image_Information'
document.images[0].title = 'pictures'
document.images[0].id = 'imageeee'
document.images[0].className = 'imagehehe'

// get.attr && set.attr

let LinkHref = document.querySelector(".link");

console.log(LinkHref.getAttribute("class"));
console.log(LinkHref.getAttribute("href"));


LinkHref.setAttribute("href", "https://Google.com");
LinkHref.setAttribute("class", "d3ba");