import React from 'react';

const KEYBOARD_KEYS = [
	['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
	['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
	['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function InputKeyboard({ onKeypress, guesses }) {
	const allResults = Object.fromEntries(
		guesses
			.map((item) => item.results)
			.flat()
			.map((item) => [item.letter, item.status]),
	);

	return (
		<div className="keyboard-wrapper">
			{KEYBOARD_KEYS.map((row, index) => (
				<div className="keyboard-row" key={index}>
					{row.map((key) => (
						<button key={key} data-status={allResults[key] ?? ''} onClick={onKeypress(key.toUpperCase())}>
							{key}
						</button>
					))}
				</div>
			))}
		</div>
	);
}

export default InputKeyboard;
