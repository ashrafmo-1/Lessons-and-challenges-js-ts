
let map = new Map()
for (let i = 0; i < nums.length; i++){
    
    let num1 = nums[i]
    let num2 = target - num1
    
    if(map.has(num2)){
        return [i,map.get(num2)]
        
    }
    map.set(num1, i)
}

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let obj = {};
    for(i = 0; i < nums.length; i++) {
        let value = nums[i];
        obj[value] = i
    }
    for(i = 0; i < nums.length; i++) {
        let unique = target - nums[i];
        if(obj[unique] && obj[unique] !== i) {
            return [i, obj[unique]]
        }
    }
};

console.log(twoSum(10, 10))



/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap = {};
 
     for (let i = 0; i < nums.length; i++) {
         const complement = target - nums[i];
         if (numMap[complement] !== undefined) {
             return [numMap[complement], i];
         }
         numMap[nums[i]] = i;
     }
 
     return [];
 };