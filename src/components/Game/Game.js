import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import GuessInput from '../GuessInput';
import GuessResult from '../GuessResult';
import { checkGuess } from '../../game-helpers';
import GameResultBanner from '../GameResultBanner';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
	const [guesses, setGuesses] = React.useState([]);
	const [isGameOver, setIsGameOver] = React.useState(false);
	const [isWinner, setIsWinner] = React.useState(false);

	const addToGuesses = (guessText) => {
		const newGuess = {
			text: guessText,
			id: guesses.length,
			results: checkGuess(guessText, answer),
		};
		const updatedGuesses = [...guesses, newGuess];
		setGuesses(updatedGuesses);
	};

	React.useEffect(() => {
		if (guesses.length <= NUM_OF_GUESSES_ALLOWED) {
			const foundCorrectGuess = guesses
				.map((item) => item.results.every((i) => i.status === 'correct'))
				.find((item) => item);

			if (foundCorrectGuess) {
				setIsGameOver(true);
				setIsWinner(true);
			}
			return;
		}

		setIsGameOver(true);
	}, [guesses]);

	return (
		<>
			<GuessResult guesses={guesses} />
			<GuessInput addToGuesses={addToGuesses} isGameOver={isGameOver} />
			{isGameOver && <GameResultBanner answer={answer} isWinner={isWinner} />}
		</>
	);
}

export default Game;
