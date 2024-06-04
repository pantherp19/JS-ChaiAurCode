function multipleBy5(num) {
  return num * 5;
}

multipleBy5.power = 2;

// console.log(multipleBy5(5));
// console.log(multipleBy5.power);

// function is also technically object
// console.log(multipleBy5.prototype);

function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  this.score++;
};

createUser.prototype.printMe = function () {
  console.log(`score is ${this.score}`);
};

const chai = new createUser("chai", 23);
const tea = new createUser("tea", 200);

// needs to use "new" keyword to link the prototypes to the object
// tea.printMe();

let myHeros = ["thor", "rocket"];

let heroPower = {
  thor: "hammer",
  spiderman: "sling",
  getSpiderPower: function () {
    console.log(`Spidy power is ${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objects`);
};

Array.prototype.heyPravin = function () {
  console.log("hitesh says hello");
};

// heroPower.hitesh();
// myHeros.hitesh();
// myHeros.heyPravin();
// heroPower.heyPravin();

// ************** inheritance ***************

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
  __proto__: Teacher,
};

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let myName = "pravin      ";
let myChai = "chai       ";

// console.log(myName.trim().length);
String.prototype.trueLength = function () {
  console.log(`${this}`);
  console.log(`${this.trim().length}`);
};

// myName.trueLength();
// myChai.trueLength();

// "hello world".trueLength();
