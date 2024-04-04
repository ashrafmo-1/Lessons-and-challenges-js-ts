"use strict";
/*
    - Polymorphism
    --- Classes Have The Same Methods But Different Implementations

    - Method Override
    --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
    --- A Method In Child Class Must Have Same Name As Parent Class

    --- noImplicitOverride
*/
class Player {
    constructor(name) {
        this.name = name;
    }
    attack() {
        console.log("Attacking Now");
    }
}
class Jinx extends Player {
    constructor(name, fireGun) {
        super(name);
        this.fireGun = fireGun;
    }
    attack() {
        super.attack();
        console.log('jinx is attacking right now');
        this.fireGun -= 1;
    }
}
let playerOne = new Jinx('ashraf', 21);
console.log(playerOne.name);
playerOne.attack();
console.log(playerOne.fireGun);
