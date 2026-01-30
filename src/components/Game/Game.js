import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from "../GuessInput/GuessInput";
import GuessDisplay from "../GuessDisplay/GuessDisplay";
import GameResult from "../GameResult/GameResult";
import { checkGuess } from '../../game-helpers';

function Game() {
    const [answer, setAnswer] = React.useState(sample(WORDS));
    const [guesses, setGuesses] = React.useState([]);
    const [gameIsOver, setGameIsOver] = React.useState(false);
    const [gameIsWon, setGameIsWon] = React.useState(false);

    console.info('answer:', answer);
    
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

    function resetGame() {
        setAnswer(sample(WORDS));
        setGuesses([]);
        setGameIsOver(false);
        setGameIsWon(false);
    }

    return <>
        <GuessDisplay guesses={guesses} />
        <GuessInput onGuess={handleNewGuess} gameIsOver={gameIsOver} />
        {gameIsOver && <GameResult answer={answer} gameIsWon={gameIsWon} guessCount={guesses.length} reset={resetGame} />}
    </>;
}

export default Game;
