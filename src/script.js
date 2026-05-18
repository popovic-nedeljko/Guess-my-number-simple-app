'use strict';

const msgText = document.querySelector('.msg-text');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const btnNewGame = document.querySelector('.new-game');
const secretNumber = document.querySelector('.number');
const guessInput = document.querySelector('.guess');
const body = document.querySelector('body');

let randomNum = Math.trunc(Math.random() * 25) + 1;
let scores = 20;
let highscores = 0;

const displayMessage = function (msg) {
  msgText.textContent = msg;
};

score.textContent = scores;
highScore.textContent = highscores;

btnCheck.addEventListener('click', function () {
  const guess = Number(guessInput.value);

  if (!guess) {
    displayMessage('No number!');
  } else if (guess === randomNum) {
    displayMessage('Correct!');
    body.classList.remove('state-lose');
    body.classList.add('state-win');
    secretNumber.textContent = randomNum;
    if (scores > highscores) {
      highscores = scores;
      highScore.textContent = highscores;
    }
  } else {
    if (scores > 1) {
      displayMessage(guess > randomNum ? 'Too High!' : 'Too Low!');
      scores--;
      score.textContent = scores;
    } else {
      displayMessage('You Lost!');
      score.textContent = 0;
      body.classList.remove('state-win');
      body.classList.add('state-lose');
    }
  }
});

const resetGame = function () {
  scores = 20;
  randomNum = Math.trunc(Math.random() * 25) + 1;
  displayMessage('Start guessing...');
  guessInput.value = '';
  secretNumber.textContent = '?';
  score.textContent = scores;
  body.classList.remove('state-win', 'state-lose');
};

btnAgain.addEventListener('click', resetGame);
btnNewGame.addEventListener('click', resetGame);
