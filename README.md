# Treehouse FSJS Techdegree - Project 4 OOP Game Show

This is a browser-based, word guessing game: "Phrase Hunter." 

### Rules

- The player’s goal is to guess all the letters in a hidden, random phrase. At the beginning, the player only sees the number of letters and words in the phrase, represented by blank boxes on the screen.
- The player clicks an onscreen keyboard to guess letters in the phrase.
- The letter is disabled on the onscreen keyboard and a player can't select that letter again.
- If the selected letter is in the phrase at least once, the letter and its position in the phrase is highlighted on screen. All instances of the letter are made visible (so if there are 3 A's, all of the A's in the phrase appear at once).
- If the selected letter is not in the phrase, one of the player's hearts in the scoreboard is changed from a "live" heart to a "lost" heart.
- The player keeps choosing letters until they reveal all the letters in the phrase, or they make five incorrect guesses.

### /js/data.js
This file includes a list of phrases. You can add more phrases for future use.

### js/Phrase.js
Phrase class holds phrase property and has 3 methods. This class handles the creation of phrases.

### js/Game.js
Game class has methods for starting and ending the game, handling interactions, getting a random phrase, checking for a win, and removing a life from the scoreboard.

### js/app.js
app.js handles user interactions.

### Custom styles

- Added custom font
- Added gradiant background color
- Customized on-screen keyboard
- Customized button effects
