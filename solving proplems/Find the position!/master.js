function position(letter) {
    let word = 'abcdefghijklmnopqrstuvwxyz'

    for(i = 0; i < word.length; i++) {
        if(word[i] === letter){
            return `Position of alphabet: ${i + 1}`
        }
    }
}

console.log(position('z'));