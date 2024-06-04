document.getElementById("ul").addEventListener(
  "click",
  function () {
    console.log("clicked on ul");
  },
  false
);

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget
// clientX, clientY, screenX, screenY
// altkey, ctrkey, shiftkey,keycode

document.getElementById("element").addEventListener(
  "click",
  function (e) {
    console.log("clicked on tailwind css");
    e.stopPropagation();
  },
  true
);
