import React, { useState } from "react";

function GuessInput({ handleSubmitGuess, disabled }) {
    const [value, setValue] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        handleSubmitGuess(value);
        setValue('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                name="guess-input"
                type="text"
                required
                minLength={5}
                maxLength={5}
                pattern="[a-zA-Z]{5}"
                title="5 letter word"
                value={value}
                onChange={(event) => setValue(event.target.value.toUpperCase())}
                disabled={disabled}>
            </input>
        </form>
    );
}

export default GuessInput;