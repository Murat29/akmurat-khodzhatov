import React from 'react';
import PropTypes from 'prop-types';
import '../../assets/animation.sass';
import './Link.sass';

function Link({ href, title, isWhite, animate }) {
  return (
    <div
      className={`link-container 
      ${animate && 'emergence'} 
      ${isWhite && 'link-container_white'}`}
    >
      <a
        className={`link-container__link 
        ${isWhite && 'link-container__link_white'}
        `}
        href={href}
        tabIndex="0"
        target={href.includes('http') ? '_blank' : '_self'}
        rel="noreferrer"
      >
        {title}
      </a>
    </div>
  );
}

Link.propTypes = {
  href: PropTypes.string,
  title: PropTypes.string,
  isWhite: PropTypes.bool,
  animate: PropTypes.bool,
};

export default Link;
