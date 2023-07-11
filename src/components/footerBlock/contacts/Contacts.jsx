import React from 'react';
import Phone from './../../../Images/phone.svg';
import Mail from './../../../Images/email.svg';
import Skype from './../../../Images/skype.svg';
import Metka from './../../../Images/metka.svg';
import s from './contacts.module.css';

export const Contacts = () => {
  return (
    <section id='contacts' className={s.contacts}>
      <div className={s['contacts-content']}>
        <div className={s['contacts-content-left']}>
          <h3>Свяжитесь с нами</h3>
          <div className={s['contacts-content-left-group']}>
            <img src={Phone} alt='phone' className={s['group-image']} />
            <p className={s['group-text']}>8 (800) 000 00 00</p>
          </div>
          <div className={s['contacts-content-left-group']}>
            <img src={Mail} alt='email' className={s['group-image']} />
            <p className={s['group-text']}>inbox@mail.ru</p>
          </div>
          <div className={s['contacts-content-left-group']}>
            <img src={Skype} alt='skype' className={s['group-image']} />
            <p className={s['group-text']}>tu.train.tickets</p>
          </div>
          <div className={s['contacts-content-left-group']}>
            <img src={Metka} alt='address' className={s['group-image']} />
            <p className={s['group-text']}>
              г. Москва <br />
              ул. Московская 27-35 <br />
              555 555
            </p>
          </div>
        </div>
        <div className={s['contacts-content-right']}>
          <h3>Подписка</h3>
          <p className={s['contacts-content-right-subtitle']}>
            Будьте в курсе событий
          </p>
          <form className={s['contacts-subscribe']}>
            <input type='email' placeholder='email' />
            <button type='submit'>отправить</button>
          </form>
          <p className={s['contacts-content-right-subscribe']}>
            Подписывайтесь на нас
          </p>
          <ul className={s['contacts-socials']}>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-youtube']}
              >
                <span className={s['hidden']}>youtube</span>
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-linkedin']}
              >
                <span className={s['hidden']}>linkedin</span>
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-google']}
              >
                <span className={s['hidden']}>linkedin</span>
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-facebook']}
              >
                <span className={s['hidden']}>facebook</span>
              </a>
            </li>
            <li>
              <a
                href='!'
                className={s['contacts-socials-link contacts-socials-twitter']}
              >
                <span className={s['hidden']}>twitter</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
