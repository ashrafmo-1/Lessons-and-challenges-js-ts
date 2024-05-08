type Fn = (accum: number, curr: number) => number

function reduce_(nums: number[], fn: Fn, init: number): number {
  if (nums.length === 0) {
    return init
  }
  let result: number = init;
  for (let i = 0; i < nums.length; i++) {
    result = fn(result, nums[i]);
  }
  return result;
};