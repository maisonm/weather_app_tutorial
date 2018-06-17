import React from 'react';
import { connect } from 'react-redux';

import { LightningBolt } from '../assets/lightning.svg';
import { RadioButtonSection } from '../Components/index';
import { setLocationTextInput, setLocationRadioInput,
  setDefaultInput } from '../../store/actions/index';

const radioButtons = [
  {
    value: 'name',
    radioButtonLabel: 'City name',
  },
  {
    value: 'id',
    radioButtonLabel: 'City Id',
  },
  {
    value: 'coordinates',
    radioButtonLabel: 'City co-ordinates',
  },
  {
    value: 'zipcode',
    radioButtonLabel: 'City zipcode',
  },
];

export class Home extends React.Component {

  constructor(props) {
    super(props);

    this.props.actions.setDefaultInput();
    this.inputFieldRef = React.createRef();
  }

  handleRadioInputChange = (event) => {
    this.props.actions.setLocationRadioInput({ locationType: event.target.value });
  }

  handleButtonClick = (event) => {
    this.props.actions.setLocationTextInput({ locationData: this.inputFieldRef.current.value });
  }

  componentDidUpdate = (prevProps) => {
    const { locationData, locationType } = this.props;

    if (prevProps.locationData !== locationData) {
      this.props.history.push({
        pathname: '/current-weather',
        state: {
          locationType: locationType,
          locationData: locationData,
        },
      });
    }
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
            ref={this.inputFieldRef}
            type='text'
            placeholder='Enter zipcode..'
            name='zipcode'
          />
          <button onClick={this.handleButtonClick}>ENTER</button>
        </div>
        <div className='radio-button-section'>
          <RadioButtonSection
            radioButtons={radioButtons}
            selectedOption={this.props.locationType}
            onChange={this.handleRadioInputChange}
          />
        </div>
      </div>
    );
  }
};

const mapStateToProps = function(state) {
  const locationData = state && state.locationData;
  const locationType = state && state.locationType;

  return {
    locationType: locationType,
    locationData: locationData,
  };
};

const mapDispatchToProps = function(dispatch) {
  const dispatchActions = {
    setLocationRadioInput: function(locationRadioConfig) {
      dispatch(setLocationRadioInput(locationRadioConfig));
    },
    setLocationTextInput: function(locationTextConfig) {
      dispatch(setLocationTextInput(locationTextConfig));
    },
    setDefaultInput: function() {
      dispatch(setDefaultInput());
    },
  };

  return {
    actions: dispatchActions,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
