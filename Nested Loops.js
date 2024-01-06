let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor"];
let colors = ["Red", "Green", "Black"];
let models = [2020, 2021];

for (let i = 0; i < products.length; i++) {
    console.log('===================');
    console.log(`product ==> ${products[i]}`);
    console.log('===================');
    for(let x = 0; x < colors.length; x++) {
        console.log(`  {colors[x]}`);
    }
    for(let j = 0; j < models.length; j++) {
        console.log(`    ->${models[j]}`);
    }
}



let productsTwo = []; // <== add 10 product
let model = []; // <== add 5 model
let companyMake = []; // <== add 4 company
let color = []; // <== add 6 colors