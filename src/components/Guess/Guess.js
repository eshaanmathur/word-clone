import { range } from '../../utils';

function Guess({ guess }) {
	const letters = guess
		? guess.results.map((item, index) => {
				return { id: index, value: item.letter, status: item.status };
		  })
		: [];

	const emptyLetters = guess === undefined ? range(5).map((number) => ({ id: number, value: '' })) : [];

	return (
		<p className="guess">
			{letters.map((letter) => (
				<span className={`cell ${letter.status}`} key={letter.id}>
					{letter.value}
				</span>
			))}
			{emptyLetters.map((item) => (
				<span className="cell" key={item.id}></span>
			))}
		</p>
	);
}

export default Guess;
