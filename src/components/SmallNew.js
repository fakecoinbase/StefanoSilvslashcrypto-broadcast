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

	componentWillReceiveProps(props) {
		this.setState({
			article: props.article
		});
	}
	render() {
		return (
			<li className="li_grid">
				<div className="otherNews_recent_image"></div>
				<div>
					<h4>{this.state.article.title}</h4>
					<small>
						by <strong>{this.state.article.author}</strong>,{' '}
						{this.props.convertDate(this.state.article.publishedAt)}
					</small>
				</div>
			</li>
		);
	}
}

export default SmallNew;
