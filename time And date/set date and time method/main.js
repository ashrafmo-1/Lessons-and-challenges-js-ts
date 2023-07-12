/* set date and time */
/* {1} setTime method */
/* {2} setDate method */
/* {3} setFullYear method */
/* {4} setMonth method */
/* {5} set full method */
/* {6} set full method */
/* {7} set full method */

let dateNow = new Date();
console.log(dateNow);
console.log("#".repeat(20));

// dateNow.setTime(0);
// console.log(dateNow);
// dateNow.setTime(20000);
// console.log(dateNow);

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setFullYear(2002, 7); // the month starting From index
// console.log(dateNow);

// dateNow.setMonth(0) // sterting from index
// console.log(dateNow)

dateNow.setHours(1, 30, 59) // sterting from One
console.log(dateNow)

// dateNow.setMinutes(1, 59) // setMinutes and seconds sterting from One
// console.log(dateNow)

// dateNow.setSeconds(1, 1000) // Second ANd millsecond sterting from One 
// console.log(dateNow);