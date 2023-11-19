function shortcut(string) {


    // example one ====>
    // return string.replace(/[aeiou]/g,'');

    // example two ====>
    let arr = ['a', 'e', 'i', 'o', 'u'];
    let result = [];
    for(i = 0; i < string.length; i++) {
        !arr.includes(string[i])  ? result.push(string[i]) : null;
    }
    return result.join('');
}
console.log(shortcut('heelo'));


//  remove Exclamation Marks ==> first example
function removeExclamationMarks(s) {
    return s.replace(/[!]/g,'');
}

//  remove Exclamation Marks ==> second example
function removeExclamationMarks(s) {
    return s.split('').filter((ele) => ele !== '!').join('')
}