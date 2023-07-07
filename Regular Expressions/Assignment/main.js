console.log(`=`.repeat(30))
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\d|\D)+/g;
console.log(ip.match(ipRe));
console.log(`=`.repeat(30));

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /os(\d+)?o/ig;
console.log(specialNames.match(specialNamesRe));
// Output ['Os10O', 'OsO', 'Os100O']
console.log(`=`.repeat(30));

let phone = "+(995)-123 (4567)";
let phoneRe = /(\D|\d)+/g;
let phoneRe2 = /\+\(\d{3}\)-\d{3}\s\(\d{4}\)/g; // test two
console.log(phone.match(phoneRe));
console.log(phone.match(phoneRe2));
console.log(`=`.repeat(30));

// let link = "https://elzero.com"
// let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/ig;
// console.log(link.match(re));
// console.log(`=`.repeat(30));