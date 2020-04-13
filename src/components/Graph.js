import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ApexChart extends Component {
	state = {
		options: {
			chart: {
				id: 'basic-bar'
			},
			stroke: {
				curve: 'smooth'
			},
			xaxis: {
				categories: []
			}
		},
		series: [
			{
				name: 'series-1',
				data: []
			}
		]
	};

	componentWillReceiveProps(props) {
		let series = [{}];
		series[0].data = props.rates;
		let xaxis = {};
		xaxis.categories = props.dates.map(date => Number(date.substr(0, 2)));
		console.log(xaxis);
		this.setState({ series });
		this.setState({ xaxis });
	}

	render() {
		return (
			<div className="mainNews">
				<div>
					<h3>Bitcoin</h3>
					<h4>Price</h4>
					<h5>Variation</h5>
				</div>
				<div className="graph">
					<div className="row">
						<div className="mixed-chart">
							<Chart
								options={this.state.options}
								series={this.state.series}
								type="area"
								width="500"
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ApexChart;
