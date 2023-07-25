import React from 'react';

function GuessResult({ guesses }) {
	return (
		<div class="guess-results">
			<p class="guess">
				<span class="cell">F</span>
				<span class="cell">I</span>
				<span class="cell">R</span>
				<span class="cell">S</span>
				<span class="cell">T</span>
			</p>
			<p class="guess">
				<span class="cell">G</span>
				<span class="cell">U</span>
				<span class="cell">E</span>
				<span class="cell">S</span>
				<span class="cell">S</span>
			</p>
			<p class="guess">
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
			</p>
			<p class="guess">
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
			</p>
			<p class="guess">
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
				<span class="cell"></span>
			</p>
		</div>
	);
}

export default GuessResult;
