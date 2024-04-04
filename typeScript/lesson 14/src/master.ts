// literal type

type valuse = 1 | 2 | 3

function compare(nOne: number, nTwo: number): valuse{
    if(nOne === nTwo) {
        return 1;
    }
    else if(nOne > nTwo) {
        return 2;
    }
    else{
    return 3;
    }
    return 2;
}
console.log(compare(2, 2));
console.log(compare(4, 2));
console.log(compare(2, 3));

let val: valuse = 3
