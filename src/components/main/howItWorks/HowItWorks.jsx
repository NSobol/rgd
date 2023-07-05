import React from 'react';
import Monitor from './../../../Images/monitor.png';
import Office from './../../../Images/Subtract.png';
import Globus from './../../../Images/globus.png';
import s from './howItWorks.module.css';

export const HowItWorks = () => {
    return (
        <div className={s.container}>
            <div className={s.header}>
                <h2 className={s.title}>Как это работает</h2>
                <a href='!/' className={s.link}>Узнать подробнее</a>    
            </div>
            <ul> 
                <li>
                    <img src={Monitor} alt='Монитор'/>
                    <p>Удобный заказ на сайте</p> 
                </li>
                <li>
                    <img src={Office} alt='Здание офиса'/>
                    <p>Нет необходимости ехать в офис</p> 
                </li>
                <li>
                    <img src={Globus} alt='Глобус'/>
                    <p>Огромный выбор направлений</p> 
                </li>
            </ul> 
        </div>
    )
}
