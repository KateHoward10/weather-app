import React, { Component } from 'react';
import Input from './Input';
import Info from './Info';

class Weather extends Component {

	render() {
		const {location, weather, submit, display} = this.props;
		return (
			<div>
				<Input location={location} submit={submit} display={display}/>
				{weather.weather ? <Info location={location} weather={weather} /> : null}
			</div>
		);
	}
}

export default Weather;
