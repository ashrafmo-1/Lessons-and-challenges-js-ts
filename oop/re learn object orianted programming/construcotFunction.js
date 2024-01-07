// old modern object

let userOne = {
    ID: '0',
    name: 'ashraf',
    salary: '1000$'
}

let userTwo = {
    ID: '1',
    name: 'shenoo',
    salary: '300$'
}

let userThree = {
    ID: '2',
    name: 'Elkwawy',
    salary: '3300$'
}
// console.log(typeof userOne);

function Users(id, name, salary) {
    this.id = id;
    this.name = name;
    this.salary = salary;
}

let user1 = new Users(10, 'rania', 2000);
let user2 = new Users(1, 'nada', 11000);
let user3 = new Users(2, 'shenaway', 3000);

console.log(user1.id);