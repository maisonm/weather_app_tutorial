import { SET_LOCATION_TEXT_INPUT, SET_LOCATION_RADIO_INPUT, SET_DEFAULT_INPUT } from './action-types';

export const setLocationTextInput = locationInputConfig => (
  {
    type: SET_LOCATION_TEXT_INPUT,
    payload: locationInputConfig,
  }
);

export const setLocationRadioInput = locationRadioConfig => (
  {
    type: SET_LOCATION_RADIO_INPUT,
    payload: locationRadioConfig,
  }
);

export const setDefaultInput = () => {
  return {
    type: SET_DEFAULT_INPUT,
  };
};

export { SET_LOCATION_TEXT_INPUT, SET_LOCATION_RADIO_INPUT, SET_DEFAULT_INPUT };
