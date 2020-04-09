import React from 'react';
import './App.css';

function App() {
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
								<h3>Title goes here</h3>
								<small>
									by <strong>David Palmer</strong>, Jan 4th 2020
								</small>
								<p>
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore.
								</p>
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
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore.
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
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore.
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
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore.
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
									Sed ut perspiciatis unde omnis iste natus error sit voluptatem
									accusantium doloremque laudantium, totam rem aperiam, eaque
									ipsa quae ab illo inventore.
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

export default App;
