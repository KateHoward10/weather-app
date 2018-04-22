
export const submit = search => {
    return {
        type: "submit",
        search: search,
    };
};

export const setInfo = info => {
	return {
		type: "setInfo",
		info: info,
	}
}