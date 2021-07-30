import React from 'react';
import Header from '../Header/Header';
import Hello from '../Hello/Hello';
import AboutMe from '../AboutMe/AboutMe';
import Skills from '../Skills/Skills';
import Portfolio from '../Portfolio/Portfolio';
import './App.sass';

function App() {
  return (
    <div className="app">
      <Header />
      <Hello />
      <AboutMe />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
