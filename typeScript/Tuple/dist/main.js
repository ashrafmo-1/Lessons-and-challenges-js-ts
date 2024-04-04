"use strict";
// tuple
/*
you cant add new values by yourself
can you and values by 'push' and 'unshift'
readOnly cand make any shanging in arrays
*/
let arr = [21, 'ts', true];
arr = [22, 'js', false];
console.log(arr);
// arr.push('test'); can not make any changeing if you used readonly
console.log(arr);
let [id, languageName, IFDONE] = arr;
console.log(id);
console.log(languageName);
console.log(IFDONE);
