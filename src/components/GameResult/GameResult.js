import React from 'react';

function GameResult({answer, gameIsWon, guessCount}) {
    if (gameIsWon) {
        return <div className="happy banner">
            <p>
                <strong>Congratulations!</strong> Got it in
                {' '}<strong>{guessCount} guess{guessCount !== 1 ? 'es' : ''}</strong>.
            </p>
        </div>;
    } else {
        return <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>;
    }
  
}

export default GameResult;
