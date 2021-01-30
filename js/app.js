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
        game.resetGame();
    }
    // initialize new game
    game = new Game();
    game.startGame();
})

// handle button clicks
keyboardButtons.addEventListener('click', evt => {
    if(event.target.tagName === 'BUTTON') {
        game.handleInteraction(evt);
    }
});

// handle keyboard clicks
document.addEventListener('keypress', evt => {
    // Only accept letters
    const filter = /[a-zA-Z]+/;
    if (filter.test(event.key) && event.key !== 'Enter') {
        // add pressed keys to a list and prevent reuse of that key
        keys.push(event.key);
        const pressedKeys = keys.slice(0, keys.length - 1);
        if (pressedKeys.indexOf(event.key) > -1) {
            event.preventDefault();
            return false;
        } else {
            game.handleInteraction(event);
        }
    }
});