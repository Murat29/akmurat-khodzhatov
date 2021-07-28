import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import menuIcon from '../../images/menu.svg';
import crossIcon from '../../images/cross.svg';
import './Header.sass';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isActiveHeader, setIsActiveHeader] = useState(true);
  const scrolled = useRef(0);

  function openMenu() {
    setIsMenuOpen(true);
  }

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function handleScroll() {
    let newIsActiveHeader;
    if (window.scrollY > scrolled.current) newIsActiveHeader = false;
    else newIsActiveHeader = true;
    scrolled.current = window.scrollY;
    setIsActiveHeader(newIsActiveHeader);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      onScroll={handleScroll}
      className={`header ${!isActiveHeader && 'header_hide'}`}
    >
      <div className="header__container">
        <div className="header__logo">
          <span className="header__logo-text">Мурат</span>
        </div>

        <nav
          className={`header__nav-container ${
            isMenuOpen && 'header__nav-container_is-opened'
          }`}
        >
          <img
            onClick={closeMenu}
            className="header__cross"
            src={crossIcon}
            alt="Закрыть меню."
          />
          <ul className="header__nav-list">
            <li>
              <a className="header__nav-item" href="#">
                Привет
              </a>
            </li>
            <li>
              <a className="header__nav-item" href="#">
                Обо мне
              </a>
            </li>
            <li>
              <a className="header__nav-item" href="#">
                Навыки
              </a>
            </li>
            <li>
              <a className="header__nav-item" href="#">
                Портфолио
              </a>
            </li>
            <li>
              <a className="header__nav-item" href="#">
                Контакты
              </a>
            </li>
          </ul>
        </nav>
        <img
          onClick={openMenu}
          className="header__menu-icon"
          alt="Открыть меню."
          src={menuIcon}
        />
      </div>
    </header>
  );
}

export default Header;
