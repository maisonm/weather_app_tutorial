import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

//Views
import App from './views/App';
import Home from './views/Home';
import CurrentWeather from './views/CurrentWeather';

ReactDOM.render(

	<Router>
	  <App>
		  <Route exact path='/' component={Home}/>
		  <Route exact path='/current-weather' component={CurrentWeather}/>
	  </App>
	</Router>

,document.getElementById('root'));

registerServiceWorker();
