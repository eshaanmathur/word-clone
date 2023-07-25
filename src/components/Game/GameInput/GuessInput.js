import React from 'react';

function GuessInput() {
	const [guess, setGuess] = React.useState('');

	const onGuessChange = (event) => {
		setGuess(event.target.value.toUpperCase());
	};

	const onSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const data = Object.fromEntries(formData.entries());
		console.info(data);
		setGuess('');
	};

	return (
		<form className="guess-input-wrapper" onSubmit={onSubmit}>
			<label htmlFor="guess-input">Enter guess:</label>
			<input
				name="guess"
				id="guess-input"
				type="text"
				value={guess}
				onChange={onGuessChange}
				pattern={'^[A-Z a-z]{5}$'}
				title="Guess should only be 5 letter words"
			/>
		</form>
	);
}

export default GuessInput;
