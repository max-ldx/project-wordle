import React, { useState } from "react";

function GuessInput() {
    const [value, setValue] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        if (value.length !== 5) return;
        console.log(value.toUpperCase());
        setValue('');
    };

    return (
        <form className="guess-input-wrapper" onSubmit={(event) => submitHandler(event)}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                name="guess-input"
                type="text"
                minLength="5"
                maxLength="5"
                value={value}
                onChange={(event) => setValue(event.target.value)}>
            </input>
        </form>
    );
}

export default GuessInput;