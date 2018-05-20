import React, { Component } from 'react';
import ThunderStormIcon from './assets/weather_icons/01W.svg';
import RainIcon from './assets/weather_icons/02W.svg';
import SnowIcon from './assets/weather_icons/03W.svg';
import ClearIcon from './assets/weather_icons/04W-DAY.svg';
import CloudsIcon from './assets/weather_icons/05W.svg';


class CurrentWeather extends Component {
	constructor(props) {
		super(props);

		this.state = ({
			isLoading: true,
			currentTemp: '',
			humidity: '',
			wind: '',
			windDirection: '',
			currentCondition: '',
			currentConditionDescription: '',
			weatherIcon: '',
			cityName: ''
		})
	}


		componentDidMount() {
			fetch('/search-location-weather')
			.then(res => res.json())
			.then(data => {

				//Determine weather icon
				let weatherIcon;
				let weatherId = data.data.weather[0].id;
				if(weatherId <= 232) {
					this.setState({ weatherIcon: ThunderStormIcon })
				} else if(weatherId >= 300 && weatherId <= 531) {
					this.setState({ weatherIcon: RainIcon });
				} else if(weatherId >= 600 && weatherId <= 622 ) {
					this.setState({ weatherIcon: SnowIcon });
				} else if(weatherId === 800) {
					this.setState({ weatherIcon: ClearIcon });
				} else if(weatherId >= 801 && weatherId <= 804) {
					this.setState({ weatherIcon: CloudsIcon });
				}

				this.setState({
					isLoading: false,
					currentTemp: Math.round(data.data.main.temp) + '°',
					humidity: data.data.main.humidity + '%',
					wind: Math.round(data.data.wind.speed) + ' mph',
					windDirection: data.data.wind.deg,
					currentCondition: data.data.weather[0].main,
					currentConditionDescription: data.data.weather[0].description,
					cityName: data.data.name
				});
			})
			.catch(err => {
				console.log(err);
			})
		}

	render() {

		return (
			<div>
			{ 
				this.state.isLoading === true ? <div> <h1> LOADING </h1> </div> 

				: 
				<div className='weatherCardContainer'>
				<h4> Location | {this.state.cityName} </h4>
					<div className='weatherCard'>
						<img src={this.state.weatherIcon} alt='Weather icon'/>
						<div className='conditionsOverview'>
							<p>{this.state.currentTemp}</p>
							<p>{this.state.currentConditionDescription}</p>
						</div>
						<div class='conditionDetails'>
							<p>Humidity: {this.state.humidity} </p>
							<p>Wind Speed: {this.state.wind} </p>
						</div>
					</div> 
				</div>
			}
			</div>
		)
	}
}

export default CurrentWeather;