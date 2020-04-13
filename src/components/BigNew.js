import React from 'react';

class BigNew extends React.Component {
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
			<a
				className="mainNews_recent"
				href={this.state.article.url}
				target="_blank"
			>
				<div
					className="mainNews_recent_img"
					style={{ backgroundImage: `url(${this.state.article.urlToImage})` }}
				></div>
				<div className="mainNews_recent_content">
					<h3>{this.state.article.title}</h3>
					<small>
						by{' '}
						<strong>
							{this.state.article.source
								? this.state.article.source.name
								: this.state.article.author}
						</strong>
						, {this.props.convertDate(this.state.article.publishedAt)}
					</small>
					<p>{this.state.article.description}</p>
				</div>
			</a>
		);
	}
}

export default BigNew;
