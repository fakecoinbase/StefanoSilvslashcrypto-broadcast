import React from 'react';
import SmallNew from './components/SmallNew.js';
import BigNew from './components/BigNew.js';
import TopNew from './components/TopNew.js';
import ApexChart from './components/Graph.js';
import images from './images';
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
		],
		popularArticles: [
			{
				title: '',
				autor: '',
				publishedAt: '',
				description: ''
			}
		],
		pics: [],
		rates: {
			BTC: '',
			ETH: '',
			XRP: '',
			BCH: '',
			EOS: '',
			LTC: ''
		}
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
		let dateFormatted;
		if (x) {
			let month =
				x.substr(5, 2)[0] == 0
					? monthNames[x.substr(6, 1)[0] - 1]
					: monthNames[x.substr(5, 2) - 1];
			dateFormatted = `${x.substr(8, 2)} ${month} ${x.substr(0, 4)}`;
		}

		return dateFormatted;
	};

	getPastDays = x => {
		let date = new Date();
		let pastDate = new Date(date.setDate(date.getDate() - x)).toISOString();
		return pastDate;
	};

	pickRandomImage = (array, number) => {
		let result = [];
		for (let i = 0; i < number; i++) {
			let add = array[Math.floor(Math.random() * array.length)];
			result.push(add);
			array.splice(array.indexOf(add), 1);
		}
		return result;
	};

	componentDidMount() {
		console.log(ApexChart);
		this.setState({
			pics: this.pickRandomImage(images.mainImg, 5)
		});
		let randomImages =
			images.mainImg[Math.floor(Math.random() * images.mainImg.length)];

		axios
			.get(
				`https://newsapi.org/v2/everything?excludeDomains=comicbook.com,slashdot.org,bleacherreport.com,nyt.com,people.com,doctorofcredit.com&qInTitle=(crypto OR bitcoin OR litecoin OR etherium OR (ripple AND crypto) OR namecoin OR peercoin OR dogecoin OR gridecoin OR primecoin OR nxt OR auroracoin OR mazacoin OR monero OR (stellar AND crypto) OR nem OR potcoin OR titcoin OR vertcoin OR teter OR zcash OR eos.io)&page=1&pageSize=5&language=en&sortBy=publishedAt&apiKey=${process.env.REACT_APP_API_KEY}`
			)
			.then(res => {
				let recentArticles = res.data.articles;
				recentArticles.forEach(article => {
					article.title =
						article.title.length < 130
							? article.title
							: article.title.substr(0, 130).concat('...');
					article.urlToImage = article.urlToImage
						? article.urlToImage
						: this.pickRandomImage(images.randomImg, 1)[0];
				});
				this.setState({ recentArticles });
			});

		axios
			.get(
				`https://newsapi.org/v2/everything?excludeDomains=comicbook.com,slashdot.org,bleacherreport.com,nyt.com,people.com,doctorofcredit.com&from=${this.getPastDays(
					13
				)}&to=${this.getPastDays(
					6
				)}&qInTitle=(crypto OR bitcoin OR litecoin OR etherium OR (ripple AND crypto) OR namecoin OR peercoin OR dogecoin OR gridecoin OR primecoin OR nxt OR auroracoin OR mazacoin OR monero OR (stellar AND crypto) OR nem OR potcoin OR titcoin OR vertcoin OR teter OR zcash OR eos.io)&page=1&pageSize=6&language=en&sortBy=popularity&apiKey=${
					process.env.REACT_APP_API_KEY
				}`
			)
			.then(res => {
				let oldArticles = res.data.articles;
				let imgStorage = [];
				oldArticles.forEach(article => {
					article.title =
						article.title.length < 130
							? article.title
							: article.title.substr(0, 130).concat('...');
					article.urlToImage = article.urlToImage
						? article.urlToImage
						: this.pickRandomImage(images.randomImg, 1)[0];
					if (imgStorage.includes(article.urlToImage)) {
						article.urlToImage = this.pickRandomImage(
							images.randomImg,
							imgStorage.length + 1
						).find(img => !imgStorage.includes(img));
					} else {
						imgStorage.push(article.urlToImage);
					}
				});
				this.setState({ oldArticles });
			});

		axios
			.get(
				`https://newsapi.org/v2/everything?excludeDomains=comicbook.com,slashdot.org,bleacherreport.com,nyt.com,people.com,doctorofcredit.com&from=${this.getPastDays(
					3
				)}&from=${this.getPastDays(
					0
				)}&qInTitle=(crypto OR bitcoin OR litecoin OR etherium OR (ripple AND crypto) OR namecoin OR peercoin OR dogecoin OR gridecoin OR primecoin OR nxt OR auroracoin OR mazacoin OR monero OR (stellar AND crypto) OR nem OR potcoin OR titcoin OR vertcoin OR teter OR zcash OR eos.io)&page=1&pageSize=9&language=en&sortBy=popularity&apiKey=${
					process.env.REACT_APP_API_KEY
				}`
			)
			.then(res => {
				let popularArticles = res.data.articles;
				popularArticles.forEach(article => {
					article.title =
						article.title.length < 130
							? article.title
							: article.title.substr(0, 130).concat('...');
					article.urlToImage = article.urlToImage
						? article.urlToImage
						: this.pickRandomImage(images.randomImg, 1)[0];
				});
				this.setState({ popularArticles });
			});

		axios
			.get('https://api.coinbase.com/v2/exchange-rates?currency=EUR')
			.then(res => {
				let rates = {
					BTC: 1 / res.data.data.rates.BTC,
					ETH: 1 / res.data.data.rates.ETH,
					XRP: 1 / res.data.data.rates.XRP,
					BCH: 1 / res.data.data.rates.BCH,
					EOS: 1 / res.data.data.rates.EOS,
					LTC: 1 / res.data.data.rates.LTC
				};
				this.setState({ rates });
			});

		axios
			.get(
				`http://api.coinlayer.com/${this.getPastDays(0)
					.toString()
					.substr(0, 10)}?access_key=${
					process.env.REACT_APP_COINLAYER_KEY
				}&target=EUR&symbols=BTC,ETH`
			)
			.then(res => {
				console.log(res.data);
			});
	}

	render() {
		return (
			<div className="App">
				<div className="topbar"></div>

				<div className="first-grid">
					<div className="mainNews">
						<ApexChart />
					</div>
					{this.state.popularArticles.slice(0, 5).map((article, x) => {
						return (
							<TopNew
								image={this.state.pics[x]}
								article={article}
								convertDate={this.convertDate}
								key={new Date(article.publishedAt).getTime()}
							/>
						);
					})}
				</div>

				<div className="second-grid">
					<div>
						<h3>RECENT NEWS</h3>
						<div className="grid_recent">
							<div className="mainNews_recent">
								<div
									className="mainNews_recent_img"
									style={{
										backgroundImage: `url(${this.state.recentArticles[0].urlToImage})`
									}}
								></div>
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
								{this.state.recentArticles
									.slice(1, this.state.recentArticles.length)
									.map((article, index) => {
										return (
											<SmallNew
												article={article}
												convertDate={this.convertDate}
												key={new Date(article.publishedAt).getTime()}
											/>
										);
									})}
							</ul>
						</div>
						<h3>MOST POPULAR LAST WEEK</h3>
						<div className="grid_recent">
							{this.state.oldArticles.map((article, i) => {
								return (
									<BigNew
										article={article}
										convertDate={this.convertDate}
										key={new Date(article.publishedAt).getTime()}
									/>
								);
							})}
						</div>
					</div>
					<div className="second_grid_third_column">
						<ul className="conversions">
							<li>1 BTC = {this.state.rates.BTC} €</li>
							<li>1 ETH = {this.state.rates.ETH} €</li>
							<li>1 BCH = {this.state.rates.BCH} €</li>
							<li>1 LTC = {this.state.rates.LTC} €</li>
							<li>1 XRP = {this.state.rates.XRP} €</li>
							<li>1 EOS = {this.state.rates.EOS} €</li>
						</ul>
						<h3>POPULAR NEWS</h3>
						<ul className="otherNews_recent">
							{this.state.popularArticles
								.slice(5, this.state.popularArticles.length)
								.map((article, y) => {
									return (
										<SmallNew
											article={article}
											convertDate={this.convertDate}
											key={new Date(article.publishedAt).getTime()}
										/>
									);
								})}
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
