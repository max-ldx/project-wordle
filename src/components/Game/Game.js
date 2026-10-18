import React, { useState } from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput/GuessInput";
import GuessResults from "../GuessResults/GuessResults";
import GameOverBanner from "../GameOverBanner/GameOverBanner";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setResults] = useState([]);

  const addResult = (result) => {
    setResults([...guesses, result]);
  }

  const getGameState = () => {
    console.log("log");
    if (guesses.includes(answer)) return "win";
    if (guesses.length === 6) return "lose";
    return "running";
  };

  const gameState = getGameState();
  const gameIsRunning = gameState === "running";

  return (
    <>
      <GuessResults guesses={guesses} answer={answer} />
      <GuessInput addResult={addResult} disabled={!gameIsRunning} />
      {!gameIsRunning &&
        <GameOverBanner
          gameState={gameState}
          guessesCount={guesses.length}
          answer={answer} />
      }
    </>
  );
}

export default Game;
