const url = require('url');
const config = require('./config');

module.exports = {
  generateWebAppURL: function(locationConfigType, locationConfigData) {
    const baseUrlConfig = config.baseUrl;
    const APIkey = config.APIkey;
    const queryConfig = config.query;

    let requestQuery = { appid: APIkey };

    if (locationConfigType !== 'coordinates') {
      requestQuery[queryConfig[locationConfigType]] = locationConfigData;
    } else {
      if (locationConfigData.latitude) {
        requestQuery[queryConfig.coordinates.latitude] = locationConfigData.latitude;
      }

      if (locationConfigData.longitude) {
        requestQuery[queryConfig.coordinates.longitude] = locationConfigData.longitude;
      }
    }

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: requestQuery,
    });
  },
};
