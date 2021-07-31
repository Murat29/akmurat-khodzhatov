import React, { useState } from 'react';
import Header from '../Header/Header';
import Hello from '../Hello/Hello';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import Popup from '../Popup/Popup';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import './App.sass';

function App() {
  const [isOpenPopup, setIsOpenPopup] = useState(false);
  const [popupData, setPopupData] = useState({});

  function openPopup(data) {
    setPopupData(data);
    setIsOpenPopup(true);
    if (checkScroll()) {
      document.body.classList.add('body_popup-open-scroll');
    }
    document.body.classList.add('body_popup-open');
  }

  function closePopup() {
    setIsOpenPopup(false);
    setTimeout(() => {
      document.body.classList.remove('body_popup-open');
      document.body.classList.remove('body_popup-open-scroll');
    }, 290);
  }

  function checkScroll() {
    return window.innerWidth !== document.body.clientWidth;
  }

  return (
    <div className="app">
      <Header />
      <Hello />
      <AboutMe />
      <Portfolio openPopup={openPopup} />
      <Popup isOpen={isOpenPopup} data={popupData} closePopup={closePopup} />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
