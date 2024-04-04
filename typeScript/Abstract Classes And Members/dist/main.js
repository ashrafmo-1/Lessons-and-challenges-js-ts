"use strict";
// --- We Cannot Create An Instance Of An Abstract Class
class Delta {
    constructor(user) {
        this.user = user;
    }
}
class Doctors extends Delta {
    constructor(user, id) {
        super(user);
        this.id = id;
    }
    levals() {
        console.log(`we have two doctor to one material and id doctors is ${this.id}`);
    }
}
let doctor = new Doctors('magdy', 0);
console.log(doctor.id);
console.log(doctor.user);
doctor.levals();
