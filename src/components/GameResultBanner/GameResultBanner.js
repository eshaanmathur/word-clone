import React from 'react';

function GameResultBanner({ answer, isWinner = false }) {
	if (isWinner) {
		return (
			<div className="happy banner">
				<p>
					<strong>Congratulations!</strong> Got it in
					<strong>3 guesses</strong>.
				</p>
			</div>
		);
	}

	return (
		<div className="sad banner">
			<p>
				Sorry, the correct answer is <strong>{answer}</strong>.
			</p>
		</div>
	);
}

export default GameResultBanner;
