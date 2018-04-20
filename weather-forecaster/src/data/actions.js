
export const submit = search => {
    return {
        type: "submit",
        search: search,
    };
};

export const setWeather = location => {
	return {
		type: "setWeather",
		location: location,
	}
}