// Arrays

const arr = [1, 2, 3, "hello", true, ["another array"]];
// const heros = ["shaktiman", "ironman"];

// // array methods

// arr.push("new"); //adds new to array at last position
// arr.pop(); //removes last value of array
// arr.unshift("5"); //adds value at the first position. Due to which all array shifts, hence not recommended to use unshift
// arr.shift(); //removes first value of array

// console.log(arr.includes(true));
// console.log(arr.indexOf(3));

// const newArr = arr.join(); //converts array into a string

// console.log("A ", arr);

// let newArr2 = arr.slice(1, 4); //Returns a copy of a section of an array

// console.log(newArr2);
// console.log("B ", arr);

// let newArr3 = arr.splice(1, 4); //Removes elements from an array and, if necessary, inserts new elements in their place

// console.log(newArr3);
// console.log("c ", arr);

let marvel_heros = ["ironman", "rocket", "thor"];
let dc_heros = ["superman", "flashman", "batman"];
let ind_heros = ["krish", "shaktiman"];

// marvel_heros.push(dc_heros); //['ironman', 'rocket', 'thor', ['superman', 'flashman', 'batman']]
let newArr = marvel_heros.concat(dc_heros, ind_heros); //concat method creates new array of both inputs.

// another method to concat arrays
let newArr4 = [...marvel_heros, ...dc_heros, ...ind_heros];
// console.log(newArr4);

let another_arr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 1, 2, [3], 4], 5], 6];

let real_another_arr = another_arr.flat(Infinity); // Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth

// console.log(real_another_arr, "D");
console.log(Array.isArray(arr));
console.log(Array.from("harrybhai")); // An iterable object 'string' to convert to an array.

let score = 100;
let value = 200;
let price = "300";

console.log(Array.of(score, value, price)); //Returns a new array from a set of elements.

let arr1 = [1, 2, 3, 4, 5, 6];

console.log(arr1);

console.log(arr1.slice(1, 4));

console.log(arr1.splice(1, 4));
console.log(arr1);
