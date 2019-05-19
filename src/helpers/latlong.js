export const formatCoordinates = coord => {
	const { lat, lon } = coord;
	return `${lat >= 0 ? `${lat}°N` : `${Math.abs(lat)}°S`}, ${lon >= 0 ? `${lon}°E` : `${Math.abs(lon)}°W`}`;
}

