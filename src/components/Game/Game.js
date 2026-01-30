import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessDisplay from "../GuessDisplay/GuessDisplay";
import GameResult from "../GameResult/GameResult";
import { checkGuess } from '../../game-helpers';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info('answer:', answer);

function Game() {
    const [guesses, setGuesses] = React.useState([]);
    const [gameIsOver, setGameIsOver] = React.useState(false);
    const [gameIsWon, setGameIsWon] = React.useState(false);
    
    function handleNewGuess(newGuess) {
        const letters = checkGuess(newGuess, answer);
        const newGuesses = [...guesses, {id: crypto.randomUUID(), word: newGuess, letters}];
        setGuesses(newGuesses);

        if (newGuess === answer) {
            setGameIsOver(true);
            setGameIsWon(true);
        } else if (newGuesses.length >= 6) {
            setGameIsOver(true);
        }
    }
    return <>
        <GuessDisplay guesses={guesses} />
        <GuessInput onGuess={handleNewGuess} gameIsOver={gameIsOver} />
        {gameIsOver && <GameResult answer={answer} gameIsWon={gameIsWon} guessCount={guesses.length} />}
    </>;
}

export default Game;
