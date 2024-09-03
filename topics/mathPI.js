const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);

const developer = {
  name: "pravin",
  value: 2300,
  isAvailable: true,

  order: function () {
    console.log("ordered");
  },

  experience: 5,
};

console.log(Object.getOwnPropertyDescriptor(developer, "name"));

// Object.defineProperty(developer, "name", {
//   writable: false,
//   enumerable: false, // can't use for loop after enumerable is false
//   configurable: true,
// });
// console.log(Object.getOwnPropertyDescriptor(developer, "name"));

for (const [key, value] of Object.entries(developer)) {
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
