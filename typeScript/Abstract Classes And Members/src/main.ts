// --- We Cannot Create An Instance Of An Abstract Class

abstract class Delta {
    constructor(public user: string) {}
    abstract levals(): void;
}

class Doctors extends Delta {
    constructor(user: string, public id: number) {
        super(user);
    }
    levals(): void {
        console.log(`we have two doctor to one material and id doctors is ${this.id}`);
    }
}

let doctor = new Doctors('magdy', 0);
console.log(doctor.id);
console.log(doctor.user);
doctor.levals();