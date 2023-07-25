import React from 'react';
import Guess from '../Guess';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';

function GuessResult({ guesses }) {
	const guessStartIndex = guesses.length > 6 ? guesses.length - NUM_OF_GUESSES_ALLOWED : 0;
	const lastSixGuesses = guesses.slice(guessStartIndex);
	const emptyGuesses = range(NUM_OF_GUESSES_ALLOWED - lastSixGuesses.length).map(() => ({
		id: Math.random(),
		text: '',
	}));

	return (
		<div className="guess-results">
			{lastSixGuesses.map((item) => (
				<Guess key={item.id} guess={item.text} />
			))}
			{emptyGuesses.map((item) => (
				<Guess key={item.id} guess={item.text} />
			))}
		</div>
	);
}

export default GuessResult;
