import React, { Component } from 'react';
import Highcharts from 'highcharts';

class Chart extends Component {
	componentDidMount() {
		const { forecast } = this.props;
		const list = forecast.list;
  		const options = {
	      title: {
	        text: 'Five Day Forecast',
	      },
	      xAxis: {
	        categories: list.map(item => item.dt_txt),
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
	          data: list.map(item => item.main.temp_min-273.15),
	        },
	        {
	          name: 'Avg Temp',
	          data: list.map(item => item.main.temp-273.15),
	        },
	        {
	          name: 'Max Temp',
	          data: list.map(item => item.main.temp_max-273.15),
	        },
	      ],
	    };
    	this.chart = new Highcharts['Chart'](
	    	this.chartEl,
	    	options
    	);
	}

	componentWillUnmount() {
    	this.chart.destroy();
	}

	render() {
    	return <div ref={el => (this.chartEl = el)} />;
	}
}

export default Chart;