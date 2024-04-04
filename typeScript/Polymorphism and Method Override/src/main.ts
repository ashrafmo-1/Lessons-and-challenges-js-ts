/*
    - Polymorphism
    --- Classes Have The Same Methods But Different Implementations

    - Method Override
    --- Allowing Child Class To Provide Implementation Of A Method In Parent Class
    --- A Method In Child Class Must Have Same Name As Parent Class

    --- noImplicitOverride
*/

class Player {
    constructor(public name: string) {}
    attack() : void {
        console.log("Attacking Now");
    }
}

class Jinx extends Player {
    constructor(name: string, public fireGun: number) {
        super(name);
    }
    override attack() : void {
        super.attack();
        console.log('jinx is attacking right now');
        this.fireGun -= 1;
    }
}

let playerOne = new Jinx('ashraf', 21)

console.log(playerOne.name);
playerOne.attack();
console.log(playerOne.fireGun);

