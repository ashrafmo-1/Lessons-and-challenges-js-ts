/*
    =========================================
    ========= Function - Challlenge =========
    =========================================
create Function shoeDetails
Function Accept 3 Parameters [A, B, C]
Data Type Info Is
- String => name
- Number => Age
- Boolean => Status
Argument Is Random
Data Is no Sorted Output Depent On Data Types
- Use Ternary Conditional Operator
*/

function showDetails(A, B, C) {
    let name;
    let Age;
    let Status;

    // if(typeof A === "string") {
    //     name = A;
    // } else if(typeof A === "number") {
    //     Age = A;
    // } else{
    //     Status = A;
    // }
    // if (typeof B === "string") {
    //     name = B;
    // } else if(typeof B === "number") {
    //     Age = B;
    // } else{
    //     Status = B;
    // } if(typeof C === "string") {
    //     name = C;
    // } else if(typeof C === "number") {
    //     Age = C;
    // } else{
    //     Status = C;
    // }
    // if (Status === true) {
    //     Status = "You Are Available For Hire"
    // } else {
    //     Status = "You Are Not Available For Hire"
    // }

    /*============================================*/
    /* ==== Use Ternary Conditional Operator ==== */
    /*============================================*/
    typeof A === "string" ? name = A : typeof A === "number" ? Age = A : Status = A;
    typeof B === "string" ? name = B : typeof B === "number" ? Age = B : Status = B;
    typeof C === "string" ? name = C : typeof C === "number" ? Age = C : Status = C;
    Status === true ? Status = "You Are Available For Hire" : Status = "You Are Not Available For Hire";
    document.write(`<h1 style="color: red; background-color: black; padding: 10px 0";>"Hello ${name}, Your Age Is ${Age}, ${Status}"</h1>`);
}

showDetails("Ashraf", 21, true) // "Hello Ashraf, Your Age Is 21, You Are Available For Hire"
showDetails(21,"Ashraf",  true) // "Hello Ashraf, Your Age Is 21, You Are Available For Hire"
showDetails(true, "Ashraf", 21) // "Hello Ashraf, Your Age Is 21, You Are Available For Hire"
showDetails(false, 21, "Ashraf") // "Hello Ashraf, Your Age Is 21, You Are Not Available For Hire"