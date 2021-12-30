'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

// Functions to use

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const styleNumber = function (number) {
  document.querySelector('.number').style.width = number;
};
const showNumber = function (number) {
  document.querySelector('.number').textContent = number;
};
const showScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const changeBody = function (body) {
  document.querySelector('body').style.backgroundColor = body;
};
const showHigscore = function (highscore) {
  document.querySelector('.highscore').textContent = highscore;
};

// Check Button

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //When there is no input.

  if (!guess) {
    displayMessage('No number!');

    //When player wins
  } else if (guess === secretNumber) {
    displayMessage('Number is correct!');
    showNumber(secretNumber);

    changeBody('#60b347');
    styleNumber('30rem');

    if (score > highscore) {
      highscore = score;
      showHigscore(highscore);
    }

    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too low!');
      score--;
      showScore(score);
    } else {
      displayMessage('You lost the game!');
      showScore(0);
    }
  }
});

// Again Button

document.querySelector('.again').addEventListener('click', function () {
  displayMessage('Start guessing...');
  score = 20;
  showScore(score);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  changeBody('#222');
  styleNumber('15rem');
  showNumber('?');
  document.querySelector('.guess').value = '';
});
