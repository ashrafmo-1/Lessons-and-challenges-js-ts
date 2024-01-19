// // Write Your Code Here
// class myStr {
//     constructor(user) {
//         this.u = user
//     }
//     addLove() {
//         return `I Love ${myStr} Web School`
//     }
// }

String.prototype.addLove = function() {
    return `I Love ${myStr} Web School`
}

// Do Not Edit Below
let myStr = "Elzero";
// I Love Elzero Web School
console.log(myStr.addLove());