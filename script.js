"use strict";
//selecting elements
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
//these are the same, getElementById works faster
const score0El = document.getElementById("score--0");
const score1El = document.querySelector("#score--1");
//selecting dice
const diceEl = document.querySelector(".dice");
//selecting current elements
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
//selecting buttons
const btnNewEl = document.querySelector(".btn--new");
const btnRollEl = document.querySelector(".btn--roll");
const btnHoldEl = document.querySelector(".btn--hold");

//declaring variables
let currentScore = 0;
let activePlayer = 0;
//storing players scores in array
let scores = 0;
//because arrays index is 0, players will be player0 and player1
let playing = 0;
//state condition, so when a user wins buttons will stop working

const init = function () {
  //Empty all the scores,dice and values
  //also First apperance of the page
  activePlayer = 0;
  scores = [0, 0];
  currentScore = 0;
  playing = true;

  //make all the elements 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;

  //remove dice img
  diceEl.classList.add("hidden");

  //turn bg to blue and fonts to normal
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");

  //Select player1 as active player
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
  //player0=active then --> player1=passive
  //toggle --> like ON/OFF
};

//Rolling the dice
btnRollEl.addEventListener("click", function () {
  if (playing) {
    const randomDice = Math.trunc(Math.random() * 6 + 1);
    //math.random()*6 --> 0-5, +1--> 1-6, -->math.trunc -->format

    //dice is showing
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${randomDice}.png`;

    //is the rolled dice 1?
    if (randomDice === 1) {
      //swich players
      switchPlayer();
    } else {
      //current score showing
      currentScore += randomDice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    }
  }
});

//hold the score
btnHoldEl.addEventListener("click", function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;
    // scores[1] = scores[1] + currentScore

    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    // Check if player's score is >= 100
    if (scores[activePlayer] >= 20) {
      // Finish the game
      playing = false;
      diceEl.classList.add("hidden");

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove("player--active");
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

//new game button
btnNewEl.addEventListener("click", init);
