/*
لديك داله مليئه بالاغطاء
المطلوب اصلاحها باي طريقه اتظهر الناتج كما هو موجود في التعليقات

*/

type custom = string | number | boolean

function isHeOld(age: number | string[]) : custom | number  {
    if (age === undefined) {

    }
}

// Do Not Edit Here
console.log(isHeOld("100")); // Error
console.log(isHeOld(45)); // "Yes"
console.log(isHeOld(30)); // "No"