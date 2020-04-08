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
						<div className="mainNews_recent"></div>
						<div className="otherNews_recent"></div>
					</div>
				</div>
				<ul>
					<li>1 BTC = $13.2232</li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
			</div>
		</div>
	);
}

export default App;
