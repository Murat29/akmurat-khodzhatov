import React from 'react';
import Section from '../Section/Section';
import Title from '../Title/Title';
import {
  basicTechnologies,
  additionalTechnologies,
  colorsTechnology,
} from '../../utils/constants';

import { getRandomNumber } from '../../utils/getRandomNumber';

import './Skills.sass';

function Skills() {
  function paintInRandomColor(e) {
    e.target.classList.remove('skills__icon_animated');
    e.target.style.backgroundColor =
      colorsTechnology[getRandomNumber(0, colorsTechnology.length - 1)];
  }

  function paintInDefaultColor(e) {
    e.target.classList.add('skills__icon_animated');
    e.target.style.backgroundColor = '#e8e8e8';
  }

  function handleClick(e) {
    paintInRandomColor(e);
    setTimeout(() => {
      paintInDefaultColor(e);
    }, 100);
  }
  return (
    <Section className="skills">
      <div className="skills__container">
        <Title text="Навыки" />
        <p className="skills__subtitle">
          Я открыт для изучения новых технологий, с помощью которых можно
          создавать крутые приложения. Тем более современный Web развивается
          очень стремительно. И если за ним не поспевать, то можно остаться на
          обочине.
        </p>
        <div className="skills__techs">
          <div className="skills__techs-container">
            <p className="skills__tech-title">Основной стек</p>
            <ul className="skills__icons-list">
              {basicTechnologies.map((techTitle) => (
                <li
                  onMouseOver={paintInRandomColor}
                  onMouseOut={paintInDefaultColor}
                  onClick={handleClick}
                  key={techTitle}
                  className="skills__icon"
                >
                  {techTitle}
                </li>
              ))}
            </ul>
          </div>
          <div className="skills__techs-container">
            <p className="skills__text">С чем я работал</p>
            <ul className="skills__icons-list">
              {additionalTechnologies.map((techTitle) => (
                <li
                  onMouseOver={paintInRandomColor}
                  onMouseOut={paintInDefaultColor}
                  onClick={handleClick}
                  key={techTitle}
                  className="skills__icon"
                >
                  {techTitle}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Skills;
