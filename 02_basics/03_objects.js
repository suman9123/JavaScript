//singleton
// object.create

//object literals

const mySym = Symbol("key1"); // doubte on this how to declare the symbol datatype and how to print this 
const user = {
    name: "suman",
    "fullName": "Suman Chakraborty",
    age: 24,
    [mySym]: "key",
    email: "suman@gmail.com",
    lastLogIn: ["monday","tuesday"]
}

console.log(user.email);
console.log(user["email"]);
console.log(user["fullName"]);
console.log(user[mySym]);
console.log(typeof user[mySym]);

user.greeting =  function() {
    console.log("hell0 JS user");
}

user.greetingTwo =  function() {
    console.log(`Hello JS user ${this.name}`);
}


user.greeting()
user.greetingTwo()
console.log(user);





