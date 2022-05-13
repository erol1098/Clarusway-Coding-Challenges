"use strict";
//* Variables
const userName = document.querySelector("#first-name");
const userEntryTitle = document.querySelector("#title");
const userEntry = document.querySelector("#desc");
const submitBtn = document.querySelector(".btn");

const blog = document.querySelector(".main__blogs");
const blogName = document.querySelector(".main__blogs__entry1--name");
const blogTitle = document.querySelector(".main__blogs__entry1__entry--title");
const blogDescription = document.querySelector(
  ".main__blogs__entry1__entry--description"
);

let counter;
// localStorage.getItem("counter")
//   ? (counter = localStorage.getItem("counter"))
//   : (counter = 1);

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const newEntry = document.createElement("div");

  console.log(newEntry);

  newEntry.innerHTML = `<div class="main__blogs__entry1--photo"><img src="https://picsum.photos/id/684/100" alt="photo">
  <label for="main__blogs__entry1--photo" class="main__blogs__entry1--name">${userName.value}</label></div>
  <div class="main__blogs__entry1__entry">
    <p class="main__blogs__entry1__entry--title">${userEntryTitle.value}</p>
    <p class="main__blogs__entry1__entry--description">${userEntry.value}</p>
  </div>`;
  newEntry.classList.add(`main__blogs__entry1`);
  blog.append(newEntry);
  counter++;
  localStorage.setItem("counter", counter);
  userName.value = "";
  userEntryTitle.value = "";
  userEntry.value = "";
});
