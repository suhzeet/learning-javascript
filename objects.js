const mySym = Symbol("key1");
const jsUser = {
  name: "Sujit",
  [mySym]: "mykey1",
  age: 21,
  location: "Chitwan",
  email: "example@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// console.log(jsUser.email);
// console.log(jsUser["email"]);

// console.log(typeof jsUser.mySym);

jsUser.greeting = function () {
  // console.log("hello js user");
};

jsUser.greetingTwo = function () {
  // console.log(`hello js user, ${this.name}`);
};

// console.log(jsUser.greeting())
// console.log(jsUser.greetingTwo())
// jsUser.greeting()
// jsUser.greetingTwo()

const tinderUser = {};

const regularUser = {
  email: "example@gmail.com",
  fullName: {
    firstName: "Sujit",
    lastName: "Neupane",
  },
};

// console.log(regularUser.fullName.firstName);

// ..............
// objects de-structuring

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "sujit",
};

// console.log(course.courseInstructor);

const { courseInstructor: instructor } = course;
// console.log(instructor);
