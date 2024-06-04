const user = {
  username: "Pravin",
  loginCount: 4,
  signedIn: true,

  getUserDetails: function () {
    console.log(this);
    return `Username is ${this.username}`;
  },
};

// console.log(user.username);
// console.log(user.getUserDetails());

// ****************** Constructor function **************

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;
  this.greetings = function () {
    console.log(`welcome ${this.username}`);
  };

  // in this function return is implicitly return the value of this if you not write return syntax
  return this;
}

// here 'new' is constructor, if we remove new word then this code will over write userOne with userTwo.
// new constructor creates new empty object

const userOne = new User("pravin", 12, true);
const userTwo = new User("hitesh", 11, false);

console.log(userOne);
// console.log(userTwo);
console.log(userOne instanceof User); // return true or false

console.log(userOne.constructor);
