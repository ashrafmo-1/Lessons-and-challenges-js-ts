let person = {
    theName: 'Ashraf',
    theAge: 21,
    skills: {
        html: 99,
        css: 88,
        js: 40,
    },
};

member(person)

function member(object) {
    console.log(`name is ${object.theName}`)
    console.log(`age is ${object.theAge}`)
    console.log(`age is ${object.skills.html}`)
}

// Destructuring Function Parameters
function member({ theName, theAge, skills: {html} }) {
    console.log(`name is ${theName}`)
    console.log(`age is ${theAge}`)
    console.log(`age is ${html}`)
}