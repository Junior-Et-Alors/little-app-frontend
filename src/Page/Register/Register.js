import React from 'react';
import './Register.scss';
import Header from '../../Layouts/Header/Header'

export default function Register() {
  return (
    <div className='register'>
    <Header />
      <h1 className='register__title'>Inscription</h1>
      <form action='' className='register-form'>
        <div className='register-form__input-container'>
          <label htmlFor='input-email' className='register-form_label'>
            Email *
          </label>
          <input
            type='email'
            className='register-form__input'
            id='input-email'
          />
        </div>
        <div className='register-form__input-container'>
          <label htmlFor='input-password' className='register-form_label'>
            Mot de passe *
          </label>
          <input
            type='password'
            className='register-form__input'
            id='input-password'
          />
        </div>
        <div className='register-form__input-container'>
          <label
            htmlFor='password-confirmation'
            className='register-form_label'
          >
           Confirmez le mot de passe *
          </label>
          <input
            type='password'
            className='register-form__input'
            id='password-confirmation'
          />
        </div>
        <div className='register-form__input-container'>
          <label htmlFor='input-firstname' className='register-form_label'>
            Prénom *
          </label>
          <input
            type='text'
            className='register-form__input'
            id='input-firstname'
          />
        </div>
        <div className='register-form__input-container'>
          <label htmlFor='input-lastname' className='register-form_label'>
            Nom *
          </label>
          <input
            type='text'
            className='register-form__input'
            id='input-lastname'
          />
        </div>
      </form>
    </div>
  );
}
