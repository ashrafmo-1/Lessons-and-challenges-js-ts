let newArr = ["Ashraf", "negm", "nader"]
let newArr2 = ["mohamed", "d3fs", "nader"]

// concat Arrays
let allArr = [...newArr, ...newArr]
console.log(allArr)

// to copy Array in more Array
newArr.push(...newArr2)
console.log(newArr)

// with math object

let nums = [10, 60, 400, 900]

console.log(Math.max(...nums))

// use obj