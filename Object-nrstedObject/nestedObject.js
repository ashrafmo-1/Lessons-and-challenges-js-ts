let user = {
    name: "Ashraf",
    age: 21,
    skills: ["Html", "css", "js"],
    available: false,
    address: {
        ksa: "Jda",
        egypt: {
            addressOne: "dammita",
            addressTow: "mansoura",
        },
    },
    chickAvailable: function () {
        if (user.available === true) {
            return `عاااااااوز شووغل`
        } else {
            return `عاااااااوز فلووووووس`
        }
    },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" , "));
console.log(user.skills[2]);
console.log(user.address);
console.log(user.address.ksa);
console.log(user.address.egypt.addressOne);
console.log(user.address.egypt.addressTow);
//  wiht notation
console.log(user["address"]);
console.log(user["address"]["ksa"]);
console.log(user["address"]["egypt"]);
console.log(user["address"]["egypt"]["addressOne"]);

console.log(user.chickAvailable())