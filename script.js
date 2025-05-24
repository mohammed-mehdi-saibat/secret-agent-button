"use strict";

const button = document.querySelector("#secret-btn");
const gameBoard = document.querySelector("#game-board");

button.addEventListener("mouseenter", () => {
  const buttonWidth = button.offsetWidth;
  const buttonHeight = button.offsetHeight;
  const gameBoardWidth = gameBoard.offsetWidth;
  const gameBoardHeight = gameBoard.offsetHeight;

  const maxLeft = gameBoardWidth - buttonWidth;
  const maxTop = gameBoardHeight - buttonHeight;

  const randomLeft = Math.floor(Math.random() * maxLeft);
  const randomTop = Math.floor(Math.random() * maxTop);

  button.style.left = randomLeft + "px";
  button.style.top = randomTop + "px";
});

const winningMessage = document.querySelector("#status");
const reload = document.querySelector(".heading");

button.addEventListener("click", () => {
  winningMessage.textContent = "Mission accomplished! You caught me!";
  winningMessage.style.color = "#4CAF50";
  gameBoard.style.borderColor = "#4CAF50";
  button.textContent = " 😢";
  button.style.backgroundColor = "#4CAF50";
  reload.textContent = "Play Again!";
  reload.style.borderWidth = "1px";
  reload.style.borderStyle = "solid";
  reload.style.borderColor = "#4CAF50";
  reload.style.borderRadius = "12px";
  reload.style.padding = "5px 10px";
  reload.style.backgroundColor = "#111111";
  reload.style.color = "#4CAF50";
});

reload.addEventListener("click", () => {
  window.location.reload();
});
