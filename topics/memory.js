// 1. Stack

// * Primitive Datatype
// provide copy

let nameA = "pravin";
let anotherName = nameA;

anotherName = "aniket";

console.log(anotherName);
console.log(nameA);

// Both values of variables will be different as they are assigned separate values and each variable save value inside him/ stack and each variable get separate location of database(only for primitive datatype).

// 2. Heap

// * Reference/ Non Primitive Datatype
// provide reference (original value)

let obj = {
  email: "user@google.com",
  upi: "user@ybl",
};

let newObj = obj;
newObj.upi = "pravin@ybl";

console.log(obj.email, newObj);

// In reference/ non primitive datatype variable value is saved in heap (in deferent location), variable gets it's reference. As we assigned same value for two deferent variables they get reference of one location. If using any of both variables we change the value then original value will change for both variables.

// in heap we get reference of data
