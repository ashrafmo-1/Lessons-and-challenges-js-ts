console.log(`=`.repeat(30))
let ip = "2001:db8:3333:4444:5555:6666:7777:8888";
let ipRe = /(\d|\D)+/g
console.log(ip.match(ipRe));
console.log(`=`.repeat(30))

let specialNames = "Os10O OsO Os100O Osa100O Os1000 Os100m";
let specialNamesRe = /os(\d+)?o/ig
console.log(specialNames.match(specialNamesRe));
// Output ['Os10O', 'OsO', 'Os100O']
console.log(`=`.repeat(30))

let phone = "+(995)-123 (4567)";
let phoneRe = /(\D|\d)+/g
console.log(phone.match(phoneRe))