/*
Regular Expressions {Quantifiers}
n{x}
n{x,y}
n{x,}
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/ig)) /* S[three numbers]S */
console.log(serials.match(/s\d{4,5}s/ig)) /* S[For Four To Five numbers]S */
console.log(serials.match(/s\d{4,}s/ig)) /* S[For Five To AnyThing numbers]S */
console.log(serials.match(/s\d{3,}s/ig)) /* S[For Three To AnyThing numbers]S */