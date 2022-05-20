"use strict";
const word = document.querySelector("#word");
const warn = document.querySelector(".main__entry--warning");
const inputSection = document.querySelector(".main__input");
const inputWord = document.querySelector(".main__input--input");
const answerSection = document.querySelector(".main__answer");
const reversed = document.querySelector(".main__answer--reversed");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  let input = word.value.trim();
  inputSection.classList.add("hidden");
  answerSection.classList.add("hidden");
  if (input) {
    let output = "";
    for (let i = input.length - 1; i >= 0; i--) {
      output += input[i];
    }
    inputSection.classList.remove("hidden");
    answerSection.classList.remove("hidden");
    inputWord.textContent = input;
    reversed.textContent = output;
    word.value = "";
  } else if (!input.trim()) {
    warn.textContent = "🛑Nothing entered!🛑";
    warn.classList.remove("hidden");
  }
});

word.addEventListener("focus", (e) => {
  inputSection.classList.add("hidden");
  answerSection.classList.add("hidden");
  warn.classList.add("hidden");
  word.value = "";
});
