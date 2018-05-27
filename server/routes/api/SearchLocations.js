const fetch = require('node-fetch');

module.exports = (app) => {

	let zipcode;

	app.post('/search-location', (req, res) => {

		zipcode = req.body.zipcode;

		if(!zipcode || zipcode.length < 5 || zipcode.length > 5) {
			res.redirect('/error');
		} else { 
			res.redirect('/current-weather');
		}
	})

	app.get('/search-location-weather', (req, res) => {
		//build api URL with user zip
		const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=';	
		const apiId = '&appid=18408c043cb329f8ecfffd0558165a04&units=imperial';
		const userLocation = (url1, url2, zipcode) => {

		   let newUrl = url1 + zipcode + url2;
		   return newUrl;
		};	

		const apiUrl = userLocation(baseUrl, apiId, zipcode);


		fetch(apiUrl)
		.then(res => res.json())
		.then(data => {
			res.send({ data });
		})
		.catch(err => {
			res.redirect('/error');
		});

	})

}
