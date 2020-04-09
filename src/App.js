import React from 'react';
import './App.css';
import axios from 'axios';

class App extends React.Component {
	state = {
		recentArticles: [
			{
				title: '',
				autor: '',
				publishedAt: '',
				description: ''
			}
		],
		oldArticles: [
			{
				title: '',
				autor: '',
				publishedAt: '',
				description: ''
			}
		]
	};

	convertDate = x => {
		const monthNames = [
			'January',
			'February',
			'March',
			'April',
			'May',
			'June',
			'July',
			'August',
			'September',
			'October',
			'November',
			'December'
		];
		let month =
			x.substr(5, 2)[0] == 0
				? monthNames[x.substr(6, 1)[0] - 1]
				: monthNames[x.substr(5, 2) - 1];
		let dateFormatted = `${x.substr(8, 2)} ${month} ${x.substr(0, 4)}`;

		return dateFormatted;
	};

	getPastDays = x => {
		let date = new Date();
		let pastDate = new Date(date.setDate(date.getDate() - x)).toISOString();
		return pastDate;
	};

	componentDidMount() {
		axios
			.get(
				`https://newsapi.org/v2/everything?qInTitle=(crypto OR bitcoin OR litecoin OR etherium OR ripple OR namecoin OR peercoin OR dogecoin OR gridecoin OR primecoin OR nxt OR auroracoin OR mazacoin OR monero OR nem OR potcoin OR titcoin OR stellar OR vertcoin OR teter OR zcash OR eos.io)&page=1&pageSize=5&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
			)
			.then(res => {
				this.setState({
					recentArticles: res.data.articles
				});
			});

		axios
			.get(
				`https://newsapi.org/v2/everything?from=${this.getPastDays(
					14
				)}&from=${this.getPastDays(
					7
				)}&qInTitle=(crypto OR bitcoin OR litecoin OR etherium OR ripple OR namecoin OR peercoin OR dogecoin OR gridecoin OR primecoin OR nxt OR auroracoin OR mazacoin OR monero OR nem OR potcoin OR titcoin OR stellar OR vertcoin OR teter OR zcash OR eos.io)&page=1&pageSize=6&language=en&sortBy=popularity&apiKey=${
					process.env.REACT_APP_API_KEY
				}`
			)
			.then(res => {
				this.setState({
					oldArticles: res.data.articles
				});
			});
		axios
			.get(
				`https://newsapi.org/v2/everything?from=${this.getPastDays(
					3
				)}&from=${this.getPastDays(
					0
				)}&qInTitle=(crypto OR bitcoin OR litecoin OR etherium OR ripple OR namecoin OR peercoin OR dogecoin OR gridecoin OR primecoin OR nxt OR auroracoin OR mazacoin OR monero OR nem OR potcoin OR titcoin OR stellar OR vertcoin OR teter OR zcash OR eos.io)&page=1&pageSize=6&language=en&sortBy=popularity&apiKey=${
					process.env.REACT_APP_API_KEY
				}`
			)
			.then(res => {
				console.log(res.data);
				this.setState({
					newArticles: res.data.articles
				});
			});
	}

	render() {
		return (
			<div className="App">
				<div className="topbar"></div>

				<div className="first-grid">
					<div className="mainNews"></div>
					<div className="secondaryNews"></div>
					<div className="secondaryNews"></div>
					<div className="secondaryNews"></div>
					<div className="secondaryNews"></div>
					<div className="secondaryNews"></div>
				</div>

				<div className="second-grid">
					<div>
						<h3>RECENT NEWS</h3>
						<div className="grid_recent">
							<div className="mainNews_recent">
								<div className="mainNews_recent_img"></div>
								<div className="mainNews_recent_content">
									<h3>{this.state.recentArticles[0].title}</h3>
									<small>
										by <strong>{this.state.recentArticles[0].author}</strong>,{' '}
										{this.convertDate(this.state.recentArticles[0].publishedAt)}
									</small>
									<p>{this.state.recentArticles[0].description}</p>
								</div>
							</div>
							<ul className="otherNews_recent">
								<li className="li_grid">
									<div className="otherNews_recent_image"></div>
									<div>
										<h4>Here it goes the title</h4>
										<small>
											by <strong>David Palmer</strong>, Jan 4th 2020
										</small>
									</div>
								</li>
								<li className="li_grid">
									<div className="otherNews_recent_image"></div>
									<div>
										<h4>Here it goes the title</h4>
										<small>
											by <strong>David Palmer</strong>, Jan 4th 2020
										</small>
									</div>
								</li>
								<li className="li_grid">
									<div className="otherNews_recent_image"></div>
									<div>
										<h4>Here it goes the title</h4>
										<small>
											by <strong>David Palmer</strong>, Jan 4th 2020
										</small>
									</div>
								</li>
								<li className="li_grid">
									<div className="otherNews_recent_image"></div>
									<div>
										<h4>Here it goes the title</h4>
										<small>
											by <strong>David Palmer</strong>, Jan 4th 2020
										</small>
									</div>
								</li>
							</ul>
						</div>
						<h3>CRYPTO MINING EVENTS</h3>
						<div className="grid_recent">
							<div className="mainNews_recent">
								<div className="mainNews_recent_img"></div>
								<div className="mainNews_recent_content">
									<h3>Title goes here</h3>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore.
									</p>
								</div>
							</div>
							<div className="mainNews_recent">
								<div className="mainNews_recent_img"></div>
								<div className="mainNews_recent_content">
									<h3>Title goes here</h3>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore.
									</p>
								</div>
							</div>
							<div className="mainNews_recent">
								<div className="mainNews_recent_img"></div>
								<div className="mainNews_recent_content">
									<h3>Title goes here</h3>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore.
									</p>
								</div>
							</div>
							<div className="mainNews_recent">
								<div className="mainNews_recent_img"></div>
								<div className="mainNews_recent_content">
									<h3>Title goes here</h3>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
									<p>
										Sed ut perspiciatis unde omnis iste natus error sit
										voluptatem accusantium doloremque laudantium, totam rem
										aperiam, eaque ipsa quae ab illo inventore.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="second_grid_third_column">
						<ul className="conversions">
							<li>1 BTC = $13.2232</li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
							<li></li>
						</ul>
						<h3>POPULAR NEWS</h3>
						<ul className="otherNews_recent">
							<li className="li_grid">
								<div className="otherNews_recent_image"></div>
								<div>
									<h4>Here it goes the title</h4>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
								</div>
							</li>
							<li className="li_grid">
								<div className="otherNews_recent_image"></div>
								<div>
									<h4>Here it goes the title</h4>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
								</div>
							</li>
							<li className="li_grid">
								<div className="otherNews_recent_image"></div>
								<div>
									<h4>Here it goes the title</h4>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
								</div>
							</li>
							<li className="li_grid">
								<div className="otherNews_recent_image"></div>
								<div>
									<h4>Here it goes the title</h4>
									<small>
										by <strong>David Palmer</strong>, Jan 4th 2020
									</small>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
