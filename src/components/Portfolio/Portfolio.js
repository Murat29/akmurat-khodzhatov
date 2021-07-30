import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Title from '../Title/Title';
import Section from '../Section/Section';
import InputRadio from '../InputRadio/InputRadio';
import Card from '../Card/Card';
import { MyProjects } from '../../utils/constants';
import './Portfolio.sass';

function Portfolio({ openPopup }) {
  const [checkedRadio, setCheckedRadio] = useState('');

  function handleChangeRadio(e) {
    setCheckedRadio(e.target.value);
  }

  return (
    <Section className="portfolio">
      <div className="portfolio__container">
        <Title text="Портфолио" />
        <ul className="portfolio__radio-list">
          <li className="portfolio__radio-item">
            <InputRadio
              title="Все"
              value=""
              currentValue={checkedRadio}
              handleChange={handleChangeRadio}
              name="portfolioRadio"
            />
          </li>
          <li className="portfolio__radio-item">
            <InputRadio
              title="Полный стек"
              value="full"
              currentValue={checkedRadio}
              handleChange={handleChangeRadio}
              name="portfolioRadio"
            />
          </li>
          <li className="portfolio__radio-item">
            <InputRadio
              title="Фронтенд"
              value="front"
              currentValue={checkedRadio}
              handleChange={handleChangeRadio}
              name="portfolioRadio"
            />
          </li>
          <li className="portfolio__radio-item">
            <InputRadio
              title="Игры"
              value="game"
              currentValue={checkedRadio}
              handleChange={handleChangeRadio}
              name="portfolioRadio"
            />
          </li>
        </ul>
        <ul className="portfolio__projects-list">
          {MyProjects.map((projectData) => (
            <Card
              key={projectData.id}
              data={projectData}
              activeType={checkedRadio}
              openPopup={openPopup}
            />
          ))}
        </ul>
      </div>
    </Section>
  );
}

Portfolio.propTypes = {
  openPopup: PropTypes.func,
};

export default Portfolio;
