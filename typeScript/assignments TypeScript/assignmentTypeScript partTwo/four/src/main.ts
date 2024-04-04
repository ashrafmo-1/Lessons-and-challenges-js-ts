type mix =  number | boolean

function yesOrNo(val: number): mix {
    return val > 10 
}

// Do Not Edit Here
// console.log(yesOrNo("100")); // Error
console.log(yesOrNo(30)); // True
console.log(yesOrNo(8)); // False