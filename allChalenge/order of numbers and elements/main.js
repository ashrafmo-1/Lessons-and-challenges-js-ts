const elementOne = document.querySelector(".one")
const elementTow = document.querySelector(".two")


elementOne.title = elementOne.className;
elementTow.title = elementTow.className;

elementOne.textContent = elementOne.className
elementTow.textContent = `${elementTow.className} ${elementTow.attributes.length}`