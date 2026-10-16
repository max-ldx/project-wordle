import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import Guess from "../Guess/Guess";

function GuessResults({ results }) {
    return (
        <div className="guess-results">
            {range(0, NUM_OF_GUESSES_ALLOWED).map((index) => (
                <Guess word={results.length > index ? results[index] : null} key={index} />
            ))}
        </div>
    );
}

export default GuessResults;
