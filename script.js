"use strict";
//selecting elements
const player1El = document.querySelector(".player--1");
const player2El = document.querySelector(".player--2");
//these are the same, getElementById works faster
const score1El = document.getElementById("score--1");
const score2El = document.querySelector("#score--2");
//selecting dice
const diceEl = document.querySelector(".dice");
//selecting current elements
const current1El = document.getElementById("current--1");
const current2El = document.getElementById("current--2");
//selecting buttons
const btnNewEl = document.querySelector(".btn--new");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");

//declaring variables
let score1 = 0;
let currentVal = 0;

const init = function () {
  //Empty all the scores,dice and values
  //also First apperance of the page

  score1 = 0;
  currentVal = 0;
  // scores = [0, 0];
  // currentScore = 0;
  // activePlayer = 0;
  // playing = true;

  //make all the elements 0
  score1El.textContent = 0;
  score2El.textContent = 0;
  current1El.textContent = 0;
  current2El.textContent = 0;

  //remove dice img
  diceEl.classList.add("hidden");

  //turn bg to blue and fonts to normal
  // player1El.classList.remove("player--winner");
  // player2El.classList.remove("player--winner");

  //Select player1 as active player
  // player1El.classList.add("player--active");
  // player2El.classList.remove("player--active");
};
init();

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
  //add the condition where score is bigger equal to 100
});

//new game button
btnNewEl.addEventListener("click", init);
