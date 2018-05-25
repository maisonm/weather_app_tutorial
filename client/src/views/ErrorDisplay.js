import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css';
import ErrorIcon from './assets/error.svg';
import { Link } from 'react-router-dom';


const ErrorDisplay = () => {

	return (
		<div className='error'>
			<img src={ErrorIcon} alt='error icon'/>
			<p> Oops! Looks like there was an error. Please re-enter a 5-digit zipcode.</p>

			<Link to='/'><button>Try Again</button></Link>
		</div>
	)

}


export default ErrorDisplay;