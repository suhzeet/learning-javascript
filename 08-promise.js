/*
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("first promise done");
    resolve();
  }, 1000);
});

promiseOne.then(() => {
  console.log("first promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("second promise done");
    resolve();
  }, 1000);
}).then(() => {
  console.log("second promise consumed");
});

const promiseThird = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("third promise done");
    resolve({ user: "sujit", mail: "sujit@example.com" });
  }, 1000);
});

promiseThird.then((user) => {
  console.log("third promise consumed", user);
});

const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("fourth promise done");
    let error = true;
    if (!error) {
      resolve({ username: "sujit@example.com", password: "1234" });
    } else {
      reject(`something went wrong`);
    }
  }, 1000);
});

promiseFour
.then((user) => {
  console.log("fourth promise success", user);
  return user.username;
})
.then((username) => {
  console.log(username);
  })
  .catch((hello) => {
    console.log(hello);
  })
  .finally(() => {
    console.log("error is either resolved or rejected");
  });
  
  const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("fourth promise done");
    let error = true;
    if (!error) {
      resolve({ usermail: "sujit@example.com", password: "1234" });
    } else {
      reject(`something JS went wrong`);
    }
  }, 0);
});

async function consumePromiseFive() {
  try {
    const response = await promiseFive;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

consumePromiseFive();

*/

async function getAllUser() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  console.log(data);
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("E:", error));
