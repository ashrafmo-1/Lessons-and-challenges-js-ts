"use strict";
// data types <===============
let name2 = 'ali';
let salta = '10';
salta = 10;
salta = 'ali';
function btnsGet(btns) {
    console.log(`action fot btn un ${btns.top}`);
    console.log(`action fot btn right ${btns.right}`);
    console.log(`action fot btn bottom ${btns.bottom}`);
    console.log(`action fot btn left ${btns.left}`);
}
btnsGet({ top: 'not lfok', right: 'done', bottom: 't7t', left: 'yaSHmal', x: true });
