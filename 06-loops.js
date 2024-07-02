// ........ for of loops

const array = [1, 2, 3, 4, 5];
const obj = [
  {
    name: "sujit",
  },
  {
    name: "neupane",
  },
];

const greetings = "hello sujit";

for (const i of obj) {
  //   console.log(i);
}

for (const greet of greetings) {
  //   console.log(`letter are: ${greet}`);
}

// ....... Maps

const map = new Map();
map.set("NP", "Nepal");
map.set("USA", "United States of America");
map.set("AUS", "Australia");

// console.log(map);

for (const [key, value] of map) {
  //   console.log(`${key} :- ${value}`);
}

// ....... FOR IN LOOPS

const myObj = {
  js: "javascript",
  cpp: "C++",
  rb: "ruby",
};

for (const key in myObj) {
  //   console.log(`${key} means ${myObj[key]}`);
}

const myArr = [1, 2, 3, 4, 5];
for (const key in myArr) {
  //   console.log(myArr[key]);
}

// const map = new Map();
// map.set("NP", "Nepal");
// map.set("USA", "United States of America");
// map.set("AUS", "Australia");
// for (const key in map) {
//   console.log(key);
// }
//.. doesnot work for Map

// ...... FOR EACH

const coding = ["javascript", "html", "ruby", "python", "c++"];

// coding.forEach((items) => {
//   console.log(items);
// });

// function printMe(item) {
//   //   console.log(item);
// }
// coding.forEach(printMe);

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "java",
    languageFileName: "java",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
];

myCoding.forEach((item) => {
  // console.log(`${item.languageFileName} :- ${item.languageName}`);
});

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums
//   .map((num) => num * 3)
//   .filter((n) => n % 2 !== 0)
//   .filter((i) => i > 5);

// console.log(newNums);

// ......... REDUCE

const newNums = myNums.reduce((acc, currvalue) => {
  return acc + currvalue;
}, 0);
console.log(newNums);
