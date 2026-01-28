import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessDisplay({guesses}) {
    return <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
            const guess = guesses[index];
            const guessLetters = guess ? guess.word.split('') : [];
            return <p className="guess" key={index}>
                {range(0, 5).map((i) => {
                    const letter = guessLetters[i] || '';
                    return <span key={i} className="cell">{letter}</span>;
                })}
            </p>
        })}
    </div>;
}

export default GuessDisplay;
