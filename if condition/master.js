let n1 = 10;
let n2 = 20;

// or || => يلزم تحقيق شرط واحد علي الاقل
// and && => يلزم تحقيق كل الشروط

if (n2 > n1 && n2 === n1 && n2 != n1) {
    console.log(true);
} else if (n2 > n1 && n2 === n1) {
    console.log('hello n1');
} else {
    // console.log('dont have any operator');
}

// start operations
/*
+
-
/
*
** => اوس
% => باقي القسمه
*/

console.log(10 + 10);
console.log(100 - 10);
console.log(100 / 2);
console.log(19 % 2);
console.log(10 * 10);
console.log(10 ** 2);

let sum = 10 + 100 + 40
let minus = 1000 - 100 - 40
console.log('sum is', sum);
console.log(`sum is ${sum}`);
console.log(`minus is ${minus}`);

console.log(100 > 20);
console.log(100 < 20);
console.log(10 < 20);
console.log(20 <= 20);
console.log(1000 >= 100);
console.log(100 !== 100);
console.log(100 === 100);

let sum11 = 10 ** 2;
console.log(sum11);