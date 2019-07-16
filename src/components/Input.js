import React, { useState } from 'react';

function Input(props) {
	const [search, setSearch] = useState('');
	const { submit, display, chart } = props;

	function onSubmit(e) {
		e.preventDefault();
		submit(search);
		display(search);
		chart(search);
	}

	return (
		<form>
			<input type="text" onChange={e => setSearch(e.target.value)} />
			<button type="submit" onClick={onSubmit}>
				Submit
			</button>
		</form>
	);
}

export default Input;
