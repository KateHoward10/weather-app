import React from 'react';
import Input from './Input';
import Info from './Info';
import Chart from './Chart';

const Weather = ({ location, weather, forecast, submit, display, chart }) => (
	<div>
		<Input location={location} submit={submit} display={display} chart={chart} />
		{weather.weather && <Info location={location} weather={weather} />}
		{forecast.list && <Chart location={location} forecast={forecast} />}
	</div>
);

export default Weather;
