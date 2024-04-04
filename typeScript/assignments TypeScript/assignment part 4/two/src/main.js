"use strict";
// Write Function Code Here
function showTypes(val, val2, val3) {
    return [val, val2, val3].map(arg => arg !== null && arg !== void 0 ? arg : "Nothing").join(' - ');
}
// Do Not Edit Here
console.log(showTypes());
console.log(showTypes("String"));
console.log(showTypes("String", 100));
console.log(showTypes("String", 100, true));
