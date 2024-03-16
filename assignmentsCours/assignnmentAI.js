// 2* Write a function that takes two numbers as arguments and returns their sum.
const sum = (n1, n2) => {
  return n1 + n2;
}
console.log(sum(19, 1));

// 1* Create a function that takes a string and returns its length.
const len_str = (str) => {
  return str.length
}
console.log(len_str('ashraf'));

// 3* Write a function that takes an array of numbers and returns the sum of all the numbers in the array.
const sumNumbersArr = (arr) => {
  let total = 0;
  for(i = 0; i < arr.length;i++){
    total += arr[i];
  }
  return total;
}
console.log(sumNumbersArr([1,2,3,4,5]));

// 4* Create a function that takes a string and returns the reverse of the string.
const reversString = (str) => {
  return str.split("").reverse().join("");
}
console.log(reversString('hello'));

// 5* Write a function that checks if a number is even or odd.
const OddOrEven = (n) => {
  if (n % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(OddOrEven(9));

// 6* Create a function that takes an array of numbers and returns the maximum number in the array.
const find_max = (arr) => {
  return Math.max(...arr);
}
console.log(find_max([1,2,4]));

// 7* Write a function that takes two numbers and returns the larger one.
const larger = (nOne, nTwo) => {
  if (nOne > nTwo) {
    return nOne
  } else {
    return nTwo
  }
}
console.log(larger(5,4));

// 8* Create a function that takes an array of strings and returns the longest string in the array.
/// example one
let arr = ["ali", "nadaaaa", "rania", 'ashrafMoha'];
const  longestString_exampleOne = (arr) => {
  let longest = arr[0];
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }
  }
  return longest;
}
// console.log(longestString_exampleOne(arr));

const longestString_exampleTwo = (arr) => {
  let longest = "";
  for(let i = 0; i < arr.length; i++){
    if(arr[i].length > longest.length){
      longest = arr[i];
    }
  }
}

// 9* Write a function that takes a number and returns true if it's prime, false otherwise.

function InitialPreparations(num) {
  if (num <= 1) {
    return false
  } else {
    for(i = 2; i <= Math.sqrt(num); i++) {
      if(num % i === 0){
        return false
      }
    }
  }
  return true
}
console.log(InitialPreparations(2));
console.log(InitialPreparations(3));
console.log(InitialPreparations(5));
console.log(InitialPreparations(7));
console.log(InitialPreparations(11));
console.log(InitialPreparations(13));

// 10* Create a function that takes an array of numbers and returns a new array with only the unique numbers.
const unique = (arr) => {
  return [...new Set(arr)];
}
console.log(unique([1,32,4,4,54,55,1,55]));
console.log(typeof unique([1,32,4,4,54,55,1,55]));

// 11* Writstateunction that takes a string and returns the number of vowels in it.
const vowels = 'aeiouAEIOU';
const count_vowels = (string) => {
  let count = 0;
  // for(i = 0; i < string.length; i++) {
  for(let char of string) {
    if(vowels.includes(char)) {
      count++
    }
  }
  return count;
}
console.log(count_vowels("hello world"));

// 12* Create a function that takes an array of numbers and returns the average of all the numbers.
const average = (array) => {
  let sum = array.reduce((acc, current) => acc + current ,0);
  return sum / array.length;
}
console.log(average([1,2,2,2,3,5,6,7,7,7,7,7]));

// 13* Write a function that takes a number and returns its factorial.



// 14* Create a function that takes an array of strings and returns a new array with the strings capitalized.
// 15* Write a function that takes a string and checks if it's a palindrome.
// 16* Create a function that takes an array of numbers and returns a new array with the numbers sorted in ascending order.
// 17* Write a function that takes a number and returns an array of its digits.
// 18* Create a function that takes an array of strings and returns a new array with only the strings that have more than 5 characters.
// 19* Write a function that takes a string and returns the number of words in it.
// 20* Create a function that takes an array of numbers and returns the median value.