import React from 'react';

import LightningBolt from './assets/lightning.svg';
import RadioButton from './RadioButton';

export default class Home extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      locationData: '',
      locationType: 'zipcode',
    };

    this.handleRadioInputChange = this.handleRadioInputChange.bind(this);
    this.handleButtonClick = this.handleButtonClick.bind(this);
    this.handleInputFieldChange = this.handleInputFieldChange.bind(this);
  }

  handleRadioInputChange(event) {
    this.setState({
      locationType: event.target.value,
    });
  }

  handleInputFieldChange(event) {
    this.setState({
      locationData: event.target.value,
    });
  }

  handleButtonClick(event) {
    console.log(this.props);
    this.props.history.push({
      pathname: '/current-weather',
      state: this.state,
    });
  }

  render() {
    return (
      <div>
        <div className='header'>
          <h2>Weather Forcast</h2>
          <img src={LightningBolt}/>
        </div>
        <div className="instructions">
          <p>Enter a US zipcode below to get the current weather conditions for that area.</p>
        </div>
        <div className='zipcodeInput'>
          <input
            type='text'
            placeholder='Enter zipcode..'
            name='zipcode'
            onChange={this.handleInputFieldChange}
          />
          <button onClick={this.handleButtonClick}>ENTER</button>
        </div>
        <div className='radio-button-section'>
          <RadioButton
            value='name'
            isSelected={this.state.locationType === 'name'}
            onChange={this.handleRadioInputChange}
            radioButtonLabel='City name'
          />
          <RadioButton
            value='id'
            isSelected={this.state.locationType === 'id'}
            onChange={this.handleRadioInputChange}
            radioButtonLabel='City Id'
          />
          <RadioButton
            value='coordinates'
            isSelected={this.state.locationType === 'coordinates'}
            onChange={this.handleRadioInputChange}
            radioButtonLabel='City co-ordinates'
          />
          <RadioButton
            value='zipcode'
            isSelected={this.state.locationType === 'zipcode'}
            onChange={this.handleRadioInputChange}
            radioButtonLabel='City zipcode'
          />
        </div>
      </div>
    );
  }
};
