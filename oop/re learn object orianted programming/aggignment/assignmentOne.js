// لديك ال Constructor Function التالية والمطلوب تحويلها لل Class Syntax !!!! لا تعتمد على البرنامج وقم بعملها بنفسك لتتأكد أنك تعرف ال Syntax
// قم بإضافة إثنين Methods واحدة بإسم run وواحدة بإسم stop // كل واحدة فيهم تحتوي على رسالة


// function Car(name, model, price) {
//     this.n = name;
//     this.m = model;
//     this.p = price;
// }

class Car {
    constructor(name, model, price){
        // Propertyes
        this.n = name;
        this.m = model;
        this.p = price;
    }
    // methods
    run() {
        return 'Car Is Running Now';
    }
    stop() {
        return 'Car Is Stopped'
    }
}

const carOne = new Car('BMW', 2023, 1000000);
const carTwo = new Car('MG', 2024, 3000000);
const carThree = new Car('marsids', 2021, 2000000);

// "Car One Name Is MG And Model Is 2022 And Price Is 420000" // Needed Output
console.log(`Car One Name Is ${carOne.n} And Model Is ${carOne.m} And Price Is ${carOne.p}`);
// "Car Is Running Now" // Needed Output
console.log(carOne.run());

// console.log(`==== car one ====`);
// console.log(carOne.n);
// console.log(carOne.m);
// console.log(carOne.p);
// console.log(`==== car two ====`);
// console.log(carTwo.n);
// console.log(carTwo.m);
// console.log(carTwo.p);
// console.log(`==== car three ====`);
// console.log(carThree.n);
// console.log(carThree.m);
// console.log(carThree.p);