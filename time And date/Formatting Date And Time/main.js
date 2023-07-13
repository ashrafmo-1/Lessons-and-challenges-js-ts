/* data and time

new date {timestamp}
new date {dateString}
new date {numric value}

Format
*/

console.log(Date.parse("Aug 22 02"));

let date1 = new Date(0) // from starting Time And data
console.log(date1);

let date2 = new Date(1029963600000); // From millSeconds to my date
console.log(date2);

let date3 = new Date("8-22-2002");
console.log(date3)

let date4 = new Date("2002 8 22"); // international Standard
console.log(date4);

let date5 = new Date("2002 8"); // if You not type day is starting frome one
console.log(date5);

let date6 = new Date("2002");
console.log(date6);

let date7 = new Date(2002, 7, 22, 8, 30, 0);
console.log(date7)

let date8 = new Date(2002, 7, 22);
console.log(date8);

let date9 = new Date("2002-08-22T08:10:00");
console.log(date9);