// enum === Enumerations
/*
===>   Allow Us To Declare A Set Of Named Constants   <===
===>   Used For Logical Grouping Collection Of Constants "Collection Of Related Values"   <===
===>   It Organize Your Code   <===
===>   By Default Enums Are Number-Based, First Element Is 0   <===
===>   Theres A Numeric Enums   <===
===>   Theres A String-Based Enums   <===
===>   Theres Heterogeneous Enums [String + Number]   <===
*/

// Part One

const levelOne = 1000;
const levelTwo = 2000;
const levelThree = 3000;
const levelFOur = 4000;

enum lvl {
    levelOne = 1000,
    levelTwo = 2000,
    levelThree = 3000,
    levelFOre = 4000,
}

type str = string
let level: str = 'levelFOre';

if (level === 'levelOne') {
    console.log(`your level is ${level} because you have a ${lvl.levelOne}`);
} else if (level === 'levelTwo') {
    console.log(`your level is ${level} because you have a ${lvl.levelTwo}`);
} else if (level === 'levelThree') {
    console.log(`your level is ${level} because you have a ${lvl.levelThree}`);
}else {
    console.log(`your level is ${level} because you have a ${lvl.levelFOre}`);
}

function returnAge() : number {
    return 20;
}

// Part Two
const enum frindsAge {
    elkwawy = 20,
    ashraf = 21.5,
    shino = 22,
    ahmed = 10 + 9, // can you use operators
    mahmoud = elkwawy + 2, // import from current enum
    ali = lvl.levelOne - 998, // import from another enum
    // sayid = returnAge(),
}

console.log(frindsAge.ali);