
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

export const setData = data => {
	return {
		type: "setData",
		data: data,
	}
}