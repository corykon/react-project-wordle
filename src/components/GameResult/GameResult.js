import React from 'react';

function GameResult({answer, gameIsWon, guessCount, reset}) {
    if (gameIsWon) {
        return <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                {' '}<strong>{guessCount} guess{guessCount !== 1 ? 'es' : ''}</strong>.
            </p>
            <button className="play-again-button" onClick={reset}>Play again</button>
        </div>;
    } else {
        return <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
            <button className="play-again-button" onClick={reset}>Play again</button>
        </div>;
    }
  
}

export default GameResult;
