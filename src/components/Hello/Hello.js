import React from 'react';
import Link from '../Link/Link';
import './Hello.sass';

function Hello() {
  return (
    <section className="hello">
      <div className="hello__text-container">
        <h1 className="hello__text">
          Привет, меня зовут{' '}
          <span className="hello__name">Акмурат&nbsp;Ходжатов</span>
        </h1>
        <p className="hello__text">Я Frontend Developer.</p>
      </div>
      <Link title="Узнать больше" href="#" />
    </section>
  );
}

export default Hello;
