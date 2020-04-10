import React from 'react';

class TopNew extends React.Component {
	state = {
		article: [
			{
				title: '',
				autor: '',
				publishedAt: '',
				description: ''
			}
		]
	};

	componentDidMount() {
		this.setState({
			article: this.props.article
		});
	}

	componentWillReceiveProps(props) {
		this.setState({
			article: props.article
		});
	}
	render() {
		return (
			<div
				className="secondaryNews"
				style={{ backgroundImage: `url(${this.state.article.urlToImage})` }}
			>
				<h3>{this.state.article.title}</h3>
				<small>
					{this.props.convertDate(this.state.article.publishedAt)}
					{' - '}
					{this.state.article.source
						? this.state.article.source.name
						: this.state.article.author}
				</small>
			</div>
		);
	}
}

export default TopNew;
