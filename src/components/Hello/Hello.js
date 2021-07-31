import React from 'react';
import Link from '../Link/Link';
import './Hello.sass';
import '../../assets/animation.sass';

function Hello() {
  return (
    <section className="hello" id="hello">
      <div className="hello__container">
        <div className="hello__text-container">
          <h1 className="hello__text emergence-left">
            Привет, меня зовут{' '}
            <span className="hello__name">Акмурат&nbsp;Ходжатов</span>
          </h1>
          <p className="hello__text emergence-left">Я Frontend Developer.</p>
        </div>
        <Link title="Узнать больше" href="#about-me" animate={true} />
      </div>
    </section>
  );
}

export default Hello;
