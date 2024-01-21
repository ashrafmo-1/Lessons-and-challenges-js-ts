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
//     let person = []
//     if (person.length > 0) {
//         return Promise.resolve("person Avaled");
//     } else {
//         return Promise.reject(Error("person Not Avaled"));
//     };
// };
// getdata().then(
//     (resloveValu) => console.log(resloveValu),
//     (rejectValu) => console.Error(rejectValu)
// );
// ==================================================================================================

/* (async) => convert Function to Promise */
async function getdata() {
    let person = []
    if (person.length > 0) {
        return ("person Avaled");
    } else {
        throw new Error("person NotAvaled");
    };
};
console.log(getdata())


getdata().then(
    (resloveValu) => console.log(resloveValu),
    (rejectValu) => console.log(rejectValu)
);

getdata().catch((rej) => console.log(rej))