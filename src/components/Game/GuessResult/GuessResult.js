import React from 'react';

function GuessResult({ guesses }) {
	return (
		<div className="guess-results">
			{guesses.map((guess) => (
				<p className="guess" key={guess.id}>
					{guess.text}
				</p>
			))}
		</div>
	);
}

export default GuessResult;
