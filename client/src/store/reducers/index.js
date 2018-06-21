import { SET_LOCATION_TEXT_INPUT, SET_LOCATION_RADIO_INPUT, SET_DEFAULT_INPUT,
  LOADING_WEATHER_DATA, LOADED_WEATHER_DATA, ERROR_WEATHER_DATA } from '../actions/index';

const defaultState = {
  locationData: '',
  locationType: 'zipcode',
  loading: true,
  loaded: false,
  error: false,
};

const rootReducer = function(state = defaultState, action) {
  const { payload } = action;

  switch (action.type) {
    case SET_LOCATION_TEXT_INPUT: {
      return { ...state, locationData: payload.locationData };
    }
    case SET_LOCATION_RADIO_INPUT: {
      return { ...state, locationType: payload.locationType };
    }
    case SET_DEFAULT_INPUT: {
      return { ...state };
    }
    case LOADING_WEATHER_DATA: {
      return { ...state, loading: true, loaded: false, error: false };
    }
    case LOADED_WEATHER_DATA: {
      const { main, weather, name, wind } = payload;

      return { ...state, loading: false, loaded: true, main: main, weather: weather, name: name, wind: wind };
    }
    case ERROR_WEATHER_DATA: {
      return { ...state, loading: false, error: true };
    }
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
