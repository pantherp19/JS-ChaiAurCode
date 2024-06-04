const start = document.querySelector("#start");
const stop = document.querySelector("#stop");

const randomColor = function () {
  const hex = "01234567890ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * 16);
    color += hex[random];
  }
  return color;
};

let interval;

function startChangingColor() {
  if (!interval) {
    interval = setInterval(changeColor, 1000);
  }

  function changeColor() {
    document.body.style.backgroundColor = randomColor();
    console.log("start clicked");
  }
}

function stopChangingColor() {
  clearInterval(interval);
  interval = null;
  console.log("stop clicked");
}

start.addEventListener("click", startChangingColor);
stop.addEventListener("click", stopChangingColor);
