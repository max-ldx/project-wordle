import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Cell({ letter, status }) {
    const className = status ? `cell ${status}` : 'cell';

    return (
        <span className={className}>
            {letter}
        </span>
    );
}

function Guess({ value, answser }) {
    const result = checkGuess(value, answser);

    return (
        <p className="guess">
            {range(5).map((number) => (
                <Cell
                    key={number}
                    letter={result ? result[number].letter : undefined}
                    status={result ? result[number].status : undefined}
                />
            ))}
        </p>
    );
}

export default Guess;