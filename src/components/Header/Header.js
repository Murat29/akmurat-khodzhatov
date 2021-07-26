import React from 'react';
import { useState } from 'react';
import menuIcon from '../../images/menu.svg';
import crossIcon from '../../images/cross.svg';
import './Header.sass';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-text">Мурат</span>
        </div>
        <img onClick={openMenu} className="header__menu-icon" alt="Открыть меню." src={menuIcon} />
        <nav className={`header__nav-container ${isMenuOpen && 'header__nav-container_is-opened'}`}>
          <img onClick={closeMenu} className="header__cross" src={crossIcon} alt="Закрыть меню." />
          <ul className="header__nav-list">
            <a className="header__nav-item" href="#">
              <li>Привет</li>
            </a>
            <a className="header__nav-item" href="#">
              <li>Обо мне</li>
            </a>
            <a className="header__nav-item" href="#">
              <li>Навыки</li>
            </a>
            <a className="header__nav-item" href="#">
              <li>Портфолио</li>
            </a>
            <a className="header__nav-item" href="#">
              <li>Контакты</li>
            </a>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
