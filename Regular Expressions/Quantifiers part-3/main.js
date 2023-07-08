/* Regular Expressions {Quantifiers} */

let String = "We Love JAvaScript";
let names = "1OsamaZ 2AhmedZ 3Mohammed 4Ashraf 5NaiiahSHZ";

// $ => End With Something
console.log(/ipt$/ig.test(String));
console.log(/z$/ig.test(names));
// ^ => Start With Something
console.log(/^we/ig.test(String));
console.log(/^\W/ig.test(names));


// ?= => Follwed By Something
console.log(names.match(/\d\w{5}(?=Z)/g));
// ?= => nOTFollwed By Something
console.log(names.match(/\d\w{8}(?!Z)/g));