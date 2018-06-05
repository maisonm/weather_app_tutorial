import { WEATHER_API_ENDPOINT } from './constants';

export function weatherAppAPI(requestHeaders, requestBody, callback) {
  var xhr = new XMLHttpRequest();// eslint-disable-line no-undef
  const requestEndpoint = WEATHER_API_ENDPOINT;
  const requestOptions = {
    method: 'post',
  };

  if (requestBody) {
    requestOptions.body = requestBody;
  }

  if (requestHeaders) {
    requestOptions.headers = requestHeaders;
  }

  xhr.open(requestOptions.method, requestEndpoint, true);

  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      const resposeData = JSON.parse(xhr.response);
      if (xhr.status !== 200 || resposeData.data.cod !== 200) {
        return callback(resposeData);
      }

      return callback(null, resposeData);
    }
  };

  xhr.send(JSON.stringify(requestOptions.body));
}
