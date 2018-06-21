import { put, call, takeLatest } from 'redux-saga/effects';

import * as actions from '../actions/action-types';
import { weatherAppAPI } from '../../utils';

export default function * root() {
  yield takeLatest(actions.GET_WEATHER_DATA, fetchWeatherData);
};

function * fetchWeatherData(action) {
  try {
    const { weatherSearchData } = action.payload;

    yield put({ type: actions.LOADING_WEATHER_DATA });

    const response = yield call(weatherApiPromiseWrapper, weatherSearchData);

    yield put({ type: actions.LOADED_WEATHER_DATA, payload: { ...response.data } });

  } catch (e) {
    yield put({type: actions.ERROR_WEATHER_DATA });
  }
}

function * weatherApiPromiseWrapper(weatherSearchData) {
  const promise = yield new Promise((resolve, reject) => {
    weatherAppAPI({}, weatherSearchData, function(err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });

  return promise;
}
