import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/animation.sass';
import './Link.sass';

function Link({ href, title }) {
  return (
    <div className="link-container emergence">
      <a className="link-container__link" href={href} tabIndex="0">
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
