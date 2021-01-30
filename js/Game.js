/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    /**
     * Gets phrases for the list and adds to the phrases property
     * @return {array} list of phrases
     */
    createPhrases() {
        const phrases = []
        for (let phrase of listOfPhrases) {
            const newPhrase = new Phrase(phrase);
            phrases.push(newPhrase)
        }

        return phrases;
    }

    /**
     * Gets a random phrase from phrases property
     * @return {Object} phrase object
     */
    getRandomPhrase() {
        const randomPhraseIndex = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhraseIndex];
    }

    /**
     * Initialize game by selecting and displaying a random phrase
     */
    startGame() {
        const overlayDiv = document.querySelector("#overlay");
        overlayDiv.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        this.activePhrase.addPhraseToDisplay();
    }

    /**
     * Checks to see if the letter selected by the player matches a letter in the phrase
     * @param event
     */
    handleInteraction(event) {
        // get keys from on screen keyboard
        const keys = document.querySelectorAll('.key');
        let buttonValue;
        // assign the selected letter to button value
        if (event.type === 'click') {
            buttonValue = event.target.textContent;
        } else if (event.type === 'keypress') {
            buttonValue = event.key;
        }

        if (this.activePhrase.checkLetter(buttonValue)) {
            // disable and add style to pressed key
            keys.forEach(key => {
                if (event.key === key.innerText) {
                    key.disabled = true;
                    key.classList.add("chosen");
                }
            });
            this.activePhrase.showMatchedLetter(buttonValue);
        } else {
            keys.forEach(key => {
                if (event.key === key.innerText) {
                    key.disabled = true;
                    key.classList.add("wrong");
                }
            });
            this.removeLife();
        }

        if (this.checkForWin()) {
            this.gameOver(true);
        }
    }

    /**
     * Checks for winning move
     *
     * @return {boolean} True if game is won, false if not
     */
    checkForWin() {
        const shownChars = document.querySelectorAll(".show");
        const allChars = document.querySelectorAll(".letter");
        return shownChars.length === allChars.length;
    }

    /**
     * Increases the value of missed property
     * Removes life from the scoreboard
     * checks if the player has remaining lives and ends the game if player is out
     */
    removeLife() {
        this.missed++;
        const tries = document.querySelectorAll(".tries");
        const lostHeart = document.createElement("LI");
        lostHeart.classList.add("tries");
        lostHeart.innerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" width="36" height="36">`;
        tries[0].parentNode.appendChild(lostHeart);
        tries[0].remove();
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
     * Displays game over message
     *
     * @param {boolean} gameWon - weather or not the user won the game
     */
    gameOver(gameWon) {
        const overlayDiv = document.querySelector("#overlay");
        const gameOverMessage = document.getElementById('game-over-message');
        const resetButton = document.getElementById('btn__reset');

        if (gameWon) {
            overlayDiv.style.display = "flex";
            gameOverMessage.textContent = "☺ Great job! You win!"
            resetButton.textContent = 'Play Again';
        } else {
            overlayDiv.style.display = "flex";
            gameOverMessage.textContent = "☹ Sorry, better luck next time!"
            resetButton.textContent = 'Try Again';
        }
    }

    /**
     * resets game for a fresh start
     */
    resetGame() {
        const gameOverMessage = document.getElementById('game-over-message');
        gameOverMessage.textContent = "";

        this.resetPhrase();
        this.resetKeyboard();
        this.resetTries();
    }

    /**
     * Clears phrase board and remmoves letters
     */
    resetPhrase() {
        const phraseDiv = document.querySelector("#phrase");
        const chars = phraseDiv.querySelector("ul");
        while (chars.firstChild) {
            chars.removeChild(chars.firstChild);
        }
    }

    /**
     * Clears on screen keyboard styling from previous game
     */
    resetKeyboard() {
        const keyboardButtons = document.querySelectorAll('.key');
        keyboardButtons.forEach(btn => {
            btn.disabled = false;
            btn.classList.remove("chosen");
            btn.classList.remove("wrong");
        });

    }

    /**
     * Reset the hearts
     */
    resetTries() {
        this.missed = 0;
        const scoreboardDiv = document.querySelector("#scoreboard");
        const tries = scoreboardDiv.querySelector("ol");
        while (tries.firstChild) {
            tries.removeChild(tries.firstChild);
        }

        for (let i = 0; i < 5; i++) {
            const liveHeart = document.createElement("LI");
            liveHeart.classList.add("tries");
            liveHeart.innerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" width="36" height="36">`;
            tries.appendChild(liveHeart);
        }
    }
}