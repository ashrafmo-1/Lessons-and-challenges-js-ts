function Products(id, name, mony, count) {
    this.id = id;
    this.name = name;
    this.mony = mony;
    this.count = count;
}

const productOne = new Products(0, 'asus', 11400, 1)
const productTwo = new Products(1, 'dell', 1550, 1)
console.log(typeof productOne);
console.log(`===========product One===========`);
console.log(productOne.id);
console.log(productOne.name);
console.log(productOne.mony);
console.log(productOne.count);
console.log(`===========product Two===========`);
console.log(productTwo.id);
console.log(productTwo.name);
console.log(productTwo.mony);
console.log(productTwo.count);