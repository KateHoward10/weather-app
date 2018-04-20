import axios from 'axios';

const api = 'http://interview.toumetisanalytics.com/weather/';

export default function fetchWeather() {
  return axios.get(`${woeid}/`);
}

export { state };
