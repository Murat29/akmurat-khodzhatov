import React from 'react';
import PropTypes from 'prop-types';
import './Title.sass';

function Title({ text, isWhite }) {
  return <h2 className={`title ${isWhite && 'title_white'}`}>{text}</h2>;
}

Title.propTypes = {
  text: PropTypes.string,
  isWhite: PropTypes.bool,
};

export default Title;
