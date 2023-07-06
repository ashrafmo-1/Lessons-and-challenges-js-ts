// Regular Expressions [Quntifiers] => help for Quantification
/*

n+ => One Or More [ واحد او كتير ]

n* => Zero Or More 

n? => Zero Or One

*/

let emails = "a@nn.sa ashrafmohamed1176@gmail.com ash@gmail.com aashraf9919@gmail.site";
let emailsRe = /\w+@\w+.\w+/g;
console.log(emails.match(emailsRe));

let nums = "0110 10 150 05120 0560 350 00"
let numsRe = /0\d*0/ig
console.log(nums.match(numsRe))

let urls = "https://google.com http://www.website.net web.com";
let urlsRe = /(https?:\/\/)?(www.)?\w+(.net|.com)/ig

console.log(urls.match(urlsRe))