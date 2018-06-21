import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { weatherIcon } from '../../utils';
import * as actions from '../../store/actions/index';
import { WeatherCardError, Loader } from '../Components/index';

class CurrentWeather extends Component {
  constructor(props) {
    super(props);

    props.actions.getWeatherData({ weatherSearchData: this.props.location.state });
  }

  render() {
    const { loading, loaded, error, currentTemp, currentConditionDescription,
      humidity, wind, cityName, weatherId } = this.props;

    if (error) {
      return (
        <div>
          <WeatherCardError />
        </div>
      );
    }

    if (loading) {
      return (
        <Loader />
      );
    }

    return (
      <div>
        { loaded &&
          (
            <div>
              <div className='homeBtn'>
                <Link to='/'><button>Home</button></Link>
              </div>
              <div className='weatherCardContainer'>
                <div className='weatherCard'>
                  <img src={weatherIcon(weatherId)} alt='Weather icon'/>
                  <div className='conditionsOverview'>
                    <p>{currentTemp}°</p>
                    <p>{currentConditionDescription}</p>
                  </div>
                  <div className='conditionDetails'>
                    <p>Humidity: {humidity}% </p>
                    <p>Wind Speed: {wind} mph </p>
                  </div>
                </div>

                <h4> Location | {cityName} </h4>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  const { main, weather, name, wind, loading, loaded, error } = state;

  return {
    ...state,
    loading: loading,
    loaded: loaded,
    error: error,
    cityName: name,
    weatherId: weather && weather[0].id,
    humidity: main && main.humidity,
    wind: wind && wind.speed,
    windDirection: wind && wind.deg,
    currentTemp: main && Math.round(main.temp),
    currentCondition: weather && weather[0].main,
    currentConditionDescription: weather && weather[0].description,
  };
};

const mapDispatchToProps = function(dispatch) {
  return {
    actions: {
      getWeatherData: function(weatherSearchData) {
        dispatch(actions.getWeatherData(weatherSearchData));
      },
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrentWeather);
