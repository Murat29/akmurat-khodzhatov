import React from 'react';
import Header from '../Header/Header';
import Hello from '../Hello/Hello';
import AboutMe from '../AboutMe/AboutMe';
import './App.sass';

function App() {
  return (
    <div className="app">
      <Header />
      <Hello />
      <AboutMe />
    </div>
  );
}

export default App;
