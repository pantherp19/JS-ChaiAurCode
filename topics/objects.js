// console.log("Objects");

let mySym = Symbol("Pravin");

let myObj = {
  name: "pravin",
  city: "pune",
  [mySym]: "myKey", //to refer symbol
  isLoggedIn: true,
};

// console.log(myObj);
// console.log(myObj.city);
// console.log(myObj['city']);
// console.log(myObj[mySym]);

myObj.city = "vita";
// console.log('new city ' + myObj.city);

// Object.freeze(myObj) // now object will not change
myObj.city = "mumbai";
// console.log('new city ' + myObj.city);

myObj.greeting = function () {
  return `hello coder ${this.name}`;
};

// console.log(myObj.greeting());

// const tinderUser = new Object();
const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Pravin";
tinderUser.isLoggedIn = false;

//console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedInOut')); // Determines whether an object has a property with the specified name

const regularUser = {
  email: "pravin@gmail.com",
  fullName: {
    userFullName: {
      firstName: "pravin",
      lastName: "mane",
    },
  },
};

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj3 = { 5: "a", 6: "b" };

// const obj4 = { obj1, obj2, obj3 };
// const obj4 = Object.assign({}, obj1,obj2,obj3) // Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.
const obj4 = { ...obj1, ...obj2, ...obj3 };

// console.log(obj4);

let users = [
  { id: 123, name: "pravin" },
  { id: 456, name: "harry" },
  { id: 789, name: "hitesh" },
];

// console.log(users[1].name);

const course = {
  courseName: "Coding",
  coursePrice: 1200,
  courseInstructor: "Hitesh",
};

const { courseInstructor: instructor } = course;
console.log(instructor);
