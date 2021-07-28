import React from 'react';
import PropTypes from 'prop-types';
import './Section.sass';

function Section(props) {
  return (
    <section className={`section ${props.className}`}>{props.children}</section>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

export default Section;
