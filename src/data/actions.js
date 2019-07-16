export const submit = search => {
	return {
		type: 'submit',
		search
	};
};

export const setInfo = info => {
	return {
		type: 'setInfo',
		info
	};
};

export const setData = data => {
	return {
		type: 'setData',
		data
	};
};
