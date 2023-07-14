// let dateNow = new Date();
// let myBirthday = new Date("August 22 2")
// let dataDiff = dateNow - myBirthday
// dateNow.setFullYear(2002)
// dateNow.setMonth(7)
// dateNow.setDate(22)
// dateNow.setHours(0)
// dateNow.setMinutes(0)
// dateNow.setSeconds(0)
// console.log(dateNow)
// console.log(myBirthday)
/* All top Error */


let birthdayOne = new Date(2002, 7, 22)
console.log(birthdayOne)

let birthdayTwo = new Date("Aug 22 2002")
console.log(birthdayTwo)

let birthdayThree = new Date("8-22-2002")
console.log(birthdayThree)

// Needed Output
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"
// "Mon Oct 25 1982 00:00:00 GMT+0200 (Eastern European Standard Time)"