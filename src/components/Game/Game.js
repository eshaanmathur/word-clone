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
	const [gameStatus, setGameStatus] = React.useState('running');

	const addToGuesses = (guessText) => {
		const newGuess = {
			text: guessText,
			id: guesses.length,
			results: checkGuess(guessText, answer),
		};
		const updatedGuesses = [...guesses, newGuess];
		setGuesses(updatedGuesses);
		if (guessText.toUpperCase() === answer) {
			setGameStatus('won');
		} else if (guesses.length >= NUM_OF_GUESSES_ALLOWED - 1) {
			setGameStatus('lost');
		}
	};

	return (
		<>
			<GuessResult guesses={guesses} />
			<GuessInput addToGuesses={addToGuesses} isGameOver={gameStatus !== 'running'} guesses={guesses} />
			{gameStatus !== 'running' && (
				<GameResultBanner answer={answer} isWinner={gameStatus === 'won'} numberOfGuesses={guesses.length} />
			)}
		</>
	);
}

export default Game;
