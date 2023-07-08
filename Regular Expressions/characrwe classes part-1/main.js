// Character Classes
/* Dot [.] matches Any Characters Expet new Line Other line terminator */
/* \w matches word Characters (a-z, A-Z 0-9 And underScore) */
/* \W matches non Word charecters (/n, //) */


let emailTest = "A@@@g...com A@g.fun A@Y.com O@s.org 1@1.com"
let dot = /./g; // for All
let word = /\w/g; // small And capetal words
let notWord = /\W/g; // small And capetal words
let valEm = /\w@\w.(com|fun)/g;


console.log(emailTest.match(dot));
console.log(emailTest.match(word));
console.log(emailTest.match(notWord));
console.log(emailTest.match(valEm));