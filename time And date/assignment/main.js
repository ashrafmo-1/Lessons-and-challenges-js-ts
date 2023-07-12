// Needed Output
let dateNow = new Date();
let myBirthday = new Date("Aug 22 2002");
let dateDiff = dateNow - myBirthday;

console.log(`${(dateDiff / 1000).toFixed(0)} Seconds`);
console.log(`${(dateDiff / 1000 / 60).toFixed(0)} Minutes`);
console.log(`${(dateDiff / 1000 / 60 / 60).toFixed(0)} Hours`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24).toFixed(0)} Days`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 7).toFixed(0)} weak`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 30).toFixed(0)} Months`);
console.log(`${(dateDiff / 1000 / 60 / 60 / 24 / 365).toFixed(0)} Years`);

// "1247939400 Seconds"
// "20798990 Minutes"
// "346650 Hours"
// "14444 Days"
// "481 Months"
// "40 Years"




// - getFullYear() => Day of the FullYear
// - getMonth()
// - getDay() => day of the Weak
// - getHours()
// - getMinutes()
// - getSecond()