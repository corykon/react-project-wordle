import React from 'react';

function GuessInput({onSetGuesses}) {
    const [guess, setGuess] = React.useState('');
    function handleSubmit(event) {
        event.preventDefault();
        console.log('Submitted guess:', guess);
        setGuess('');
        onSetGuesses(guess);
    }
    return <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess:</label>
        <input id="guess-input" type="text" value={guess} onChange={e => setGuess(e.target.value.toLocaleUpperCase().trim().slice(0, 5))} pattern="[A-Za-z]{5}" title="Five letter word" required />
    </form>;
}

export default GuessInput;
