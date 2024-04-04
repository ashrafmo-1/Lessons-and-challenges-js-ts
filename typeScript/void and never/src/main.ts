/*
void
    - Function That Will Return Nothing
    - Function In JavaScript That Not Return A Value Will Show undefined
    - ndefined is not void

never


*/

type str = string;

// function form(user: string) {
//     console.log(`welcome: ${user}`);
//     return 'welcome:' + user;
// };

// form('loda')


function form(user: string): void {
    console.log(`welcome: ${user}`);
    return;
};

form('loda')

console.log('test end');


const fail = (msg: string) => {
    throw new Error(msg);
}

// console.log(`error: ${fail}`);


function alwaysLog(name: string) : never {
    while(true) {
        console.log(name);
    }
}

alwaysLog('ashraf')

console.log('s');
