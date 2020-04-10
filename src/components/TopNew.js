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

	componentWillReceiveProps(props) {
		this.setState({
			article: props.article
		});
	}
	render() {
		return (
			<div className="secondaryNews">
				<h3>{this.state.article.title}</h3>
				<small>{this.props.convertDate(this.state.article.publishedAt)}</small>
			</div>
		);
	}
}

export default TopNew;
