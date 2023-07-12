/* data And time
- getTime() => number of millsecond
- getData() => Day of the Month
- getFullYear() => Day of the FullYear
- getMonth()
- getDay() => day of the Weak
- getHours()
- getMinutes()
- getSecond()
*/
let dataNow = new Date();
let birthday = new Date("Aug 22 02");
let dataDiff = dataNow - birthday;


console.log(dataDiff) //out nill second
console.log(`${dataDiff / 1000 / 60 / 60 / 24 / 365}`)

console.log(dataNow.getTime())
console.log(dataNow.getDate()) // => Day of the Month
console.log(dataNow.getFullYear()) // recuntly year
console.log(dataNow.getMonth()) // starting from index
console.log(dataNow.getDay()) //recuntly day from weak
console.log(dataNow.getHours())
console.log(dataNow.getMinutes())
console.log(dataNow.getSeconds())