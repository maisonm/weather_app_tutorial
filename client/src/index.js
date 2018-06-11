import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';

// Views
import { App, ErrorDisplay } from './views/Components/index';
import { Home, CurrentWeather } from './views/Containers/index';

ReactDOM.render(
  <Router>
    <App>
      <Route exact path='/' component={Home}/>
      <Route exact path='/current-weather' component={CurrentWeather}/>
      <Route exact path='/error' component={ErrorDisplay}/>
    </App>
  </Router>
  , document.getElementById('root'));

registerServiceWorker(); // eslint-disable-line no-undef
