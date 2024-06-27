function addNumers(num1, num2) {
  console.log(num1 + num2);
}

// addNumers(2, 5);

// .....................
// function with arrays
// .....................

function calculatePrice(...num) {
  return num;
}

// console.log(calculatePrice(23, 32423, 2323, 23));

const user = {
  userName: "Sujit",
  age: 22,
};
function handleObject(anyObject) {
  console.log(
    `Username is ${anyObject.userName} and UserAge is ${anyObject.age}`
  );
}
// handleObject(user);

const numbers = [200, 232, 343, 3432];
function returnSecondValue(anyObjects) {
  return anyObjects[1];
}
console.log(returnSecondValue(numbers));
