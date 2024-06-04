let name = "pravin";
let age = 23;

console.log(`Hello my name is ${name} and my age is ${age}`);

// const gameName = new String("hitesh-hc-com");

// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf("t"));
// console.log(gameName.substring(0, 4)); // it start from 0 and goes upto length of string
// console.log(gameName.slice(-8, 4)); // it start from - of length of string upto length of string
// console.log(gameName.split('-'));

// const newString = "     pravin     ";
// console.log(newString);
// console.log(newString.trim());

// let url = "https://pravin.com/pravin%20mane";

// console.log(url.replace('%20', '_'), url);
// console.log(url.includes('mane'));

// ********* input string or not ***********

// let isString = function (input) {
//   if (typeof (input) === 'string') {
//     return true;
//   }
//   else return false;
// };

// console.log(isString([1,2,3]));

// ********* is string blank or not ***********

// let isStringBlank = function (input) {
//   if (input.length === 0) {
//     return true;
//   } else return false;
// };

// console.log(isStringBlank("zero"));

// ********* string convert into array ***********

/*
let to_Arr = function (input) {
  let newStr = new String(input);
  let arr = newStr.split(" ");
  return arr;
};

console.log(to_Arr("pravin is web developer"));
*/

// ********* Extract specific number of characters ***************
/*
let extractor = function (input, value) {
  if (typeof (input) === "string" && input.length > 0) {
    return input.slice(0, value);
  } else return "String is empty";
};

console.log(extractor("robin", 3));
*/

// ********* Abbreviation of name ******************

// let abbName = function (input) {
//   let newStr = input.split(" ");
//   let newName = newStr[0];
//   if (newStr.length > 1) {
//     for (let i = 1; i < newStr.length; i++) {
//       const element = newStr[i];
//       newName = newName + " " + element.charAt(0);
//     }

//     return newName;
//   } else return newStr[0];
// };

// console.log(abbName("Pravin Vijay Mane"));

// let abbName = function (input) {
//   let newStr = input.split(" ");
//   let newName = newStr[0];
//   if (newStr.length > 1) {
//     newStr.forEach((element) => {
//       if (element !== newStr[0]) {
//         newName = newName + " " + element.charAt(0);
//       }
//     });

//     return newName;
//   } else return newStr[0];
// };

// console.log(abbName("Pravin Vijay Mane Kumar Bole"));

// ***************** Protect Email **************************

// const protect_email = function (email) {
//   let splitted, part1, part2, avg;
//   splitted = email.split("@");
//   part1 = splitted[0];
//   part2 = splitted[1];
//   avg = splitted[0].length / 2;
//   return part1.slice(0, avg) + "...@" + part2;
// };

// console.log(protect_email("parvinmane@yahoo.com"));

// ************ function to parameterize a string *******************

// const string_parameterize = function(str){
//   return str.replaceAll(' ', '-').toLowerCase();
// }

// console.log(string_parameterize("Robin Singh from USA."));

// ************ Capitalize first letter of string *******************

const capitalize = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

console.log(capitalize("hello world"));
