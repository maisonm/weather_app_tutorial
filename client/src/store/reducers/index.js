import { SET_LOCATION_TEXT_INPUT, SET_LOCATION_RADIO_INPUT, SET_DEFAULT_INPUT } from '../actions/index';

const defaultState = {
  locationData: '',
  locationType: 'zipcode',
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
    default: {
      return { ...state };
    }
  }
};

export default rootReducer;
