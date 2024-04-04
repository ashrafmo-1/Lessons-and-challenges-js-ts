// Write Function Code Here

type Optional<T> = T | "Nothing";
function showTypes<T1 = "Nothing", T2 = "Nothing", T3 = "Nothing">(val?: T1, val2?: T2, val3?: T3): string {
    return [val, val2, val3].map(arg => arg ?? "Nothing").join(' - ')
}



// Do Not Edit Here
console.log(showTypes()); // Nothing - Nothing - Nothing
console.log(showTypes<string>("String")); // String - Nothing - Nothing
console.log(showTypes<string, number>("String", 100)); // String - 100 - Nothing
console.log(showTypes<string, number, boolean>("String", 100, true)); // String - 100 - true