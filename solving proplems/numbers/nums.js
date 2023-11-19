function twoDecimalPlaces(n) {
    return +n.toFixed(2)
}

console.log(twoDecimalPlaces(5.5589));
console.log(twoDecimalPlaces(3.3424));

console.log(parseInt('3.3424 lala'));
console.log(parseFloat('3.3424 lala'));

console.log(Number.isInteger(3.3424)); // return false
console.log(Number.isInteger('3.3424')); // return false

console.log(Number.isInteger(3)); // return true
console.log(Number.isInteger('3')); // return fale because this is string

console.log(Number.isNaN('ss' / 20)); // return true
console.log(Number.isNaN(3)); // return fale because this is string