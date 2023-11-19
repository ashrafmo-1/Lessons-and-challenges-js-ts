let nums = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 1001]

let min = Math.min(...nums); // minimum number
console.log(min);

let max = Math.max(...nums); // minimum number
console.log(max);

// built in funtion =====>> reduce
let readuceMax = nums.reduce((max, min) => Math.max(max, min), 0)
let readuceMin = nums.reduce((max, min) => Math.min(max, min))
console.log(`readuce Max ${readuceMax}`);
console.log(`readuce Min ${readuceMin}`);