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
		],
		image: ''
	};

	componentDidMount() {
		this.setState({
			article: this.props.article
		});
		this.setState({
			image: this.props.image
		});
	}

	componentWillReceiveProps(props) {
		this.setState({
			article: props.article
		});
		this.setState({
			image: props.image
		});
	}
	render() {
		return (
			<div
				className="secondaryNews"
				style={{ backgroundImage: `url(${this.state.image})` }}
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
