"use strict";
const word = document.querySelector("#word");
const inputSection = document.querySelector(".main__input");
const inputWord = document.querySelector(".main__input--input");
const answerSection = document.querySelector(".main__answer");
const reversed = document.querySelector(".main__answer--reversed");
const btn = document.querySelector(".btn");

btn.addEventListener("click", (e) => {
  if (word.value) {
    const input = word.value;
    let output = "";
    for (let i = input.length - 1; i >= 0; i--) {
      output += input[i];
    }
    inputSection.classList.remove("hidden");
    answerSection.classList.remove("hidden");
    inputWord.textContent = input.toLowerCase();
    reversed.textContent = output.toLowerCase();
    word.value = "";
  }
});

word.addEventListener("focus", (e) => {
  inputSection.classList.add("hidden");
  answerSection.classList.add("hidden");
});
