import React from 'react'
import s from './menu.module.css';

export const Menu = () => {
    return (
        <div className={s.menu}>
            <nav>
                <ul className={s['menu-list']}>
                    <li className={s['menu-list-item']}><a href="!/" className={s['menu-list-item-link']}>О нас</a></li>
                    <li className={s['menu-list-item']}><a href="!/" className={s['menu-list-item-link']}>Как это работает</a></li>
                    <li className={s['menu-list-item']}><a href="!/" className={s['menu-list-item-link']}>Отзывы</a></li>
                    <li className={s['menu-list-item']}><a href="!/" className={s['menu-list-item-link']}>Контакты</a></li>
                </ul>
            </nav>
        </div>
    )
}
