import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessDisplay from "../GuessDisplay/GuessDisplay";
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info('answer:', answer);

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    function handleNewGuess(newGuess) {
        const letters = checkGuess(newGuess, answer);
        const newGuesses = [...guesses, {id: crypto.randomUUID(), word: newGuess, letters}];
        setGuesses(newGuesses);
    }
    return <><GuessDisplay guesses={guesses} /><GuessInput onGuess={handleNewGuess} /></>;
}

export default Game;
