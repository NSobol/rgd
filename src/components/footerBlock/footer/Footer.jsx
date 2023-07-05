import React from 'react'
import { Logo } from '../../headerBlock/logo/Logo'
import LinkIcon from './../../../Images/button.svg'
import s from './footer.module.css';

export const Footer = () => {
    return (
        <div className={s.footer}>
            <Logo />
            <a href='!/' className={s['footer-link']}><img src={LinkIcon} alt="Наверх" className={s.icon}/></a>
            <p>2018WEB</p>
        </div>
    )
}
