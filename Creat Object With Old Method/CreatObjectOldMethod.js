// creat Object WEith Old Method

'use strict'
let user = {
    age: 20,
    doubleAge: function () {
        return this.age * 2;
    },
};
//====================================================//

console.log(user);
console.log(user.age);
console.log(user.doubleAge());
//====================================================//

let obj = Object.create({})
obj.a = 100
console.log(obj);
//====================================================//

let cobyObj = Object.create(user)
cobyObj.age = 50;

console.log(cobyObj);
console.log(cobyObj.age);
console.log(cobyObj.doubleAge());