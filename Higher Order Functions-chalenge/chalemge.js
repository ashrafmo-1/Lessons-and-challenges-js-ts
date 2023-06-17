/*

Higher Order Functions - Challenge

// You Can Use [ [ , ] [ space ] [True => => One TIme Only In The Code ] ]

// YOu cannot Used [ [ numbers ] [ letters ] ]


// You Mast Use [ filter + map + reduce + You KNowledge ]

ordar is not important

All in One Chain

*/
let MyString = "1,2,3,EE,l,z,e,r,o,_W,e,b,_,S,c,h,o,o,l,2,0,Z"

let mySolution = MyString.split("").map(function (element) {
    return element !== "," ? element : "";
}).filter(function (element) {
    return isNaN(parseInt(element));
}).reduce(function (acc, current) {
    return `${acc}${current}`;
}).slice(true, -isNaN(MyString));

console.log(mySolution);