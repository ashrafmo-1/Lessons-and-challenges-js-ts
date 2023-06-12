/* Loop - Challenge */

let myAdmin = ["Ahmed", "Osama", "Sayed", "Stop", "samire"];
let myEmployes = ["Amgad", "Sameh", "Ameer", "Omar", "Othman", "Amany", "Samiha"]
let count = 3;
let counterOne = 1;
let counterTow = 1;
let counterThree = 1;

document.write(`<h1> We hamve ${count} Admins</h1>`);

mainLoop: for (let index = 0; index < myAdmin.length; index++) {

    if (myAdmin[index] === "Stop") break;

    document.write(`<div> <hr> </div>`)
    document.write(`<div>`);
    document.write(`<h3>The Admin For Team ${index + 1} Is ${myAdmin[index]}</h3>`);
    document.write(`<h1>Team Members:- </h1>`);

    document.write(`</div>`);

    nestingLoop: for (let em = 0; em < myEmployes.length; em++) {
        if (myAdmin[index].startsWith("A") && myEmployes[em].startsWith("A")) {
            document.write(`<p>- ${counterOne++} ${myEmployes[em]} </p>`);
        } else if (myAdmin[index].startsWith("O") && myEmployes[em].startsWith("O")) {
            document.write(`<p>- ${counterTow++} ${myEmployes[em]} </p>`);
        } else if (myAdmin[index].startsWith("S") && myEmployes[em].startsWith("S")) {
            document.write(`<p>- ${counterThree++} ${myEmployes[em]} </p>`);
        };
    };
};