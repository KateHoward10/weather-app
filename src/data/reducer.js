
const submit = (state, {search}) => state.update("location", location => search);

const setInfo = (state, {info}) => state.update("weather", weather => info);

const setData = (state, {data}) => state.update("forecast", forecast => data);

const reducer = (state, action) => {
	switch (action.type) {
		case "submit": return submit(state, action);
		case "setInfo": return setInfo(state, action);
		case "setData": return setData(state, action);
		default: return state;
	}
};

export default reducer;