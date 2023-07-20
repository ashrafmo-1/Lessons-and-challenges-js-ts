// let myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // resolve("nice Promise");
//         reject("Bad Promise");
//     }, 2000);
// })

// (`=============== modern Promise Data ===============`)

// async function readData() {
//     console.log(`ferst Promise`)
//     try {
//         console.log(await myPromise)
//     } catch (reject) {
//         console.log(`error ${reject}`)
//     } finally {
//         console.log(`end Promise`)
//     }
// }
// readData()

// (`=============== fetch Data ===============`)

async function fetchData() {
    console.log(`ferst fetchData`)
    try {
        let mydata = await fetch("https://api.github.com/users/ashrafmo-1/repos")
        let jsObject = await mydata.json();
        console.log(jsObject[10].name)
    } catch (reject) {
        console.log(`error ${reject}`)
    } finally {
        console.log(`end fetchData`)
    }
}
fetchData()