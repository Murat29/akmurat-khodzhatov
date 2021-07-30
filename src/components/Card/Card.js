import React from 'react';
import PropTypes from 'prop-types';
import './Card.sass';

function Card({ data: { title, images } }) {
  return (
    <li className="card">
      <div className="card__img-container">
        <img className="card__img" src={images[0]} />
      </div>
      <p className="card__title">{title}</p>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  title: PropTypes.string,
  images: PropTypes.array,
};

export default Card;
