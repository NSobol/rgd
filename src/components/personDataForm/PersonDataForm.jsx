import React from 'react';

export const PersonDataForm = () => {
  return (
    <div>
      <form>
        <h2>Персональные данные</h2>
        <div className='form-group'>
          <div className='form-group-item'>
            <label htmlFor='surname'>Фамилия</label>
            <input type='text' name='surname' id='surname' required />
          </div>
          <div className='form-group-item'>
            <label htmlFor='name'>Имя</label>
            <input type='text' name='name' id='name' required />
          </div>
          <div className='form-group-item'>
            <label htmlFor='middleName'>Отчество</label>
            <input type='text' name='middleName' id='middleName' required />
          </div>
        </div>
        <div className='form-group-item'>
          <label htmlFor='tel'>Контактный телефон</label>
          <input type='tel' name='tel' id='tel' required />
        </div>
        <div className='form-group-item'>
          <label htmlFor='email'>E-mail</label>
          <input type='email' name='email' id='email' required />
        </div>

        <h2>Способ оплаты</h2>
      </form>
    </div>
  );
};
