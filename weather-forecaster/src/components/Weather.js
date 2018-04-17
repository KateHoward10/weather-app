import React, { Component } from 'react';
import Input from './Input';
import Info from './Info';

class Weather extends Component {

	render() {
		const {location} = this.props;
		return (
			<div>
				<Input location={location} submit={this.props.submit}/>
				{location !== "" ? <Info location={location}/> : null}
			</div>
		);
	}
}

export default Weather;
