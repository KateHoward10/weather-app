import React, { Component } from 'react';
import moment from 'moment';
import Chart from './Chart';

class Info extends Component {
	render() {
		const {location, weather} = this.props;
  		const data = weather.consolidated_weather;
  		const options = {
	      title: {
	        text: 'Six Day Forecast',
	      },
	      xAxis: {
	        categories: data.map(day => moment(day.applicable_date).format('MMM Do')),
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
	          data: data.map(day => day.min_temp),
	        },
	        {
	          name: 'Avg Temp',
	          data: data.map(day => day.the_temp),
	        },
	        {
	          name: 'Max Temp',
	          data: data.map(day => day.max_temp),
	        },
	      ],
	    };

	    return (
      		<div className="container">
      			<h3>{location.toUpperCase()}</h3>
      			<div className="row">
					<div className="col-4"><p><b>Current temp</b></p><p>{Math.round(data[0].the_temp)}<sup>o</sup>C</p></div>
          			<div className="col-4"><p><b>Current weather</b></p><p>{data[0].weather_state_name}</p></div>
          			<div className="col-4"><p><b>Sunset</b></p><p>{moment(weather.sun_set).fromNow()}</p></div>
				</div>
				<Chart options={options} />
			</div>
	    )
	}
}

export default Info;
