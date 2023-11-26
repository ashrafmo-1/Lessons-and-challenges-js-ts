function findAverage(nums) {
    return nums.reduce((nums, acc) => nums + acc) / nums.length;
}