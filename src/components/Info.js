import React from 'react';
import { formatCoordinates } from '../helpers/latlong';
import { toCelsius } from '../helpers/temperature';
import { toIcon, toWindIcon } from '../helpers/icon';
import { toMilesPerHour } from '../helpers/wind';
import SunTracker from './SunTracker';

const Info = ({ weather }) => (
	<div className="container">
		<div className="location-details">
			<h1>
				{weather.name.toUpperCase()}, {weather.sys.country}
			</h1>
			<span>{formatCoordinates(weather.coord)}</span>
			<SunTracker sunrise={weather.sys.sunrise} sunset={weather.sys.sunset} />
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
					{weather.weather[0].description} {toIcon(weather.weather[0].main, weather.sys.pod)}
				</p>
			</div>
			<div>
				<p>
					<b>Current wind</b>
				</p>
				<p>
					{toWindIcon(weather.wind.deg)} {toMilesPerHour(weather.wind.speed)}
				</p>
			</div>
		</div>
	</div>
);

export default Info;
