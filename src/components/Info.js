import React from 'react';
import { formatCoordinates } from '../helpers/latlong';
import { toCelsius } from '../helpers/temperature';
import { toIcon } from '../helpers/icon';
import Map from './Map';
import SunTracker from './SunTracker';

const Info = ({ weather }) => (
	<div className="container">
		<div className="location-overview">
			<Map coords={weather.coord} />
			<div className="location-details">
				<h3>
					{weather.name.toUpperCase()}, {weather.sys.country}
				</h3>
				<p>{formatCoordinates(weather.coord)}</p>
				<SunTracker sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} />
			</div>
		</div>
		<div className="weather-overview">
			<div>
				<p>
					<b>Current temp</b>
				</p>
				<p>{toCelsius(weather.main.temp)}°C</p>
			</div>
			<div>
				<p>
					<b>Current weather</b>
				</p>
				<p>
					{weather.weather[0].description} {toIcon(weather.weather[0].main)}
				</p>
			</div>
		</div>
	</div>
);

export default Info;
