const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// .......for each
// myNum.forEach((num) => {
//   console.log(num);
// });

// .......filter
// const newNums = myNum.filter((num) => {
//   return num > 5;
// });
// console.log(newNums);

// ......same above operation using forEach
// const newNums = [];
// myNum.forEach((hey) => {
//   if (hey > 5) {
//     newNums.push(hey);
//   }
// });
// console.log(newNums);

const books = [
  {
    title: "book 1",
    genre: "history",
    author: "person 1",
    price: 599,
  },
  {
    title: "book 2",
    genre: "science",
    author: "person 2",
    price: 399,
  },
  {
    title: "book 3",
    genre: "history",
    author: "person 3",
    price: 199,
  },
  {
    title: "book 4",
    genre: "motivational",
    author: "person 4",
    price: 899,
  },
  {
    title: "book 5",
    genre: "science",
    author: "person 5",
    price: 389,
  },
];

// const userBooks = books.filter((book) => book.genre === "science");
// console.log(userBooks);
// userBooks.forEach((book) => console.log(book.title));

// ........mapping

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum
//   .map((num) => num * 3)
//   .map((hello) => hello + 1)
//   .filter((meew) => meew % 2 === 0);
// console.log(newNum);

// .........reducer

// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNum = myNum.reduce((acc, currvalue) => {
//   console.log(`acc: ${acc} and currvalue: ${currvalue}`);
//   return acc + currvalue;
// }, 0);
// console.log(newNum);

const totalPrice = books.reduce((acc, book) => {
  console.log(`acc: ${acc} and price: ${book.price}`);
  return acc + book.price;
}, 0);
console.log(totalPrice);
