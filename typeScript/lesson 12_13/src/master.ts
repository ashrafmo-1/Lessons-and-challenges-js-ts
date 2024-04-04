// data types <===============

/*
type Alias
can programmer rename default data types
*/

type str = string;
let name2: str = 'ali'

type strAndNum = string | number
let salta: strAndNum = '10'
salta = 10
salta = 'ali'
// salta = true

/* data types */
/* advanced type Alias */
type btns = {
    top: string,
    right: string,
    bottom: string,
    left: string,
}

type masterTypes = btns & {
    x: boolean
}

function btnsGet(btns: masterTypes) {
    console.log(`action fot btn un ${btns.top}`);
    console.log(`action fot btn right ${btns.right}`);
    console.log(`action fot btn bottom ${btns.bottom}`);
    console.log(`action fot btn left ${btns.left}`);
}

btnsGet({top: 'not lfok', right: 'done', bottom: 't7t', left: 'yaSHmal', x: true})