import React, { Component } from 'react';
import Input from './Input';
import Info from './Info';
import Chart from './Chart';

class Weather extends Component {

	render() {
		const {location, weather, forecast, submit, display, chart} = this.props;

		return (
			<div>
				<Input location={location} submit={submit} display={display} chart={chart}/>
				{weather.weather && <Info location={location} weather={weather} />}
				{forecast.list && <Chart location={location} forecast={forecast} />}
			</div>
		);
	}
}

export default Weather;
