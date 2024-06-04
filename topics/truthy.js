// Falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN.

// Truthy values

// "0", "false", " ", [], {}, function (){ Empty function}

// false == 0, false == ""

const emptyObj = {};

if (Object.keys(emptyObj).length === 0 && true) {
  console.log("object is empty");
}

// ternary operator

const price = 80;

price <= 100 ? console.log("less than 100") : console.log("greater than 100");


