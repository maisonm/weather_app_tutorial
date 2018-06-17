import { WEATHER_API_ENDPOINT } from './constants';
import ThunderStormIcon from './views/assets/weather_icons/01W.svg';
import RainIcon from './views/assets/weather_icons/02W.svg';
import SnowIcon from './views/assets/weather_icons/03W.svg';
import ClearIcon from './views/assets/weather_icons/04W-DAY.svg';
import CloudsIcon from './views/assets/weather_icons/05W.svg';
import NoLocationFound from './views/assets/no-location.svg';

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

export function weatherIcon(weatherId) {
  if (weatherId <= 232) {
    return ThunderStormIcon;
  } else if (weatherId >= 300 && weatherId <= 531) {
    return RainIcon;
  } else if (weatherId >= 600 && weatherId <= 622) {
    return SnowIcon;
  } else if (weatherId === 800) {
    return ClearIcon;
  } else if (weatherId >= 801 && weatherId <= 804) {
    return CloudsIcon;
  }

  return NoLocationFound;
}
