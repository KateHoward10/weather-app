export const toCelsius = temp => {
	return Math.round(temp-273.15);
}

export const toColour = temp => {
	return `rgb(255, ${8/(temp-273.15)*255}, 0)`;
}