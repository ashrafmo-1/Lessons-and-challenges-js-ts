// FOr chick all attributes
console.log(document.getElementsByTagName("p")[0].attributes);

const myDesc = document.getElementsByTagName("p")[0];

// check & getAttr & SetAttr & RemoveAttr

if (myDesc.hasAttribute("data-src")) {
    if (myDesc.getAttribute("data-src") === "") {
        myDesc.removeAttribute("data-src");
    } else {
        myDesc.setAttribute("data-src", "new-attr");
    };
} else {
    console.log("moshMOgod");
};

// Chick if has Attr Or No
// Examble ["One"]
if (myDesc.hasAttributes()) {
    console.log(`avaled`);
} else {
    console.log("notvaled");
}

// Examble ["Tow"]
if (document.getElementsByTagName("div")[0].hasAttributes()) {
    console.log("avaledDiv");
} else {
    console.log("notAvaledDiv");
}