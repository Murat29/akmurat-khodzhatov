import React from 'react';
import PropTypes from 'prop-types';
import './Link.sass';

function Link({ href, title }) {
  return (
    <div className="link-container">
      <a className="link-container__link" href={href}>
        {title}
      </a>
    </div>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
};

export default Link;
