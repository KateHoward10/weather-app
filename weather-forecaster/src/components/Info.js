import React, { Component } from 'react';
import axios from "axios";
import moment from 'moment';

class Info extends Component {
  state = {
    id: "",
    weather: [],
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
	      	const weather = response.data.consolidated_weather[0];
	      	const sunset = response.data.sun_set;
	      	this.setState({
	      		weather: weather,
	      		sunset: sunset
	      	});
	    })
    })  
  }

  render() {
  	const {weather, sunset} = this.state;
  	const {location} = this.props;
    return (
      	<div>
			<p>Current temperature in {location}: {weather.the_temp}</p>
			<p>Current weather: {weather.weather_state_name}</p>
			<p>Sundown: {moment(sunset).fromNow()}</p>
		</div>
    )
  }
}

export default Info;
