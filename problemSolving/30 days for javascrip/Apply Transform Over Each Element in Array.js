/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
  const EmptyArray = [];
  for(let i = 0; i < arr.length; i++) {
      EmptyArray[i] = fn(arr[i], i);
  }
  return EmptyArray;
};

console.log(map([1,3,5], function(n) {
  return n + 1
}));