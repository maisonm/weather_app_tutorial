import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Assets
import ThunderStormIcon from './assets/weather_icons/01W.svg';
import RainIcon from './assets/weather_icons/02W.svg';
import SnowIcon from './assets/weather_icons/03W.svg';
import ClearIcon from './assets/weather_icons/04W-DAY.svg';
import CloudsIcon from './assets/weather_icons/05W.svg';
import NoLocationFound from './assets/no-location.svg';
import LoadingIcon from './assets/loading.svg';


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
			cityName: '',
			cityNotFound: ''
		})
	}


		componentDidMount() {
			fetch('/search-location-weather')
			.then(res => res.json())
			.then(data => {
				if(data.data.cod === '404') {
					this.setState({
						isLoading: false,
						cityNotFound: '404'
					})
				} else {
				// Determine weather icon
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
				}
			})
			.catch(err => {
				console.log(err);
			})	
		}

	render() {
		const WeatherCardError = (
			<div className='weatherCardContainer'>
				<div className='weatherCardError'>
					<img src={NoLocationFound} alt='no location found'/>
					<p> Whoa! Looks like there was an error with your zipcode.</p>
					<Link to='/'><button>Try Again</button></Link>
				</div>
			</div>
		)

		const WeatherConditions = (

			this.state.cityNotFound == 404 ? <div> { WeatherCardError } </div> :

			<div>
				<div className='homeBtn'>
					<Link to='/'><button>Home</button></Link>
				</div>
				<div className='weatherCardContainer'>
					<div className='weatherCard'>
						<img src={this.state.weatherIcon} alt='Weather icon'/>
						<div className='conditionsOverview'>
							<p>{this.state.currentTemp}</p>
							<p>{this.state.currentConditionDescription}</p>
						</div>
						<div className='conditionDetails'>
							<p>Humidity: {this.state.humidity} </p>
							<p>Wind Speed: {this.state.wind} </p>
						</div>
					</div> 
					
				<h4> Location | {this.state.cityName} </h4>
				</div>
			</div>
		

		)

		const LoadingDisplay = (

			<div className='loading'>
				<img className='loadingIcon' src={LoadingIcon} alt='loading icon'/>
			</div>

		)

		const CurrentWeatherCard = ( 

			this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div> {WeatherConditions} </div>
		)

		return (
			<div>
				{ CurrentWeatherCard }
			</div>
		)
	}
}

export default CurrentWeather;
