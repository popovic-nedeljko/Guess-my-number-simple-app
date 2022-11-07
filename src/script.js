'use strict';

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const btnClearHighScore = document.querySelector('.clear-highscore');
const secretNumber = document.querySelector('.number');
const body = document.querySelector('body');

let randomNum = Math.trunc(Math.random() * 25) + 1;
let scores = 20;
let highscores = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

score.textContent = scores;
highScore.textContent = highscores;

btnCheck.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when number is not inserted
  if (!guess) {
    displayMessage('No number⛔');
  }

  //when player wins
  else if (guess === randomNum) {
    displayMessage('🎉Correct number!');
    body.style.background = '#60b347';
    secretNumber.style.width = '25rem';
    secretNumber.textContent = randomNum;

    if (scores > highscores) {
      highscores = scores;
      highScore.textContent = highscores;
    }
    //when the guess is wrong
  } else if (guess !== randomNum) {
    if (scores > 1) {
      displayMessage(guess > randomNum ? 'too high' : 'too low');
      scores--;
      score.textContent = scores;
    }
    //when player losses
    else {
      displayMessage('💥 You lost the game!');
      score.textContent = 0;
      body.style.background = 'darkred';
    }
  }
});

//restart the game
btnAgain.addEventListener('click', function () {
  scores = 20;
  randomNum = Math.trunc(Math.random() * 25) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  secretNumber.textContent = '?';
  secretNumber.style.width = '15rem';
  score.textContent = scores;
  body.style.background = 'rgba(24, 129, 164)';
});
