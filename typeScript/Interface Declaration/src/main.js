"use strict";
let lanser = {
    name: 'shark',
    model: 2002,
    needFix: false
};
console.log(lanser.name);
console.log(lanser.model);
console.log(lanser.needFix);
function showInfo(info) {
    console.log(`car name is ${info.name}`);
    console.log(info.model);
    console.log(info.needFix);
}
showInfo({ name: 'bmw', model: 2022, needFix: true });
let info = {
    name: 'ashraf',
    id: 9919,
    age: 21.5,
    sayHello() {
        return `hello ${this.name}`;
    },
    showInformation: () => {
        return `hello ${info.name} your age id ${info.age}`;
    },
    sum: (n) => {
        return n + 10;
    }
};
console.log(info.name);
console.log(info.id);
console.log(info.age);
console.log(info.sayHello());
console.log(info.showInformation());
console.log(info.sum(2));
let page = {
    theme: 'dark',
    bgCanging: false,
    fontWight: 'bold',
};
let portfolio = {
    navHeight: 1800,
    landingInnerhtnl: 'hello world',
    boxesLeigth: 12,
    nameTitle: 'ash-education',
};
