export const toIcon = description => {
	let icon = "";
	switch(description) {
		case "Clear":
			icon = "☀️";
			break;
		case "Clouds":
			icon = "☁️";
			break;
		case "Drizzle":
			icon = "🌧️";
			break;
		case "Rain":
			icon = "☂️";
			break;
		case "Thunderstorm":
			icon = "⚡";
			break;
		case "Snow":
			icon = "❄️";
			break;
		case "Mist":
		case "Smoke":
		case "Haze":
		case "Dust":
		case "Fog":
		case "Sand":
		case "Ash":
		case "Squall":
		case "Tornado":
			icon = "🌫️";
			break;
		default:
			break;
	}
	return icon;
}