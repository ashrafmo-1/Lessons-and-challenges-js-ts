function lovefunc(flower1, flower2){
    if(flower1 % 2 === 0 && flower2 % 2 === 1){
        return true + '!done'
    } else {
        return false + '!done'
    }

    return flower1 % 2 !== flower2 % 2
}