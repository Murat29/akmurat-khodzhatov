import React from 'react';
import PropTypes from 'prop-types';
import './InputRadio.sass';

function InputRadio({ title, name, value, currentValue, handleChange }) {
  return (
    <label className="input-radio">
      <input
        onChange={handleChange}
        checked={currentValue === value}
        className="input-radio__invisible"
        type="radio"
        name={name}
        value={value}
      />
      <span className="input-radio__visible">{title}</span>
    </label>
  );
}

InputRadio.propTypes = {
  title: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  currentValue: PropTypes.string,
  handleChange: PropTypes.func,
};

export default InputRadio;
