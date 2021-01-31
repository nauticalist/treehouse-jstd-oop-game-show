/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// define an empty game variable
let game;

// assign ui elements that user interacts to variables
const resetButton = document.querySelector("#btn__reset");
const keyboardButtons = document.querySelector("#qwerty");

let keys = [];

// starts a new game
resetButton.addEventListener("click", () => {
    // if restarting a game reset board first
    if (game) {
        let keys = [];
        game.resetGame();
    }
    // initialize new game
    game = new Game();
    game.startGame();
})

// handle button clicks
keyboardButtons.addEventListener('click', evt => {
    if(evt.target.tagName === 'BUTTON') {
        keys.push(evt.target.textContent);
        const pressedKeys = keys.slice(0, keys.length - 1);
        if (pressedKeys.indexOf(evt.target.textContent) > -1) {
            evt.preventDefault();
            return false;
        } else {
            game.handleInteraction(evt);
        }
    }
});

// handle keyboard clicks
document.addEventListener('keypress', evt => {
    // Only accept letters
    const filter = /[a-zA-Z]+/;
    if (filter.test(evt.key) && evt.key !== 'Enter') {
        // add pressed keys to a list and prevent reuse of that key
        keys.push(evt.key);
        const pressedKeys = keys.slice(0, keys.length - 1);
        if (pressedKeys.indexOf(evt.key) > -1) {
            evt.preventDefault();
            return false;
        } else {
            game.handleInteraction(evt);
        }
    }
});