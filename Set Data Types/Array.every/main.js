const s = {
    20: "place 1",
    30: "place 2",
    40: "place 3",
    50: "place 4",
};

let mainNumlocation = 19

let arrayn = Object.keys(s); // Reflect Object TO Array
console.log(arrayn);

let locationN = arrayn.map((n) => +n); // to Change Strimg to Number
console.log(locationN);

// to check number is Avaled or no
let check = locationN.every(function(Ele) {
    return Ele > this
}, mainNumlocation)

console.log(check)