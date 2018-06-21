import React from 'react';
import classnames from 'classnames';

import { RadioButton } from '../Containers/index';

export default function RadioButtonSection(props) {
  const { radioButtons, className, selectedOption, onChange } = props;

  if (!radioButtons || !radioButtons.length) {
    return null;
  }

  return (
    <div className={classnames(className)}>
      {
        radioButtons.map(function(radioButton, index) {
          const { value, radioButtonLabel } = radioButton;

          return (
            <RadioButton
              key={index}
              value={value}
              isSelected={selectedOption === value}
              radioButtonLabel={radioButtonLabel}
              onChange={onChange}
            />
          );
        })
      }
    </div>
  );
}
