/* Class Access Modifiers */

                /* public */
// ------ All Members Of A Class In TypeScript Are Public
// ------ All Public Members Can Be Accessed Anywhere Without Any Restrictions


type mix = number | string

// class Player{
//     name: string;
//     position: string;
//     level: mix;
//     vip?: boolean;
//     constructor(name: string, position: string, level: mix, vip?: boolean) {
//         this.name = name;
//         this.position = position;
//         this.level = level;
//         this.vip = vip;
//     }
//     details() {
//         return `${this.vip ? 'VIP': ""} ${this.name} Type Is ${this.position} Level Is ${this.level}`;
//     }
// }

class Player{
    AllContent: () => string;
    msg: () => string;
    constructor(public readonly name: string, public position: string, private level: mix, protected vip?: boolean) {

        this.AllContent = function() {
            return `${this.vip ? 'VIP': ""} ${this.name} Type Is ${this.position} Level Is ${this.level}`;
        }

        this.msg = function () {
            return `Hello ${this.name} Your Salary Is ${this.position}`;
        }


    }
    details() {
        return `${this.vip ? 'VIP': ""} ${this.name} Type Is ${this.position} Level Is ${this.level}`;
    }
}