// Await (Work in Async function only)
// Await Make jsvascript Wait fot Promise result

let promise = new Promise((resolve, reject) => {
    setTimeout((s) => {
        // resolve("midle Promise")
        reject(Error("midle Promise"))
    }, 2000);
});

async function readData() {
    console.log(`stert Promise`);
    // console.log(await promise);
    console.log(await promise.catch((Err) => Err));
    console.log(`end Promise`);
}
readData()