import React, { Component } from 'react';
import { formatCoordinates } from "../helpers/latlong";
import { toCelsius } from "../helpers/temperature";
import { toIcon } from "../helpers/icon";
import { getTime } from "../helpers/date";
import Map from './Map';

class Info extends Component {
	render() {
		const {location, weather} = this.props;

	    return (
      		<div className="container">
      			<div className="location-overview">
	      			<Map coords={weather.coord} />
      				<div className="location-details">
		      			<h3>{location.toUpperCase()}, {weather.sys.country}</h3>
		      			<p>{formatCoordinates(weather.coord)}</p>
		      			<p>Sunrise: {getTime(weather.sys.sunrise)}</p>
		      			<p>Sunset: {getTime(weather.sys.sunset)}</p>
	    			</div>
	      		</div>
      			<div className="weather-overview">
					<div><p><b>Current temp</b></p><p>{toCelsius(weather.main.temp)}°C</p></div>
          			<div><p><b>Current weather</b></p><p>{weather.weather[0].description} {toIcon(weather.weather[0].main)}</p></div>
				</div>
			</div>
	    )
	}
}

export default Info;
