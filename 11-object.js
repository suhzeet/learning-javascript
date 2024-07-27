function mulBy5(num) {
  return num * 5;
}

mulBy5.power = 2;

console.log(mulBy5(3));
console.log(mulBy5.power);
console.log(mulBy5.prototype);

function getUser(username, score) {
  this.username = username;
  this.score = score;
}

getUser.prototype.increment = function () {
  this.score++;
};

getUser.prototype.printMe = function () {
  console.log(`Score is ${this.score}`);
};

const chai = new getUser("chai", 25);
const tea = new getUser("tea", 50);

chai.printMe();
tea.printMe();
