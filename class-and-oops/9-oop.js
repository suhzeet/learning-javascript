const myObj = {
  user: "sujit",
  loggedIn: 8,
  signedIn: true,

  gotUserDetails: function () {
    console.log(`Username: ${this.user}`);
  },
};

// console.log(myObj.user);
// console.log(myObj.gotUserDetails());

function user(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Hello! ${this.username}`);
  };

  return this;
}

const userOne = new user("sujit", 4, true);
const userTwo = new user("sujan", 7, false);
console.log(userOne.constructor instanceof user);
// console.log(userTwo);
