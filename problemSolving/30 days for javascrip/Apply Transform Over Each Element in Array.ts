/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map:  (arr: number[], fn: Function) => number[] = function(arr: number[], fn) {
  const EmptyArray: number[] = [];
  for(let i = 0; i < arr.length; i++) {
      EmptyArray[i] = fn(arr[i], i);
  }
  return EmptyArray;
};