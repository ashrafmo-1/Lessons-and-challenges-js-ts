class Persons {
    constructor(ID, userName, age){
        this.i = ID;
        this.n = userName;
        this.ag = age;
    }
}

// start make inhertance
class Admin extends Persons{
    constructor(ID, userName, age, access) {
        super(ID, userName, age)
        this.ac = access;
    }
}

class Administrator extends Admin{
    constructor(ID, userName, age, access, ability) {
        super(ID, userName, age, access, ability);
        this.ab = ability
    }
}

// Persons
let userOne = new Persons(0, 'ASH', 21);
// Administrator
let adminOne = new Admin(1, 'shenoo', 22, true);
// Administrators
let ad = new Administrator(1001, 'khaled', 30, false, 'max');