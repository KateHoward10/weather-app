import moment from "moment";

export const getDateRange = dataSet => {
	const firstDay = moment(dataSet[0].dt_txt).format("Do MMM");
	const lastDay = moment(dataSet[dataSet.length-1].dt_txt).format("Do MMM");
	return `${firstDay}${firstDay!==lastDay ? ` - ${lastDay}` : ``}`;
}

export const getTime = time => {
	const timeInSeconds = new Date(time * 1000);
	return moment(timeInSeconds).format("HH:mm");
}

export const isNightTime = (sunset) => {
	const set = new Date(sunset * 1000);
	const now = new Date();
	return now > set;
}

export const getSunPosition = (time) => {
	const timeSinceMidnight = time==="now" ? new Date().getHours() : new Date(time * 1000).getHours();
	const dayProportion = timeSinceMidnight / 24;
	return (dayProportion * 240) - 10;
}