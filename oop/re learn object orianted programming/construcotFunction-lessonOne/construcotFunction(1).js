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

let user1 = new Users(0, 'rania', 2000);
let user2 = new Users(1, 'nada', 11000);
let user3 = new Users(2, 'shenaway', 3000);

console.log(user1.id);
console.log(user1.name);
console.log(user1.salary);

console.log(user2.id);
console.log(user2.name);
console.log(user2.salary);

console.log(user3.id);
console.log(user3.name);
console.log(user3.salary);

// example to learn

const object1 = {id: 1, name: 'ashraf', job: 'programimming0'}
const object2 = {id: 2, name: 'ashraf1', job: 'programimming1'}
const object3 = {id: 3, name: 'ashraf2', job: 'programimming2'}

console.log(object1.job);
console.log(object2.job);
console.log(object3.job);