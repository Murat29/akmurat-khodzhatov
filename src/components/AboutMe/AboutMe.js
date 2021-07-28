import React from 'react';
import Title from '../Title/Title';
import Link from '../Link/Link';
import Section from '../Section/Section';
import avatarKind from '../../images/avatar-kind.jpg';
import './AboutMe.sass';

function AboutMe() {
  return (
    <Section className="about-me">
      <Title text="Обо мне" isWhite={true} />
      <div className="about-me__container">
        <div className="about-me__text-container">
          <p className="about-me__text">
            Я родился в Туркменистане (да, это где президент устраивает
            дискотеки и стреляет с велосипеда по мишеням). В данный момент живу
            В Санк&#8209;Петербурге. В свободное время играю в баскетбол и
            настольный теннис.
          </p>
          <p className="about-me__text">
            Я увленчен frontend разработкой и хочу что бы мое хобби стало
            работой. Мечтаю попасть попасть в команду с высокой инженерной
            культурой и людьми которые горят своим делом.
          </p>
          <Link
            title="Посмотреть резюме"
            isWhite={true}
            href="https://spb.hh.ru/resume/c7ce8e31ff088afeae0039ed1f346437766b5a"
          />
        </div>
        <div className="about-me__avatar-container">
          <img src={avatarKind} className="about-me__avatar" />
        </div>
      </div>
    </Section>
  );
}

export default AboutMe;
