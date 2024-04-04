// tuple 
/*
  data type
  tuple
  is another sort of array type
*/

let article: [number, string, boolean] = [11, 'text', true];
// let article: readonly [number, string, boolean] = [11, 'text', true]; // ===> to close any edit from this array

// let e = article[1].replace('text', 'textEdit');
// console.log(e);

article = [12, 'textUpdateValue', false];
// push to array
article.push('ashraf engineering'); // and new value in array from end
article.unshift('add new value');

console.log(article);
