import React, { Component } from 'react';
import moment from "moment";
import Highcharts from 'highcharts';
import { toCelsius, toColour } from "../helpers/temperature";
import { getDateRange } from "../helpers/date";

class Chart extends Component {

	state = {
		day: 1,
	}

	componentDidMount() {
    	this.chart = new Highcharts['Chart'](
	    	this.chartEl,
	    	this.getOptions()
    	);
	}

	getOptions = () => {
		const { forecast } = this.props;
		const { day } = this.state;
		const dataSet = forecast.list.filter((item, index) => index > ((day-1)*8)-1 && index < day*8);
  		const options = {
  		  	title: {
  		  		text: getDateRange(dataSet),
  		  	},
	      	xAxis: {
	        	categories: dataSet.map(item => moment(item.dt_txt).format("HH:mm"))
	      	},
	      	yAxis: {
	        	title: {
	          		text: '°C',
	        	}
	      	},
	      	colors: dataSet.map(item => toColour(item.main.temp)),
	      	plotOptions: {
	      		column: {
	      			colorByPoint: true,
	      		}
	      	},
	      	chart: {
	        	type: 'column',
	      	},
        	legend: {
        		enabled: false
        	},
	      	series: [
	        	{
	        		name: 'Average Temperature',
	        	  	data: dataSet.map(item => toCelsius(item.main.temp)),
	        	},
	      	],
	    };
	    return options;
	}

	componentDidUpdate() {
		this.chart.update(this.getOptions())
	}

	componentWillUnmount() {
    	this.chart.destroy();
	}

	render() {
		const { day } = this.state;
    	return (
    		<div>
	    		<div ref={el => (this.chartEl = el)} />
	    		{day > 1 && <button onClick={() => this.setState({ day: day-1 })}>{`<`}</button>}
	    		{day < 5 && <button onClick={() => this.setState({ day: day+1 })}>></button>}
    		</div>
    	)
	}
}

export default Chart;