import React from 'react';

const RadioButton = (props) => (
  <div>
    <input
      type="radio"
      name="list-length"
      value={props.value}
      onChange={() => {
        props.setOptionCallback(props.value);
      }}
    /> {props.value}
  </div>
);

RadioButton.propTypes = {
  checked: React.PropTypes.bool,
  setOptionCallback: React.PropTypes.func.isRequired,
  value: React.PropTypes.string.isRequired,
};

export default RadioButton;
