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

	render() {
		return (
			<a
				className="secondaryNews"
				style={{ backgroundImage: `url(${this.state.image})` }}
				href={this.state.article.url}
				target="_blank"
				rel="noopener noreferrer"
			>
				<h3>{this.state.article.title}</h3>
				<small>
					{this.props.convertDate(this.state.article.publishedAt)}
					{' - '}
					{this.state.article.source
						? this.state.article.source.name
						: this.state.article.author}
				</small>
			</a>
		);
	}
}

export default TopNew;
