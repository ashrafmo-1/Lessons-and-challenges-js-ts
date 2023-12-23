let n1 = 10;
let n2 = 20;

// or || => يلزم تحقيق شرط واحد علي الاقل
// and && => يلزم تحقيق كل الشروط

if (n2 > n1 && n2 === n1 && n2 != n1) {
    console.log(true);
} else if (n2 > n1 && n2 === n1) {
    console.log('hello n1');
} else {
    console.log('dont have any operator');
}