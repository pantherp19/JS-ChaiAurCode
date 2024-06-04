// for loops

// for (let i = 0; i < 10; i++) {
//   if (i == 5) {
//     console.log("detected 5");
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i == 5) {
//     console.log("detected 5");
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   for (j = 1; j <= 10; j++) {
//    console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "python",
    languageFileName: "py",
  },
  {
    languageName: "java",
    languageFileName: "js",
  },
];

myCoding.forEach((item) => {
  // console.log(`${item.languageFileName} is shorthand for ${myCoding.item}`);
});

const myNumbs = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// const newNubs = myNumbs.filter((num) => {
//   return num > 4;
// });

// const newNubs = myNumbs.filter((num) => num > 4);

let newNubs = [];
myNumbs.forEach((num) => {
  if (num > 4) {
    newNubs.push(num);
  }
});

console.log(newNubs);
