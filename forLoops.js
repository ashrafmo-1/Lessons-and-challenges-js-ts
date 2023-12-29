/*
Loop
- For
    for ([1] [2] [3]) {
        // Block Of Code
    }
*/

// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }

let myFriends = [1, 2, "AShraf", "Sheno", 3, 4, "Alaa", 6, "Ali"];

// console.log(myFriends[0]);
// console.log(myFriends[1]);
// console.log(myFriends[2]);
// console.log(myFriends[3]);
// console.log(myFriends[4]);

// for (let i = 0; i < myFriends.length; i++) {
//     console.log(myFriends[i]);
// }

let onlyNames = [];
for (let i = 0; i < myFriends.length; i++) {
    if (typeof myFriends[i] === "string") {
        onlyNames.push(myFriends[i]);
    }
}
console.log(onlyNames);