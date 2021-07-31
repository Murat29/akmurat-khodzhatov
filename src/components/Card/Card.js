import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Card.sass';

function Card({ data, activeType, openPopup }) {
  const [isAnimation, setIsAnimation] = useState(false);

  useEffect(() => {
    setIsAnimation(true);
    setTimeout(() => {
      setIsAnimation(false);
    }, 200);
  }, [activeType]);

  return (
    <li
      className={`card ${data.type.includes(activeType) && 'card_active'} 
      ${isAnimation && 'emergence-bottom'}`}
      onClick={() => openPopup(data)}
    >
      <div className="card__img-container">
        <img
          className="card__img"
          src={data.images[0]}
          alt="Изображение проекта"
        />
      </div>
      <p className="card__title">{data.title}</p>
    </li>
  );
}

Card.propTypes = {
  data: PropTypes.object,
  activeType: PropTypes.string,
  openPopup: PropTypes.func,
};

export default Card;
