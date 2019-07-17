import axios from 'axios';

export default axios.create({
	baseURL: '//api.openweathermap.org/data/2.5',
	headers: {
		Accept: 'application/json'
	}
});
