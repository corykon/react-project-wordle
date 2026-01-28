import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessDisplay from "../GuessDisplay/GuessDisplay";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info('answer:', answer);

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    function handleSetGuesses(newGuess) {
        const newGuesses = [...guesses, {id: crypto.randomUUID(), word: newGuess}];
        setGuesses(newGuesses);
    }
    return <><GuessDisplay guesses={guesses} /><GuessInput onSetGuesses={handleSetGuesses} /></>;
}

export default Game;
