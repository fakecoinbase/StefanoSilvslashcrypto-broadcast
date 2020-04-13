import React, { Component } from 'react';
import Chart from 'react-apexcharts';

class ApexChart extends Component {
	constructor(props) {
		super(props);

		this.state = {
			options: {
				chart: {
					id: 'basic-bar'
				},
				stroke: {
					curve: 'smooth'
				},
				xaxis: {
					categories: [1992, 1993, 1994, 1995, 1996, 1997, 1998]
				}
			},
			series: [
				{
					name: 'series-1',
					data: [40, 45, 50, 49, 60, 70, 91]
				}
			]
		};
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
