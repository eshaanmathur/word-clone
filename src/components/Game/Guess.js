import { range } from '../../utils';

function Guess({ guess }) {
	const letters = guess.split('').map((letter) => {
		return { id: Math.random(), value: letter };
	});

	const emptyLetters = guess === '' ? range(5).map(() => ({ id: Math.random(), value: '' })) : [];

	return (
		<p className="guess">
			{letters.map((letter) => (
				<span className="cell" key={letter.id}>
					{letter.value}
				</span>
			))}
			{emptyLetters.map((item) => (
				<span className="cell" key={item.id}>
					{item.value}
				</span>
			))}
		</p>
	);
}

export default Guess;
