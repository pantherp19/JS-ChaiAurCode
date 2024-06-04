function greeting(parameters) {
  return parameters;
}

let wishes = greeting("argument");

console.log(wishes);

function loginUserMessage(userName = "pravin") {
  if (!userName) {
    return "Please enter a user name";
  }

  return `${userName} just logged in`;
}

// console.log(loginUserMessage());

function calcCartPrice(val1, val2, ...valRemain) {
  return valRemain;
}

console.log(calcCartPrice(100, 200, 300, 400, 500, 600, 700));

const user = {
  name: "pravin",
  age: 28,
};

function handleObj(obj) {
  return `user name is ${obj.name} and his age is ${obj.age}`;
}

// console.log(handleObj(user));
console.log(
  handleObj({
    name: "harry",
    age: 30,
  })
);

console.log("auto save");

let balance = 1999;

// pravin is a good boy

console.log(balance);

let pravin = 234;
console.log(pravin);
