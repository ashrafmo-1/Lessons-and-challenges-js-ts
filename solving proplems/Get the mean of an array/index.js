// function getAverage(marks){
//     let total = 0;
//     let average
//     for(i = 0; i < marks.length; i++){
//         total += marks[i]
//     }
//     average = total / marks.length
//     Math.floor(average)
//     return average
// }


// function getAverage(marks){
//     let total = 0;
//     let average
//     for(i = 0; i < marks.length; i++){
//         total += marks[i]
//     }
//     average = total / marks.length
//     average = Math.floor(average)
//     return average
// }


// function getAverage(marks){
//     let total = 0
//     for(i = 0; i < marks.length; i++){
//         total += marks[i]
//     }
//     return Math.floor(total /marks.length)
// }


function getAverage(marks){
    return Math.floor(marks.reduce(((acc, num) => acc + num), 0) / marks.length)
}

console.log(`end examble ${getAverage([2,4,43,6,3,21,4])}`)