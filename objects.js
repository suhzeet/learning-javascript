const mySym = Symbol('key1');
const jsUser = {
    name: "Sujit",
    [mySym]: 'mykey1',
    age: 21,
    location: "Chitwan",
    email: "example@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ['Monday', 'Saturday']
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(typeof jsUser.mySym);

jsUser.greeting = function() {
    // console.log("hello js user");
}

jsUser.greetingTwo = function() {
    // console.log(`hello js user, ${this.name}`);
}

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())
// jsUser.greeting()
// jsUser.greetingTwo()

const tinderUser = {}

tinderUser.id = 