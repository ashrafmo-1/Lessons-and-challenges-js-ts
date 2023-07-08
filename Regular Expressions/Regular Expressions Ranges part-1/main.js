// ranges
let linkInfo = "Com Org Net io info mode";
let linkInfoRe = /(org|net|mode)/ig;
console.log(linkInfo.match(linkInfoRe));

// numbers
let numbers = '12345678910';
let numbersRe = /[0-5]/ig;
let NotNumbersRe = /[^0-5]/ig;
console.log(numbers.match(numbersRe));
console.log(numbers.match(NotNumbersRe));

// SpecialNums icon
let SpecialNums = '!1@2#3$4%5%6%^7^8^9*1*0';
let SpecialNumsRe = /[0-9]/ig;
let notNumbersRe = /[^0-9]/ig;
console.log(SpecialNums.match(SpecialNumsRe));
console.log(SpecialNums.match(notNumbersRe));

// practice
let practice = 'Az1 Az1 Az3 az5 az8Az';
let practiceRe = /az[5-9]az/ig;
console.log(practice.match(practiceRe));