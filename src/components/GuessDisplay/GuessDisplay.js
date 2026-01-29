import React from 'react';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { range } from "../../utils";

function GuessDisplay({guesses}) {
    function getDescForLetterStatus(status) {
        switch (status) {
            case 'correct':
                return 'Nailed it.';
            case 'misplaced':
                return 'Right letter, wrong spot.';
            case 'incorrect':
                return 'Not in the word.';
            default:
                return '';
        }
    }
    return <div className="guess-results">
        {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => {
            const guess = guesses[index];
            return <p className="guess" key={index}>
                {range(0, 5).map((i) => {
                    const letter = guess?.letters[i];
                    const helpText = letter ? getDescForLetterStatus(letter.status) : '';
                    return <span key={i} title={helpText} className={`cell ${letter?.status}`}>{letter?.letter || ''}</span>;
                })}
            </p>
        })}
    </div>;
}

export default GuessDisplay;
