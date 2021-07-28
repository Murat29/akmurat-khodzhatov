import React from 'react';
import Link from '../Link/Link';
import './Hello.sass';
import '../../assets/animation.sass';

function Hello() {
  return (
    <section className="hello">
      <div className="hello__text-container">
        <h1 className="hello__text emergence">
          Привет, меня зовут{' '}
          <span className="hello__name">Акмурат&nbsp;Ходжатов</span>
        </h1>
        <p className="hello__text emergence">Я Frontend Developer.</p>
      </div>
      <Link title="Узнать больше" href="#about-me" />
    </section>
  );
}

export default Hello;
