import React from 'react';
import './modal.css';

export const Modal = ({ active, setActive, children }) => {
  return (
    <div className={active ? 'modal active' : 'modal'}>
      <div className={active ? 'modal__content active' : 'modal__content'}>
        {children}
        <button className='modal__close' onClick={() => setActive(false)}>
          Понятно
        </button>
      </div>
    </div>
  );
};
