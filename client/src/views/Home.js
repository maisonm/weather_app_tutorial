import React, { Component } from 'react';
import LightningBolt from './assets/lightning.svg';

class Home extends Component {
	constructor(props) {
		super(props);
	}


	render() {
		return (
		<div>
			<div className='header'>
				<h2>Weather Forcast</h2>
				<img src={LightningBolt}/>
			</div>

			<div className="instructions">
				<p>Enter your zipcode below to get the current weather forcast in your area.</p>
			</div>

			<div className='zipcodeInput'>
				<form method='POST' action='/search-location'>
					<input type='text' placeholder='Enter zipcode..' name='zipcode'/>
					<button>ENTER</button>
				</form>
			</div>
		</div>
		)
	}
}

export default Home;