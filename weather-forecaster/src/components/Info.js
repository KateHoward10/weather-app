import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment';
// var Highcharts = require('highcharts');

// // Load module after Highcharts is loaded
// require('highcharts/modules/exporting')(Highcharts);

class Info extends Component {
  state = {
    id: "",
    weather: [],
    today: [],
    sunset: "",
  }

  componentDidMount() {
	const {location} = this.props;
    axios.get(`http://interview.toumetisanalytics.com/location/${location}`)
      .then(response => {
      	const id = response.data[0].woeid;
        this.setState({ id: id });
        axios.get(`http://interview.toumetisanalytics.com/weather/${id}`)
	      .then(response => {
	      	const weather = response.data.consolidated_weather;
	      	const today = response.data.consolidated_weather[0];
	      	const sunset = response.data.sun_set;
	      	this.setState({
	      		weather: weather,
	      		today: today,
	      		sunset: sunset
	      	});
	    })
    })  
  }

  render() {
  	const {weather, today, sunset} = this.state;
  	const {location} = this.props;
  	console.log(weather);
    return (
    	<div>
	    	<h3>{location.toUpperCase()}</h3>
      		<div className="container">
      			<div className="row">
					<div className="col-4"><p><b>Current temperature</b></p><p>{Math.round(today.the_temp)}<sup>o</sup>C</p></div>
					<div className="col-4"><p><b>Current weather</b></p><p>{today.weather_state_name}</p></div>
					<div className="col-4"><p><b>Sundown</b></p><p>{moment(sunset).fromNow()}</p></div>
				</div>
				{weather.map((day, index) => 
				<p key={index}>{moment(day.applicable_date).format('dddd')}: min {Math.round(day.min_temp)}<sup>o</sup>C, max {Math.round(day.max_temp)}<sup>o</sup>C, ave {Math.round(day.the_temp)}<sup>o</sup>C</p>
				)}
			</div>
				
			<div id="container" className="chart">
				
			</div>
		</div>
    )
  }
}

export default Info;
