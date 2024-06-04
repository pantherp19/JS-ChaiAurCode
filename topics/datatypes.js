// # Primitive Data Type

// 1. String
// 2. Number
// 3. Boolean
// 4. null
// 5. undefined
// 6. Symbol
// 7. BigInt

const id = Symbol("123");
const anotherId = Symbol("123");

let bigInt = 143n;

console.log(id, anotherId, typeof bigInt);

// Every single value in JavaScript is considered either truthy or falsy. Truthy values result in the value true when coerced into a Boolean value. Falsy values result in the value false.

/* 
All of the following values are falsy:
false
null
undefined
0
-0
NaN
An empty string ('')

other than this values all will return true in Boolean()

*/

// # Reference (Non Primitive)

// 1. Array
// 2. Objects
// 3. Functions

let arr = ["shaktiman", "nagaraj", "doga", 32, true];

let obj = {
  name: "pravin",

  age: 24,
};

let myFunction = function () {
  console.log("hello world");
};

console.log(typeof obj);
