import React, { Component } from 'react';
import { getTime, isNightTime, getSunPosition } from "../helpers/date";

class Info extends Component {
	render() {
		const { sunrise, sunset } = this.props;

	    return (
			<div className="sun-details">
  				<span>Sunrise: {getTime(sunrise)}</span>
  				<div className="sun-tracker">
  					<span className="sun" role="img" aria-label="sunrise" style={{ left: getSunPosition(sunrise) }}>🌅</span>
  					<span className="sun" role="img" aria-label={isNightTime(sunset) ? "moon" : "sun"} style={{ left: getSunPosition("now") }}>{isNightTime(sunset) ? "🌙" : "☀️"}</span>
  					<span className="sun" role="img" aria-label="sunset" style={{ left: getSunPosition(sunset) }}>🌇</span>
  				</div>
  				<span>Sunset: {getTime(sunset)}</span>
  			</div>
	    )
	}
}

export default Info;
