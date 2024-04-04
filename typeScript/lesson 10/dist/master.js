"use strict";
function addUsers(...nums) {
    let result = 0;
    // for(let i = 0; i < nums.length; i++){
    //     result += nums[i]
    // }
    nums.forEach((num) => result += num);
    return result;
}
console.log(addUsers(1, 2, 3, 4));
