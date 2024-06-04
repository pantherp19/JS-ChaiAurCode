const user = {
  userName: "pravin",
  price: 19,

  welcomeMassage: function () {
    console.log(`${this.userName}, welcome to website`);
    // console.log(this);
  },
};

user.welcomeMassage();
user.userName = "harry";
user.welcomeMassage();

// console.log(this);

// function chai(num1, num2) {
//   console.log(this);
// }

// let chai = () => {
//     return
// };

// let chai = (num1, num2) => {
//   return num1 + num2;
// };

// let chai = (num1, num2) => num1 + num2;

// console.log(chai(3, 4));

// how to return object in arrow function

let chai = () => ({userName: 'pravin'})
console.log(chai());

