// string
let stringValue = 'HELLO WORLED';
// let x = stringValue.charAt(1); // cut letter form the string and can you used in any any thing
// let x = stringValue.charAt(11);


let commaString = 'a,s,g,h,r,a,f';
let x = commaString.split(',').join('');
console.log(x);

let str = "Hello";
console.log(str.charCodeAt(1)); // Output: 101


// Merge two strings
let STRONE = 'HELLO';
let STRTWO = 'JS';
let marge = STRONE.concat(' ', STRTWO);
console.log(marge);


let STR = 'ASHRAF';
console.log(STR.indexOf('H'));

let subStr = 'javascript';
console.log(subStr.substring(0, 4));

let sliceStr = 'javascript';
console.log(sliceStr.slice(0, ));
console.log(sliceStr.slice(0, -1)); // not including end
console.log(sliceStr.slice( -6));

let upperStr = 'javascript';
console.log(upperStr.toLocaleUpperCase());

let lowerStr = 'JAVA';
console.log(lowerStr.toLocaleLowerCase());

let splitSTR = 'ashraf,mohamed,ali';
console.log(splitSTR.split(',').join(' ').toString().toLocaleUpperCase());

let js = 'javascript language';
// console.log(js.replace('language', 'programming language'));
console.log(js.replaceAll('javascript language', 'replace all string'));

// chick if text end with this
let STRING = 'programming'
console.log(STRING.endsWith('g')); // true
console.log(STRING.endsWith('x')); // false
// encluding
console.log(STRING.includes('p', 0));