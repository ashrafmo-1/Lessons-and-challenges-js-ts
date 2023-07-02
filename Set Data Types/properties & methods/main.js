/* Properties: size */
/* methods: {
    - add
    - delete
    - clear
    - has
} */

let myData = [1, 1, 1, 2, 3, "A"]

// let myUnequeData = new Set(myData);
// let myUnequeData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUnequeData = new Set();
myUnequeData.add(1).add(1).add(1).add(2).add(3).add("A")

console.log(myUnequeData.has("A"))
console.log(myData);
console.log(myUnequeData);

console.log(myUnequeData.delete("A"))
myUnequeData.delete(3)
myUnequeData.delete("A")

// myUnequeData.clear()
console.log(myUnequeData);
console.log(myUnequeData.size);