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
		console.log('props in TopNew', props);
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
