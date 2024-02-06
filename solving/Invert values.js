function invert(arr) {
    return arr.map(num => -num);
}
console.log(invert([1,2,3,4,5]));
console.log(invert([1,-2,3,-4,5]));
console.log(invert([]));
console.log(invert([0]));