import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import Link from '../Link/Link';
import iconCross from '../../images/cross.svg';
import './Popup.sass';

function Popup({ isOpen, data, closePopup }) {
  const popupRef = useRef();

  function closePopupEsc(e) {
    if (e.key === 'Escape') {
      closePopup();
      resetSkoll();
    }
  }

  function closePopupCross() {
    closePopup();
    resetSkoll();
  }

  function closePopupOverflow(e) {
    if (e.target.classList.contains('popup')) {
      closePopup();
      resetSkoll();
    }
  }

  function resetSkoll() {
    setTimeout(() => {
      popupRef.current.scrollTop = 0;
    }, 290);
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
      ref={popupRef}
    >
      <div className="popup__container">
        <button className="popup__btn-close">
          <img
            className="popup__img-close"
            src={iconCross}
            onClick={closePopupCross}
            alt="Закрыть попап."
          />
        </button>
        <h2 onClick={closePopup} className="popup__title">
          {data.title}
        </h2>
        <p className="popup__text">{data.description}</p>
        <p className="popup__text">Стек: {data.stack}</p>
        {data.images?.map((url, i) => (
          <img
            src={url}
            className="popup__img"
            key={i}
            alt={`Изображение проекта ${i + 1}`}
          />
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
