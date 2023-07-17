/* Then => promise is Successfull Use The Resolved Data */
/* Catch => promise is Failed, Catch The Error */
/* Finally => promise Successfull or Failed Finally Do SomeThing */

// let promise = new Promise((resolvedFun, rejectFun) => {
//     let Employees = ["Ashraf", "Osama", "Ali", "Nada", "Alaa"];
//     if (Employees.length) {
//         resolvedFun(Employees)
//     } else {
//         rejectFun(Error(`number of employees is Not Five`))
//     }
// });
// promise.then(
//     (resolvedVal) => {
//         resolvedVal.length = 2
//         return resolvedVal
//         console.log(resolvedVal)
//     },
// );
// promise.then(
//     (resolvedVal) => {
//         resolvedVal.length = 1
//         return resolvedVal
//         console.log(resolvedVal) // not working
//     },
// );
// promise.then(
//     (resolvedVal) => {
//         console.log(`shoose Employee is ${resolvedVal}`)
//     },
// )

// used catch And Finally
let promise = new Promise((resolvedFun, rejectFun) => {
    let Employees = [];
    if (Employees.length) {
        resolvedFun(Employees)
    } else {
        rejectFun(Error(`number of employees is Not Five`))
    }
});
promise.then(
    (resolvedVal) => {
        resolvedVal.length = 2
        return resolvedVal
        console.log(resolvedVal)
    },
).then(
    (resolvedVal) => {
        resolvedVal.length = 1
        return resolvedVal
        console.log(resolvedVal) // not working
    },
).then(
    (resolvedVal) => {
        console.log(`shoose Employee is ${resolvedVal}`)
    },
).catch((regected) => console.log(regected)).finally(console.log(`the operating is print message any Way`));