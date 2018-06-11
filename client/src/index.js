import React from 'react';
import ReactDOM from 'react-dom';
import './views/css/styles.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

// Store
import store from './store/index';

// Views
import { App, ErrorDisplay } from './views/Components/index';
import { Home, CurrentWeather } from './views/Containers/index';

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App>
        <Route exact path='/' component={Home}/>
        <Route exact path='/current-weather' component={CurrentWeather}/>
        <Route exact path='/error' component={ErrorDisplay}/>
      </App>
    </Router>
  </Provider>
  , document.getElementById('root'));

// registerServiceWorker(); // eslint-disable-line no-undef
