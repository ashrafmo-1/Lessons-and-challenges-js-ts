/* Async
- Async Before Function Mean This Function Return A Promise
- Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getdata() {
//     return new Promise((resolve, reject) => {
//         let person = ["Ashraf"]
//         if (person.length > 0) {
//             resolve("person Avaled")
//         } else {
//             reject(Error("person NotAvaled"))
//         };
//     });
// };

// getdata().then(
//     (resloveValu) => console.log(resloveValu),
//     (rejectValu) => console.log(rejectValu)
// );

// ===================================================================================================
// function getdata() {
//     let person = ["Ashraf"]
//     if (person.length > 0) {
//         return Promise.resolve("person Avaled");
//     } else {
//         return Promise.reject(Error("person NotAvaled"));
//     };
// };
// getdata().then(
//     (resloveValu) => console.log(resloveValu),
//     (rejectValu) => console.log(rejectValu)
// );
// ==================================================================================================

/* (async) => convert Function to Promise */
async function getdata() {
    let person = ["Ashraf"]
    if (person.length > 5) {
        return ("person Avaled");
    } else {
        throw new Error("person NotAvaled");
    };
};
console.log(getdata())
getdata().catch((rej) => console.log(rej))
    // getdata().then(
    //     (resloveValu) => console.log(resloveValu),
    //     (rejectValu) => console.log(rejectValu)
    // );