import React from 'react';
import { WiDaySunny, WiCloudy, WiShowers, WiRain, WiThunderstorm, WiSnow, WiFog } from 'react-icons/wi';

export const toIcon = description => {
	switch (description) {
		case 'Clear':
			return <WiDaySunny />;
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
