import moment from "moment";

export const getDateRange = dataSet => {
	const firstDay = moment(dataSet[0].dt_txt).format("Do MMM");
	const lastDay = moment(dataSet[dataSet.length-1].dt_txt).format("Do MMM");
	return `${firstDay}${firstDay!==lastDay ? ` - ${lastDay}` : ``}`;
}

