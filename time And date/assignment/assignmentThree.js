let monthes = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dataAndTIme = new Date()
dataAndTIme.setDate(0)

console.log(dataAndTIme)
console.log(`Previous Month Is ${monthes[dataAndTIme.getMonth()]} And Last Day Is ${dataAndTIme.getDate()}`)

// Needed Output
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"