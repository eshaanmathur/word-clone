import { range } from '../../utils';

function Guess({ guess }) {
	const letters = guess.split('').map((letter, idex) => {
		return { id: idex, value: letter };
	});

	const emptyLetters = guess === '' ? range(5).map((number) => ({ id: number, value: '' })) : [];

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
