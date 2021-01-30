/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
     * displays phrase on the page
     */
    addPhraseToDisplay() {
        const phraseDiv = document.querySelector("#phrase");
        const ul = phraseDiv.querySelector("ul");
        for (let i = 0; i < this.phrase.length; i++) {
            const li = document.createElement("li");
            li.textContent = this.phrase[i];
            if (this.phrase[i] !==' ') {
                li.className = 'letter';
            } else {
                li.className = 'space';
            }
            ul.appendChild(li);
        }
    }

    /**
     * Checks if the char is in the phrase
     *
     * @param (string) char - Letter to check
     * @return (string) char - returns the matched char
     */
    checkLetter(char) {
        if (this.phrase.includes(char)) {
            return char;
        }
        return null;
    }

    /**
     * Reveals the char in the phrase after a success match
     *
     * @param (string) char - Letter to check
     */
    showMatchedLetter(char) {
        const letters = document.getElementsByClassName('letter');
        for (let i = 0; i < letters.length; i++) {
            if (char === letters[i].textContent) {
                letters[i].classList.add("show");
            }
        }
    }
}