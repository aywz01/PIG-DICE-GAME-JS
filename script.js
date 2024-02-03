"use strict";
//selecting elements
const player1El = document.querySelector(".player-1");
const player2El = document.querySelector(".player-2");
//these are the same, getElementById works faster
const score1El = document.getElementById("score-1");
const score2El = document.querySelector("#score-2");
//selecting dice
const diceEl = document.querySelector(".dice");
//selecting current elements
const current1El = document.getElementById("current-1");
const current2El = document.getElementById("current-2");
//selecting buttons
const btnNewEl = document.querySelector(".btn-new");
const btnRollEl = document.querySelector(".btn-roll");
const btnHoldEl = document.querySelector(".btn-hold");

//First apperance of the page
//Empty all the scores,dice and values
score1El.textContent = 0;
score2El.textContent = 0;
diceEl.classList.add("hidden");
current1El.textContent = 0;
current2El.textContent = 0;
//declare score for hold the value
let score1 = 0;
let currentVal = 0;

//Rolling the dice
btnRollEl.addEventListener("click", function () {
  const randomDice = Math.trunc(Math.random() * 6 + 1);
  //math.random()*6 --> 0-5, +1--> 1-6, -->math.trunc -->format
  //dice is showing
  diceEl.classList.remove("hidden");
  diceEl.src = `dice-${randomDice}.png`;
  //is the rolled dice 1?
  if (randomDice === 1) {
    score1 = 0;
    current1El.textContent = score1;
    // player2El.classList.add("player-active");
  } else {
    //current score showing
    score1 += randomDice;
    current1El.textContent = score1;
    console.log("score1:", score1);
  }
});

//hold the score
btnHoldEl.addEventListener("click", function () {
  score1 = parseInt(score1El.textContent); //turning the text content into number to be able to do summation
  currentVal = parseInt(current1El.textContent);
  score1 = score1 + currentVal;
  score1El.textContent = score1;
  current1El.textContent = 0;
  currentVal = 0;
  score1 = 0;
});

//new game button
btnNewEl.addEventListener("click", function () {
  //First apperance of the page
  //Empty all the scores,dice and values
  score1El.textContent = 0;
  score2El.textContent = 0;
  diceEl.classList.add("hidden");
  current1El.textContent = 0;
  current2El.textContent = 0;
  //background also should turn to blue if someone win and it was black
});
