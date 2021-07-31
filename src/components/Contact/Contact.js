import React from 'react';
import Title from '../Title/Title';
import { linksContact } from '../../utils/constants';
import './Contact.sass';

function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="contact__container">
        <Title text="Контакты" />
        <ul className="contact__links-list">
          {linksContact.map((data, i) => (
            <li className="contact__link-item" key={i}>
              <a
                href={data.href}
                className="contact__link"
                target="_blank"
                rel="noreferrer"
              >
                {data.src}
                <img className="contact__icon" src={data.src} alt={data.alt} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Contact;
