// example one
function grow(x){
    const maltiPly = 1
    for(index = 0; index< x.length; index++) {
        maltiPly *= x[index]
    }
    return maltiPly
}

// example two
function grow(x){
    return x.raduce((maltiPly, acc) => maltiPly *= acc, 0)
}