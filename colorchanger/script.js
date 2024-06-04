console.log("hello world");

const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  const random1 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const random2 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  const random3 = Math.floor(Math.random() * (255 - 0 + 1) + 0);
  button.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
  button.setAttribute("id", `rgb(${random1}, ${random2}, ${random3})`);
  button.addEventListener("click", function (e) {
    body.style.backgroundColor = e.target.id;
  });
});

// buttons.forEach(function (button) {
//   button.addEventListener("click", function (e) {
//     body.style.backgroundColor = e.target.id;
//   });
// });
