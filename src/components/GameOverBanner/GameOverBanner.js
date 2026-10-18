function GameOverBanner({ gameState, guessesCount, answer }) {
    if (gameState === "win") {
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in
                    <strong>{` ${guessesCount}`} guesses</strong>.
                </p>
            </div>
        );
    } else if (gameState === "lose") {
        return (<div class="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
        );
    }
}

export default GameOverBanner;