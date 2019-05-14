import React, { Component } from 'react';
import moment from "moment";
import Highcharts from 'highcharts';

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
  		  	text: `${moment(dataSet[0].dt_txt).format("Do MMM")} - ${moment(dataSet[7].dt_txt).format("Do MMM")}`,
  		  },
	      xAxis: {
	        categories: dataSet.map(item => moment(item.dt_txt).format("HH:mm"))
	      },
	      yAxis: {
	        title: {
	          text: '°C',
	        },
	      },
	      chart: {
	        type: 'column',
	      },
	      series: [
	        {
	          name: 'Min',
	          data: dataSet.map(item => item.main.temp_min-273.15),
	        },
	        {
	          name: 'Avg',
	          data: dataSet.map(item => item.main.temp-273.15),
	        },
	        {
	          name: 'Max',
	          data: dataSet.map(item => item.main.temp_max-273.15),
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