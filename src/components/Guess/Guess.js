import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";

function Guess({ word, answser }) {
    const results = checkGuess(word, answser);

    return (
        <p className="guess">
            {range(0, 5).map((index) => (
                <span
                    className={`${results !== null ? 'cell ' + results[index].status : 'cell'}`}
                    key={index}>{word !== null ? word[index] : ''}
                </span>
            ))}
        </p>
    );
}

export default Guess;