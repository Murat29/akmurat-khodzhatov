import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import './Popup.sass';

function Popup({ isOpen, data, closePopup }) {
  function closePopupEsc(e) {
    if (e.key === 'Escape') {
      closePopup();
    }
  }

  function closePopupOverflow(e) {
    if (e.target.classList.contains('popup')) {
      closePopup();
    }
  }

  useEffect(() => {
    document.addEventListener('keyup', closePopupEsc);

    return () => {
      document.removeEventListener('keyup', closePopupEsc);
    };
  }, []);

  return (
    <div
      onClick={closePopupOverflow}
      className={`popup ${isOpen && 'popup_is-opened'}`}
    >
      <div className="popup__container">
        <h2 onClick={closePopup} className="popup__title">
          {data.title}
        </h2>
        <p className="popup__text">{data.description}</p>
        <p className="popup__text">Стек: {data.stack}</p>
        {data.images?.map((url, i) => (
          <img src={url} className="popup__img" key={i}></img>
        ))}
        <div className="popup__links-container">
          <Link title="Репозиторий" href={data.repositoryLink} />
          {data.projectLink && <Link title="Проект" href={data.projectLink} />}
        </div>
      </div>
    </div>
  );
}

Popup.propTypes = {
  isOpen: PropTypes.bool,
  data: PropTypes.object,
  closePopup: PropTypes.func,
};

export default Popup;
