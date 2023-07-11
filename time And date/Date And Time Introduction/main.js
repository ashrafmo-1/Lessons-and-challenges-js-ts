let dataAndTIme = new Date();
console.log(dataAndTIme);
console.log(Date.now())

/* get second from 1/1/1970 TO Now */
let seconds = Date.now() / 1000;
console.log(`seconds ${seconds.toFixed( )}`)

/* get ments from 1/1/1970 TO Now */
let ments = seconds / 60;
console.log(`mints ${ments.toFixed( )}`)

/* get hours from 1/1/1970 TO Now */
let hours = ments / 60;
console.log(`hours ${hours.toFixed( )}`)

/* get days from 1/1/1970 TO Now */
let days = hours / 24;
console.log(`days ${days.toFixed( )}`)

/* get years from 1/1/1970 TO Now */
let years = days / 365;
console.log(`years ${years.toFixed( )}`)