const myObj = {
    username: "Elzero",
    id: 100,
    score: 1000,
    country: "Egypt",
};

// Write Your Code Here
Object.defineProperty(myObj, 'score', {
        writable: false,
});

Object.defineProperty(myObj, 'id', {
    enumerable: false,
})

delete myObj.country;


myObj.score = 500;

for (let prop in myObj) {
    console.log(`${prop} => ${myObj[prop]}`);
}

console.log(myObj);

// Needed Output
// "username => Elzero"
// "score => 1000"
// {username: 'Elzero', score: 1000, id: 100}