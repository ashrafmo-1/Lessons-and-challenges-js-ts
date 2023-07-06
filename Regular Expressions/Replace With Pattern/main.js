/*Regular Expressions */

let text = "We love JvaScrt languge @ Programming @"

console.log(text.replace("JvaScrt", "JavaScript"))
console.log(text.replaceAll("@", "Ashraf"))
let textRe = /@/ig
let test = "Nano" // for Chick Only
console.log(text.match(textRe)); // for Chick Only
console.log(text.replace(textRe, test));