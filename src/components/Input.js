import React, { useState } from 'react';

function Input(props) {
	const [search, setSearch] = useState('');
	const { submit, display, chart } = props;

	function onSubmit(e) {
		e.preventDefault();
		const params = `q=${search}`;
		submit(params);
		display(params);
		chart(params);
	}

	function getLocation(e) {
		e.preventDefault();
		const geolocation = navigator.geolocation;

		if (geolocation) {
			geolocation.getCurrentPosition(position => showPosition(position), error => alert(error.message), {
				enableHighAccuracy: true,
				timeout: 20000,
				maximumAge: 1000
			});
		}
	}

	function showPosition(position) {
		const params = `lat=${position.coords.latitude}&lon=${position.coords.longitude}`;
		submit(params);
		display(params);
		chart(params);
	}

	return (
		<form>
			<input type="text" value={search} onChange={e => setSearch(e.target.value)} />
			<button type="submit" onClick={onSubmit}>
				Submit
			</button>
			<p>
				or, <button onClick={getLocation}>get current location</button>
			</p>
		</form>
	);
}

export default Input;
