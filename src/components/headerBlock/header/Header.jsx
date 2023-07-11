import React from 'react';
import { Logo } from '../logo/Logo';
import { Menu } from '../menu/Menu';
import s from './header.module.css';

export const Header = () => {
  return (
    <div className={s['header']} id='header'>
        <Logo />
        <Menu />
    </div>
  );
};
