import React from 'react';
import {
	WiDaySunny,
	WiNightClear,
	WiCloudy,
	WiShowers,
	WiRain,
	WiThunderstorm,
	WiSnow,
	WiFog,
	WiWindDeg
} from 'react-icons/wi';

export const toIcon = (description, time) => {
	switch (description) {
		case 'Clear':
			return time === 'n' ? <WiNightClear /> : <WiDaySunny />;
		case 'Clouds':
			return <WiCloudy />;
		case 'Drizzle':
			return <WiShowers />;
		case 'Rain':
			return <WiRain />;
		case 'Thunderstorm':
			return <WiThunderstorm />;
		case 'Snow':
			return <WiSnow />;
		case 'Mist':
		case 'Smoke':
		case 'Haze':
		case 'Dust':
		case 'Fog':
		case 'Sand':
		case 'Ash':
		case 'Squall':
		case 'Tornado':
			return <WiFog />;
		default:
			return null;
	}
};

export const toWindIcon = deg => {
	return <WiWindDeg style={{ transform: `rotate(${deg - 180}deg)` }} />;
};
