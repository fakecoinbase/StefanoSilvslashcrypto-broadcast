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

			labels: [],
			grid: {
				padding: {
					right: 30,
					left: 30
				}
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
		let labels = [];
		labels = props.dates;
		this.setState({ series });
		this.setState({ options: { labels } });
	}

	assignBackgroundColor() {
		let variation =
			((this.state.series[0].data[this.state.series[0].data.length - 1] -
				this.state.series[0].data[this.state.series[0].data.length - 2]) /
				this.state.series[0].data[this.state.series[0].data.length - 2]) *
			100;
		if (variation > 0) {
			return 'green';
		} else if (variation < 0) {
			return 'red';
		}
	}

	render() {
		return (
			<div className="mainNews">
				<div className="graph">
					<div className="row">
						<div className="mixed-chart">
							<Chart
								options={this.state.options}
								series={this.state.series}
								type="area"
							/>
						</div>
					</div>
				</div>
				<div className="crypto-status">
					<h2>Bitcoin</h2> <small>BTC</small>
					<small>PRICE</small>
					<h3>
						{this.state.series[0].data[this.state.series[0].data.length - 1]}€
					</h3>
					<small className="h24change">24 HOUR % CHANGE</small>
					<h4
						className={
							this.assignBackgroundColor() == 'green'
								? 'green'
								: this.assignBackgroundColor() == 'red'
								? 'red'
								: null
						}
					>
						{(
							((this.state.series[0].data[
								this.state.series[0].data.length - 1
							] -
								this.state.series[0].data[
									this.state.series[0].data.length - 2
								]) /
								this.state.series[0].data[
									this.state.series[0].data.length - 2
								]) *
							100
						).toFixed(2)}{' '}
						%
					</h4>
				</div>
			</div>
		);
	}
}

export default ApexChart;
