// ... Immediately Invoked Function Expression ...

// ...simple function with simple function call
// function sujit() {
//   console.log("hello my name is sujit");
// }
// sujit();

// ... using iife
(function sujit() {
  console.log("hello my name is sujit");
})();

// ..on arrow function
(() => {
  console.log("hello this is arrow function");
})();

// ..applying parameters
((name) => {
  console.log(`hello ${name}, welcome here`);
})("sujit");
