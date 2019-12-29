import React, { useState } from 'react';
import moment from 'moment';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { toCelsius, toColour } from '../helpers/temperature';
import { getDateRange } from '../helpers/date';
import { toIcon, toWindIcon } from '../helpers/icon';
import { toMilesPerHour } from '../helpers/wind';

function Chart({ forecast }) {
	const [day, setDay] = useState(1);
	const dataSet = forecast.list.filter((item, index) => index > (day - 1) * 8 - 1 && index < day * 8);
	const times = dataSet.map(item => moment(item.dt_txt).format('HH:mm'));
	console.log(dataSet);

	const options = {
		title: {
			text: getDateRange(dataSet)
		},
		xAxis: {
			categories: times
		},
		yAxis: {
			title: {
				text: '°C'
			}
		},
		colors: dataSet.map(item => toColour(item.main.temp)),
		plotOptions: {
			column: {
				colorByPoint: true,
				dataLabels: {
					enabled: true
				}
			}
		},
		chart: {
			type: 'column'
		},
		legend: {
			enabled: false
		},
		series: [
			{
				name: 'Average Temperature',
				data: dataSet.map(item => toCelsius(item.main.temp))
			}
		]
	};

	return (
		<React.Fragment>
			<HighchartsReact highcharts={Highcharts} options={options} />
			<div className="weather-icons">
				{dataSet.map(item => (
					<div className="icon-container">
						{toIcon(item.weather[0].main)}
						{toWindIcon(item.wind.deg)}
						<span className="text-detail">{toMilesPerHour(item.wind.speed)}</span>
					</div>
				))}
			</div>
			{day > 1 && <button onClick={() => setDay(day - 1)}>{`<`}</button>}
			{day < 5 && <button onClick={() => setDay(day + 1)}>></button>}
		</React.Fragment>
	);
}

export default Chart;
