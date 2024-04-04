let nothing;
let theName: string = "Elzero";
function showMyDetails(a = "", b = "", c: string) {
    return `${a}${b}${c}`;
}

// Replace ???? With The Available Variables As Argument To Get The Result
console.log(showMyDetails(undefined, undefined, theName)); // Elzero