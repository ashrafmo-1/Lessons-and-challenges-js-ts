let arr = [1,2,3,4,5,6,7,8,9,10]
let arr2 = ['ash', 'raf', 'ram', 'i']
console.log(arr.indexOf(10));
console.log(arr2.indexOf('ash'));


// splice built-in function
let fruits = ['apple', 'banana', 'orange'];
console.log(fruits);
fruits.splice(0, 1, 'apple', 'k', 'g');
// fruits is now ['apple', 'kiwi', 'grape', 'orange']
console.log(fruits);

let api = ['shirt', 'tShirt', 'Short', 'boxer'];
let subset = api.slice(0, 3);// subset is ['kiwi', 'grape'], fruits is unchanged
console.log(subset);

let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.slice(0, 3));


let fruits1 = ['apple', 'kiwi'];
let fruits2 = ['grape', 'orange'];
let fruits3 = ['banana'];
let combinedFruits = fruits1.concat(fruits2); // combinedFruits is ['apple', 'kiwi', 'grape', 'orange']
console.log(combinedFruits.concat(fruits3));


let apis = ['products', 'closes', 'images', 'salary'];
apis.forEach((fruit) => {
    console.log(fruit);
});
// Outputs: apple, kiwi, grape, orange
