// script.js
document.addEventListener('DOMContentLoaded', () => {
    const words = ['javascript', 'hangman', 'programming', 'developer', 'function'];
    let selectedWord = words[Math.floor(Math.random() * words.length)];
    let wrongGuesses = [];
    let correctGuesses = new Set();

    const wordDisplay = document.getElementById('word-display');
    const wrongGuessesDisplay = document.getElementById('wrong-guesses');
    const messageDisplay = document.getElementById('message');
    const guessInput = document.getElementById('guess-input');
    const guessButton = document.getElementById('guess-button');

    function updateWordDisplay() {
        wordDisplay.textContent = selectedWord.split('').map(letter => correctGuesses.has(letter) ? letter : '_').join(' ');
    }

    function updateMessage() {
        if (wrongGuesses.length >= 6) {
            messageDisplay.textContent = `Game over! The word was "${selectedWord}".`;
            guessButton.disabled = true;
        } else if (selectedWord.split('').every(letter => correctGuesses.has(letter))) {
            messageDisplay.textContent = 'Congratulations! You guessed the word!';
            guessButton.disabled = true;
        } else {
            messageDisplay.textContent = '';
        }
    }

    guessButton.addEventListener('click', () => {
        const guess = guessInput.value.toLowerCase();
        guessInput.value = '';

        if (!guess || guess.length !== 1) {
            return;
        }

        if (selectedWord.includes(guess)) {
            correctGuesses.add(guess);
        } else {
            if (!wrongGuesses.includes(guess)) {
                wrongGuesses.push(guess);
            }
        }

        updateWordDisplay();
        wrongGuessesDisplay.textContent = wrongGuesses.join(', ');
        updateMessage();
    });

    updateWordDisplay();
});