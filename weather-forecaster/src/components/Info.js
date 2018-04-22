import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment';
import Chart from './Chart';

class Info extends Component {
	state = {
	    weather: [],
	    today: [],
	    sunset: "",
	    message: "",
	}

	componentDidMount() {
		const {location} = this.props;
    	axios.get(`http://interview.toumetisanalytics.com/location/${location}`)
  		.then(response => {
      		if (response.data[0] !== undefined) {
      		const id = response.data[0].woeid;
        	axios.get(`http://interview.toumetisanalytics.com/weather/${id}`)
	      		.then(response => {
		      		const weather = response.data.consolidated_weather;
		      		const today = response.data.consolidated_weather[0];
		      		const sunset = response.data.sun_set;
		      		this.setState({
		      			weather: weather,
		      			today: today,
		      			sunset: sunset
		      		})
	    		})
	    	} else {
	    		this.setState({
	    			message: "Sorry, that location is not on the database. Please search again."
	    		})
	    	}
		})
  	}

	render() {
	  	const {weather, today, sunset, message} = this.state;
	  	const {location} = this.props;
    	const days = weather.map(day => moment(day.applicable_date).format('ddd'));
    	const max = weather.map(day => Math.round(day.max_temp));
    	console.log(days, max);
	    const options = {
	      title: {
	        text: 'Six Day Forecast',
	      },
	      xAxis: {
	        categories: weather.map(day => day.applicable_date),
	      },
	      yAxis: {
	        title: {
	          text: 'Values',
	        },
	      },
	      chart: {
	        type: 'column',
	      },
	      series: [
	        {
	          name: 'Min Temp',
	          data: [14, 11, 9, 11, 8, 7],
	        },
	        {
	          name: 'Avg Temp',
	          data: [25, 22, 15, 16, 16, 13],
	        },
	        {
	          name: 'Max Temp',
	          data: weather.map((day, index) => Math.round(day.max_temp)),
	        },
	      ],
	    };

	    return (
	    	<div>
	    		{message ? <p>{message}</p> :
		      		<div className="container">
		      			<h3>{location.toUpperCase()}</h3>
		      			<div className="row">
							<div className="col-4"><p><b>Current temp</b></p><p>{Math.round(today.the_temp)}<sup>o</sup>C</p></div>
							<div className="col-4"><p><b>Current weather</b></p><p>{today.weather_state_name}</p></div>
							<div className="col-4"><p><b>Sunset</b></p><p>{moment(sunset).fromNow()}</p></div>
						</div>
						{weather.map((day, index) => 
						<p key={index}>{moment(day.applicable_date).format('dddd')}: min {Math.round(day.min_temp)}<sup>o</sup>C, max {Math.round(day.max_temp)}<sup>o</sup>C, ave {Math.round(day.the_temp)}<sup>o</sup>C</p>
						)}
						<Chart options={options} />
					</div>
				}
			</div>
	    )
	}
}

export default Info;
