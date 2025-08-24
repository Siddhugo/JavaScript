// Generate a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100 + 1);

// Select all the required DOM elements
const submit = document.querySelector('#subt');       // Submit button
const userInput = document.querySelector('#guessField'); // Input field
const guessSlot = document.querySelector('.guesses'); // Previous guesses display
const remaining = document.querySelector('.lastResult'); // Remaining attempts display
const startOver = document.querySelector('.resultParas'); // Container for restart button
const lowOrHi = document.querySelector('.lowOrHi');   // Hint message (low/high)

const p = document.createElement('p'); // For restart button
let prevGuesses = [];  // Store all previous guesses
let numGuess = 1;      // Attempt counter
let playGame = true;   // Flag to check if game is active

// Start game if allowed
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent form submission
        const guess = parseInt(userInput.value); // Convert input string → number
        validateGuesses(guess);
    });
}

// Validate user guess input
function validateGuesses(guess) {
    if (isNaN(guess)) {
        alert('❌ Please enter a valid number!');
    } else if (guess > 100) {
        alert('❌ Please enter a number less than or equal to 100');
    } else if (guess < 1) {
        alert('❌ Please enter a number greater than or equal to 1');
    } else {
        // Store valid guess
        prevGuesses.push(guess);

        if (numGuess >= 10) {
            displayGuess(guess);
            displayMessage(`💀 Game Over! The number was ${randomNumber}`);
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

// Check if guess is correct, too low, or too high
function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`🎉 Correct! You guessed it right!`);
        endGame();
    } else if (guess < randomNumber) {
        displayMessage(`📉 Too Low! Try again.`);
    } else if (guess > randomNumber) {
        displayMessage(`📈 Too High! Try again.`);
    }
}

// Display guess, update attempts left
function displayGuess(guess) {
    userInput.value = ''; // Clear input field
    guessSlot.innerHTML += `${guess} `; // Append new guess
    numGuess++;
    remaining.innerHTML = `${11 - numGuess}`; // Show remaining attempts
}

// Display hint messages
function displayMessage(message) {
    lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

// End game and show restart option
function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', ''); // Disable input

    // Create restart button
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">🔄 Start New Game</h2>`;
    startOver.appendChild(p);

    playGame = false;
    newGame();
}

// Restart the game
function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function () {
        randomNumber = Math.floor(Math.random() * 100 + 1);
        prevGuesses = [];
        numGuess = 1;

        guessSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess}`;
        userInput.removeAttribute('disabled'); // Enable input again
        startOver.removeChild(p); // Remove restart button
        playGame = true;
    });
}
