'use strict';

const body = document.querySelector('body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highscore = document.querySelector('.highscore');

let gameScore = 10;
let secretNumber = Math.trunc(Math.random() * 20) + 1
let gameHighScore = 0;
// number.textContent = secretNumber;

let displayMessage = function (gameMessage) {
    message.textContent = gameMessage;
}

check.addEventListener('click', () => {
    let guessValue = Number(guess.value);
    if (!guessValue) {
        // message.textContent = 'No Number Entered';
        displayMessage('No Number Entered');
    } else if (guessValue === secretNumber) {
        // message.textContent = 'Yeey Correct answer, You won';
        displayMessage('Yeey Correct answer, You won');
        gameScore++;
        score.textContent = gameScore;
        body.style.backgroundColor = 'green';
        number.textContent = secretNumber;
        number.style.width = '30rem';

        if (gameScore > gameHighScore) {
            gameHighScore = gameScore;
            highscore.textContent = gameHighScore;
        }

    } else if (guessValue !== secretNumber) {
        if (gameScore > 1) {
            displayMessage(guessValue > secretNumber ? 'Too High' : 'Too Low');
            gameScore--;
            score.textContent = gameScore;
        } else {
            displayMessage('Game Over, You lost the game');
            score.textContent = 0;
            body.style.backgroundColor = ' #ce1313';
        }
    }

    // else if (guessValue > secretNumber) {
    //     if (gameScore > 1) {
    //         message.textContent = 'Too High';
    //         gameScore--;
    //         score.textContent = gameScore;
    //     } else {
    //         message.textContent = 'Game Over, You lost the game';
    //         score.textContent = 0;
    //         body.style.backgroundColor = ' #ce1313';
    //     }
    // } else if (guessValue < secretNumber) {
    //     if (gameScore > 1) {
    //         message.textContent = 'Too Low';
    //         gameScore--;
    //         score.textContent = gameScore;
    //     } else {
    //         message.textContent = 'Game Over, You Lost the Game';
    //         score.textContent = 0;
    //         body.style.backgroundColor = ' #ce1313';
    //         // setInterval(() => {
    //         //     location.reload()
    //         // }, 5000);
    //     }
    // }
})

again.addEventListener('click', () => {
    gameScore = 10;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start Guessing....');
    score.textContent = gameScore;
    number.textContent = '?';
    guess.value = '';
    body.style.backgroundColor = '#222';
    number.style.width = '15rem';
});






































