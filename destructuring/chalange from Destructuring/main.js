let chosen = 1;

let myFriends = [
    { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
    { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
    { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
const [
    { title: t1, age: a1, available: av1, skills: [, s1] },
    { title: t2, age: a2, available: av2, skills: [, s2] },
    { title: t3, age: a3, available: av3, skills: [, s3] }] = myFriends;

if (chosen === 1) {
    // Osama  39  Available  CSS
    console.log(t1)
    console.log(a1)
    if (av1 === true) {
        console.log("Available")
    }else{
        console.log("Not Available")
    }
    // av1 === true ? console.log("Available") : console.log("Not Available")
    console.log(s1)
}

if (chosen === 2) {
    // Ahmed  25  Not Available  Django
    console.log(t2)
    console.log(a2)
    if (av2 === true) {
        console.log("Available")
    } else {
        console.log("Not Available")
    }
    console.log(s2)
}

if (chosen === 3) {
    // Sayed  33  Available  Laravel
    console.log(t3)
    console.log(a3)
    if (av3 === true) {
        console.log("Available")
    } else {
        console.log("Not Available")
    }
    console.log(s3)
}

