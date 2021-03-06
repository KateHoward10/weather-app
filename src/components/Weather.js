import React from 'react';
import Input from './Input';
import Info from './Info';
import Chart from './Chart';

const Weather = ({ location, weather, forecast, submit, display, chart }) => (
	<div className="App">
		<p>To begin, search for a location.</p>
		<div>
			<Input location={location} submit={submit} display={display} chart={chart} />
			{weather.weather && <Info weather={weather} />}
			{forecast.list && <Chart location={location} forecast={forecast} />}
		</div>
	</div>
);

export default Weather;
