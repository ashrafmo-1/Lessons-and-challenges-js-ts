/**
 * @param {Function} fn
 * @return {Function}
 */

function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn(...args));
    }
    return cache.get(key);
  }
}

function sum(a, b) {
  return a + b;
}

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}

function factorial(n) {
  if (n <= 1) return 1;
  return factorial(n - 1) * n;
}

const memoizedSum = memoize(sum);
const memoizedFib = memoize(fib);
const memoizedFactorial = memoize(factorial);

// Example usage
console.log(memoizedSum(3, 2));  // Output: 5
console.log(memoizedSum(2, 3));  // Output: 5 (from cache)
console.log(memoizedFib(5));      // Output: 8
console.log(memoizedFactorial(5));// Output: 120

/** 
* let callCount = 0;
* const memoizedFn = memoize(function (a, b) {
*	 callCount += 1;
*   return a + b;
* })
* memoizedFn(2, 3) // 5
* memoizedFn(2, 3) // 5
* console.log(callCount) // 1 
*/