import React from 'react';
import { Link } from 'react-router-dom';

import NoLocationFound from '../assets/no-location.svg';

export default function WeatherCardError(props) {
  return (
    <div className='weatherCardContainer'>
      <div className='weatherCardError'>
        <img src={NoLocationFound} alt='no location found'/>
        <p> Whoa! Looks like there was an error with your zipcode.</p>
        <Link to='/'><button>Try Again</button></Link>
      </div>
    </div>
  );
}
