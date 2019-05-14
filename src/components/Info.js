import React, { Component } from 'react';
import moment from "moment";
import { toCelsius } from "../helpers/temperature";
import { toIcon } from "../helpers/icon";

class Info extends Component {
	render() {
		const {location, weather} = this.props;
		const sunset = new Date(weather.sys.sunset * 1000);

	    return (
      		<div className="container">
      			<h3>{location.toUpperCase()}</h3>
      			<div className="row">
					<div className="col-4"><p><b>Current temp</b></p><p>{toCelsius(weather.main.temp)}<sup>o</sup>C</p></div>
          			<div className="col-4"><p><b>Current weather</b></p><p>{weather.weather[0].description} {toIcon(weather.weather[0].main)}</p></div>
          			<div className="col-4"><p><b>Sunset</b></p><p>{moment(sunset).format("HH:mm")} - {moment(sunset).fromNow()}</p></div>
				</div>
			</div>
	    )
	}
}

export default Info;
