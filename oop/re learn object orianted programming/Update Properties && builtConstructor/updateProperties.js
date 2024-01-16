class User {
    constructor(userName, age) {
        this.user = userName;
        this.a = age;
    }
    UpdateUserName(newUserName) {
        this.user = newUserName;
    }
    UpdateAge(newAge) {
        this.a = newAge;
    }
}

let UserOne = new User('ashraf', 21.4);
console.log(UserOne.user);
console.log(UserOne.a);
UserOne.UpdateUserName('ash');
UserOne.UpdateAge(22);
console.log(UserOne.user);
console.log(UserOne.a);