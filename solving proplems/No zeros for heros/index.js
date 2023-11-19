// function noBoringZeros(number) {
//     // convert number to string
//     return Number(number.toString().replace(/0+$/, ''));
// }

// console.log(`examble Number one ${noBoringZeros(2437300000)}`)

function noBoringZeros(number) {
    let nbumString = String(number)
    while(nbumString.endsWith(0)) {
        nbumString = nbumString.slice(0, nbumString.length -1)
    }
    return Number(nbumString)
}

console.log(`examble Number two ${noBoringZeros(2437300000)}`)