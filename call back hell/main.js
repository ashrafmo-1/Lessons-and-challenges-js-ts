// call back function
function color(ele) {
    ele.target.style.color = "red";
    ele.target.style.fontSize = '50px';
    ele.target.style.fontWeight = 'bold';
}
let p = document.querySelector("p");
// p.addEventListener("click", color)


// call back hell
setTimeout(() => {
    console.log("welcom One")
    setTimeout(() => {
        console.log("welcom Two")
        setTimeout(() => {
            console.log("welcom Three")
            setTimeout(() => {
                console.log("welcom Four")
                setTimeout(() => {
                    console.log("welcom Five")
                    setTimeout(() => {
                        console.log("welcom Sex")
                        setTimeout(() => {
                            console.log("welcom")
                            p.addEventListener("click", color)
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
}, 1000);