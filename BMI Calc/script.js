console.log("hello world");

const form = document.querySelector("form");
const submit = document.querySelector("#submitBtn");
submit.addEventListener("click", function (e) {
  e.preventDefault();
  const height = form.height.value;
  const weight = form.weight.value;
  const heightMeter = height * 0.01;
  const bmi = (weight / (heightMeter * heightMeter)).toFixed(2);
  if (bmi < 18.6) {
    document.querySelector(
      "#results"
    ).textContent = `Your BMI is ${bmi}. This is considered Under Weight`;
  }
  if (bmi >= 18.6 && bmi < 25) {
    document.querySelector(
      "#results"
    ).textContent = `Your BMI is ${bmi}. This is considered Normal`;
  }
  if (bmi >= 25) {
    document.querySelector(
      "#results"
    ).textContent = `Your BMI is ${bmi}. This is considered Over Weight`;
  }
});
