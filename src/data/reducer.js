const initialState = {
	location: '',
	weather: {},
	forecast: {}
};

const reducer = (state, action) => {
	switch (action.type) {
		case 'submit':
			return { ...state, location: action.search };
		case 'setInfo':
			return { ...state, weather: action.info };
		case 'setData':
			return { ...state, forecast: action.data };
		default:
			return initialState;
	}
};

export default reducer;
