
const submit = (state, {search}) => state.location = {location: search};

const reducer = (state, action) => {
	switch (action.type) {
		case "submit": return submit(state, action);
		default: return state;
	}
};

export default reducer;