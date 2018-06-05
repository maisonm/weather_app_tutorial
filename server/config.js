module.exports = {
  baseUrl: {
    protocol: 'http',
    hostname: 'api.openweathermap.org',
    path: '/data/2.5/weather',
  },

  query: {
    name: 'q',
    id: 'id',
    coordinates: {
      latitude: 'lat',
      longitude: 'lon',
    },
    zipcode: 'zip',
  },

  APIkey: '1699734cc33b58a406484b7bdd69cf1b',
};
