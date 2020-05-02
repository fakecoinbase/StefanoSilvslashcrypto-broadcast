import React from 'react';

class SmallNew extends React.Component {
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

	render() {
		return (
			<li className="li_grid">
				<a
					href={this.state.article.url}
					target="_blank"
					rel="noopener noreferrer"
				>
					<div
						className="otherNews_recent_image"
						style={{ backgroundImage: `url(${this.state.article.urlToImage})` }}
					></div>
					<div>
						<h4>{this.state.article.title}</h4>
						<small>
							by{' '}
							<strong>
								{this.state.article.source
									? this.state.article.source.name
									: this.state.article.author}
							</strong>
							, {this.props.convertDate(this.state.article.publishedAt)}
						</small>
					</div>
				</a>
			</li>
		);
	}
}

export default SmallNew;
