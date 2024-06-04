const reqURL = "https://api.github.com/users/hiteshchoudhary";
const xhr = new XMLHttpRequest();

const imgURL = document.querySelector(".profile-image");
const name = document.querySelector(".profile-name");
const desc = document.querySelector(".profile-description");

xhr.open("GET", reqURL);
xhr.onreadystatechange = function () {
  //   console.log(xhr.readyState);
  if (xhr.readyState === 4) {
    const data = JSON.parse(this.responseText);
    imgURL.setAttribute("src", data.avatar_url);
    name.innerHTML = data.name;
    desc.textContent = data.bio;
    console.log("work done");
  }
};
xhr.send();

// console.log("hello pravin");
